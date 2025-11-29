"use client";

import { useState, useRef, useEffect } from "react";
import styles from './ChatBot.module.css';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "היי! אני העוזר הדיגיטלי של Skyline ✨\nאני כאן כדי לעזור לכם לתכנן את האירוע הבא. מה תרצו לדעת?", 
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      const botMsg = { id: Date.now() + 1, text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg = { 
        id: Date.now() + 1, 
        text: "אופס, משהו השתבש. בואו נעבור לווטסאפ: 052-620-3038", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* כפתור צף */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.chatButton}
        aria-label="פתח צ'אט"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
        {!isOpen && <span className={styles.notification}></span>}
      </button>

      {/* חלון הצ'אט */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* כותרת */}
          <div className={styles.chatHeader}>
            <div className={styles.headerIcon}>✨</div>
            <div>
              <h3 className={styles.headerTitle}>Skyline AI</h3>
              <p className={styles.headerStatus}>
                <span className={styles.statusDot}></span> זמין כעת
              </p>
            </div>
          </div>

          {/* איזור ההודעות */}
          <div className={styles.messagesArea}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={msg.sender === 'user' ? styles.userMessage : styles.botMessage}
              >
                <div className={styles.messageAvatar}>
                  {msg.sender === 'user' ? '👤' : '🤖'}
                </div>
                <div className={styles.messageBubble}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className={styles.typing}>
                <span>מקליד</span>
                <span className={styles.dots}>
                  <span>.</span><span>.</span><span>.</span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* איזור הקלדה */}
          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="שאל אותי כל דבר..."
              className={styles.input}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={styles.sendButton}
              aria-label="שלח"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
