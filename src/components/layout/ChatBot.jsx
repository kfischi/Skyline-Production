"use client";

import { useState, useRef, useEffect } from "react";
import styles from './ChatBot.module.css';
import { chatFlow, translations } from '@/lib/chatFlow';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: chatFlow.start.message,
      sender: 'bot',
      buttons: chatFlow.start.buttons
    }
  ]);
  const [currentStep, setCurrentStep] = useState('start');
  const [userData, setUserData] = useState({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleButtonClick = (button) => {
    const stepData = {};
    stepData[currentStep] = button.value;
    
    const newUserData = { ...userData, ...stepData };
    setUserData(newUserData);

    const userMsg = {
      id: Date.now(),
      text: button.text,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const nextStep = chatFlow[button.next];
      
      if (nextStep.conditional && !nextStep.conditional(newUserData)) {
        const skipToNext = chatFlow[nextStep.next];
        addBotMessage(skipToNext, button.next);
        setCurrentStep(button.next);
      } else {
        addBotMessage(nextStep, button.next);
        setCurrentStep(button.next);
      }
    }, 300);
  };

  const addBotMessage = (step, stepId) => {
    const botMsg = {
      id: Date.now() + 1,
      text: step.message,
      sender: 'bot',
      buttons: step.buttons,
      type: step.type,
      placeholder: step.placeholder,
      skipButton: step.skipButton
    };
    setMessages(prev => [...prev, botMsg]);
  };

  const handleTextSubmit = async () => {
    if (!input.trim() && !chatFlow[currentStep].skipButton) return;

    const currentStepData = chatFlow[currentStep];
    
    const userMsg = {
      id: Date.now(),
      text: input.trim() || '(דולג)',
      sender: 'user'
    };
    setMessages(prev => [...prev, userMsg]);

    const stepData = {};
    if (currentStepData.id === 'freeText') {
      stepData.extra = input.trim();
    } else if (currentStepData.type === 'phone' || currentStepData.type === 'email') {
      stepData.contactDetails = input.trim();
    }

    const newUserData = { ...userData, ...stepData };
    setUserData(newUserData);
    setInput("");

    if (currentStepData.type === 'phone' || currentStepData.type === 'email') {
      setIsLoading(true);
      
      try {
        await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ leadData: newUserData })
        });
      } catch (error) {
        console.error('Error sending data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      const nextStep = chatFlow[currentStepData.next];
      addBotMessage(nextStep, currentStepData.next);
      setCurrentStep(currentStepData.next);
    }, 300);
  };

  const handleSkip = () => {
    setInput("");
    handleTextSubmit();
  };

  return (
    <>
      {/* כפתור צף עם תמונת דנה */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.chatButton}
        aria-label="פתח צ'אט עם דנה"
      >
        {isOpen ? (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #C4A572 0%, #B39562 100%)',
            borderRadius: '50%'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        ) : (
          <img 
            src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1764427839/%D7%93%D7%A0%D7%94_%D7%91%D7%95%D7%98_vlfygc_e_background_removal_f_png_haed30.png"
            alt="דנה - Skyline Productions"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        )}
        {!isOpen && <span className={styles.notification}></span>}
      </button>

      {/* חלון הצ'אט */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* כותרת */}
          <div className={styles.chatHeader}>
            <div className={styles.headerIcon}>
              <img 
                src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1764427839/%D7%93%D7%A0%D7%94_%D7%91%D7%95%D7%98_vlfygc_e_background_removal_f_png_haed30.png"
                alt="דנה"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <div>
              <h3 className={styles.headerTitle}>דנה - Skyline</h3>
              <p className={styles.headerStatus}>
                <span className={styles.statusDot}></span> זמינה כעת
              </p>
            </div>
          </div>

          {/* איזור ההודעות */}
          <div className={styles.messagesArea}>
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
                  <div className={styles.messageAvatar}>
                    {msg.sender === 'user' ? (
                      '👤'
                    ) : (
                      <img 
                        src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1764427839/%D7%93%D7%A0%D7%94_%D7%91%D7%95%D7%98_vlfygc_e_background_removal_f_png_haed30.png"
                        alt="דנה"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      />
                    )}
                  </div>
                  <div className={styles.messageBubble}>
                    {msg.text}
                  </div>
                </div>

                {/* כפתורים */}
                {msg.buttons && msg.sender === 'bot' && (
                  <div className={styles.buttonsContainer}>
                    {msg.buttons.map((btn, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleButtonClick(btn)}
                        className={styles.choiceButton}
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                )}

                {/* שדה טקסט */}
                {(msg.type === 'text' || msg.type === 'phone' || msg.type === 'email') && msg.sender === 'bot' && (
                  <div className={styles.textInputContainer}>
                    <input
                      type={msg.type === 'email' ? 'email' : msg.type === 'phone' ? 'tel' : 'text'}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleTextSubmit()}
                      placeholder={msg.placeholder}
                      className={styles.textInput}
                    />
                    <div className={styles.textButtons}>
                      {msg.skipButton && (
                        <button onClick={handleSkip} className={styles.skipButton}>
                          דלג ⏭️
                        </button>
                      )}
                      <button 
                        onClick={handleTextSubmit}
                        disabled={isLoading}
                        className={styles.submitButton}
                      >
                        {isLoading ? '...' : 'שלח 📤'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className={styles.typing}>
                <span>מעבד</span>
                <span className={styles.dots}>
                  <span>.</span><span>.</span><span>.</span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
}
