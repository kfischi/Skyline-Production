"use client";

import { useState, useRef, useEffect } from "react";
import styles from './ChatBot.module.css';
import { chatFlow, translations } from '@/lib/chatFlow';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // הכפתור מוסתר בהתחלה
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'היי! זאת דנה AI, רוצים שאעזור לכם לתכנן את האירוע שלכם?\n\nבואו נתחיל\nאיזה אירוע מתכננים?',
      sender: 'bot',
      buttons: chatFlow.start.buttons
    }
  ]);
  const [currentStep, setCurrentStep] = useState('start');
  const [userData, setUserData] = useState({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // הכפתור מופיע אחרי 10 שניות
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // מציג את הכפתור
    }, 10000); // 10 שניות

    return () => clearTimeout(timer);
  }, []); // רק פעם אחת כשהקומפוננטה נטענת

  const handleButtonClick = (button) => {
    const currentStepData = chatFlow[currentStep];
    
    // אם זו שאלת בחירה מרובה
    if (currentStepData.type === 'multiSelect') {
      const index = selectedConcerns.indexOf(button.value);
      if (index > -1) {
        setSelectedConcerns(selectedConcerns.filter(v => v !== button.value));
      } else {
        setSelectedConcerns([...selectedConcerns, button.value]);
      }
      return;
    }

    // בחירה רגילה
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

  const handleMultiSelectSubmit = () => {
    if (selectedConcerns.length === 0) return;

    const stepData = {};
    stepData[currentStep] = selectedConcerns;
    
    const newUserData = { ...userData, ...stepData };
    setUserData(newUserData);

    const concernsText = selectedConcerns.map(c => {
      const btn = chatFlow.concern.buttons.find(b => b.value === c);
      return btn ? btn.text : c;
    }).join(', ');

    const userMsg = {
      id: Date.now(),
      text: concernsText,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMsg]);

    setSelectedConcerns([]);

    setTimeout(() => {
      const nextStep = chatFlow[chatFlow.concern.next];
      addBotMessage(nextStep, chatFlow.concern.next);
      setCurrentStep(chatFlow.concern.next);
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
    } else if (currentStepData.id === 'name') {
      stepData.name = input.trim();
    } else if (currentStepData.type === 'phone' || currentStepData.type === 'email') {
      stepData.contactDetails = input.trim();
    }

    const newUserData = { ...userData, ...stepData };
    setUserData(newUserData);
    setInput("");

    // אם זה שלב הפרטים - שלח לדנה!
    if (currentStepData.type === 'phone' || currentStepData.type === 'email') {
      setIsLoading(true);
      
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ leadData: newUserData })
        });

        const data = await response.json();
        
        if (data.success && data.whatsappUrl) {
          // פתח ווטסאפ בחלון חדש
          window.open(data.whatsappUrl, '_blank');
        }
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
      {/* כפתור צף עם תמונת דנה - מופיע אחרי 10 שניות */}
      {isVisible && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.chatButton}
          aria-label="פתח צ'אט עם דנה"
          style={{
            animation: 'slideInUp 0.5s ease-out'
          }}
        >
        <div className={styles.chatButtonCircle}>
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          ) : (
            <img 
              src="https://res.cloudinary.com/dptyfvwyo/image/upload/e_background_removal/v1764427839/%D7%93%D7%A0%D7%94_%D7%91%D7%95%D7%98_vlfygc.png"
              alt="דנה"
            />
          )}
        </div>
        {!isOpen && (
          <>
            <span className={styles.chatButtonText}>
              צ'אט עם דנה
            </span>
            <span className={styles.notification}></span>
          </>
        )}
      </button>
      )}

      {/* חלון הצ'אט */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* כותרת */}
          <div className={styles.chatHeader}>
            <div className={styles.headerIcon}>
              <img 
                src="https://res.cloudinary.com/dptyfvwyo/image/upload/e_background_removal/v1764427839/%D7%93%D7%A0%D7%94_%D7%91%D7%95%D7%98_vlfygc.png"
                alt="דנה"
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
                        src="https://res.cloudinary.com/dptyfvwyo/image/upload/e_background_removal/v1764427839/%D7%93%D7%A0%D7%94_%D7%91%D7%95%D7%98_vlfygc.png"
                        alt="דנה"
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
                        className={`${styles.choiceButton} ${
                          chatFlow[currentStep]?.type === 'multiSelect' && selectedConcerns.includes(btn.value)
                            ? styles.choiceButtonSelected
                            : ''
                        }`}
                      >
                        {chatFlow[currentStep]?.type === 'multiSelect' && selectedConcerns.includes(btn.value) && '✓ '}
                        {btn.text}
                      </button>
                    ))}
                    {chatFlow[currentStep]?.type === 'multiSelect' && selectedConcerns.length > 0 && (
                      <button
                        onClick={handleMultiSelectSubmit}
                        className={styles.submitMultiButton}
                      >
                        שלח ({selectedConcerns.length}) ✓
                      </button>
                    )}
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

                {/* כפתור שליחה לווטסאפ בסוף */}
                {msg.type === 'final' && msg.sender === 'bot' && (
                  <div className={styles.finalButtonContainer}>
                    <button 
                      onClick={async () => {
                        setIsLoading(true);
                        try {
                          const response = await fetch('/api/chat', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ leadData: userData })
                          });
                          const data = await response.json();
                          if (data.success && data.whatsappUrl) {
                            window.open(data.whatsappUrl, '_blank');
                            
                            // הוספת הודעת אישור
                            const confirmMsg = {
                              id: Date.now() + 1,
                              text: '✅ הווטסאפ נפתח! אם לא נפתח, לחץ על הכפתור שוב או פנה ישירות: 052-620-3038',
                              sender: 'bot'
                            };
                            setMessages(prev => [...prev, confirmMsg]);
                          }
                        } catch (error) {
                          console.error('Error:', error);
                        } finally {
                          setIsLoading(false);
                        }
                      }}
                      disabled={isLoading}
                      className={styles.whatsappButton}
                    >
                      {isLoading ? '📤 שולח...' : '💬 שלח פרטים לדנה בווטסאפ'}
                    </button>
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
