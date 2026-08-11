import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import faqData from '../data/faqs.json';

// ── Keyword matcher ───────────────────────────────────────────────────────────
// Scores each FAQ by how many words in the user's message appear in the Q+A.
// Returns the best match above a minimum score threshold.
function findBestMatch(userMessage) {
  const input = userMessage.toLowerCase();
  const inputWords = input
    .split(/\W+/)
    .filter((w) => w.length > 2); // ignore tiny words like "is", "at"

  let bestScore = 0;
  let bestFaq = null;

  faqData.faqs.forEach((faq) => {
    const haystack = `${faq.question} ${faq.answer}`.toLowerCase();
    let score = 0;
    inputWords.forEach((word) => {
      if (haystack.includes(word)) score++;
    });
    // Bonus: exact question fragment match
    if (haystack.includes(input.slice(0, 20))) score += 3;
    if (score > bestScore) {
      bestScore = score;
      bestFaq = faq;
    }
  });

  // Require at least 1 matching keyword
  return bestScore >= 1 ? bestFaq : null;
}

// ── Canned responses ──────────────────────────────────────────────────────────
const GREETINGS = ['hi', 'hello', 'hey', 'good morning', 'good evening', 'howdy'];
const THANKS = ['thank', 'thanks', 'thank you', 'thx', 'appreciate'];

function getBotResponse(userMessage) {
  const lower = userMessage.toLowerCase().trim();

  // Greeting
  if (GREETINGS.some((g) => lower.startsWith(g))) {
    return "Hello! 👋 I'm the Peer Consulting ITIL assistant. Ask me anything about ITIL certifications, pricing, or training tracks!";
  }
  // Thanks
  if (THANKS.some((t) => lower.includes(t))) {
    return "You're welcome! 😊 Feel free to ask if you have any other ITIL questions.";
  }

  // FAQ match
  const match = findBestMatch(userMessage);
  if (match) {
    return match.answer;
  }

  // Fallback
  return "I specialize in ITIL training questions. Try asking about certification tracks, pricing, prerequisites, or specific ITIL modules. For other inquiries, please use our Contact Us page.";
}

// ── Suggested starter questions ───────────────────────────────────────────────
const SUGGESTED = [
  'What ITIL tracks do you offer?',
  'How much does ITIL Foundation cost?',
  'What are the ITIL Specialist prices?',
  'Are there any prerequisites?',
];

// ── Message bubble ────────────────────────────────────────────────────────────
function MessageBubble({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-[#4DA3FF]/20 border border-[#4DA3FF]/40 flex items-center justify-center flex-shrink-0">
          <span className="material-icons text-[#4DA3FF] text-[14px]">smart_toy</span>
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-[#4DA3FF] text-white rounded-br-sm'
            : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-100 dark:border-slate-600 rounded-bl-sm'
        }`}
      >
        {msg.content}
      </div>
      {isUser && (
        <div className="w-7 h-7 rounded-full bg-[#4DA3FF] flex items-center justify-center flex-shrink-0">
          <span className="material-icons text-white text-[14px]">person</span>
        </div>
      )}
    </div>
  );
}

// ── Typing indicator ──────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 justify-start">
      <div className="w-7 h-7 rounded-full bg-[#4DA3FF]/20 border border-[#4DA3FF]/40 flex items-center justify-center flex-shrink-0">
        <span className="material-icons text-[#4DA3FF] text-[14px]">smart_toy</span>
      </div>
      <div className="bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // hidden until first scroll
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content:
        "Hi there! 👋 I'm your ITIL training assistant at Peer Consulting. Ask me about certification tracks, pricing, prerequisites, or any ITIL-related question!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Show bubble after first scroll — mirrors ScrollToTopButton behaviour exactly
  useEffect(() => {
    const checkScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsVisible(scrolled > 300);
    };
    checkScroll(); // run once on mount in case page already scrolled (SPA navigation)
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);


  // Listen for custom 'openChatbot' event dispatched by buttons on any page
  // Also make the bubble visible immediately when triggered programmatically
  useEffect(() => {
    const handler = () => { setIsVisible(true); setIsOpen(true); };
    window.addEventListener('openChatbot', handler);
    return () => window.removeEventListener('openChatbot', handler);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);


  const sendMessage = (text) => {
    const trimmed = (text || inputValue).trim();
    if (!trimmed) return;

    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate realistic typing delay (600-1200ms)
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      const reply = getBotResponse(trimmed);
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', content: reply }]);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Portal to document.body — escapes any parent CSS transform (e.g. PageTransition)
  // so that `fixed` positioning is always relative to the true viewport.
  return createPortal(
    <>
      {/* Chat Window — only visible after scroll + when open */}
      <div
        className={`fixed bottom-40 right-8 z-[60] w-[370px] max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isVisible && isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
        style={{ height: '500px' }}
      >
        {/* Header */}
        <div className="bg-[#071B34] px-4 py-3.5 flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#4DA3FF]/20 border border-[#4DA3FF]/50 flex items-center justify-center">
            <span className="material-icons text-[#4DA3FF] text-[18px]">smart_toy</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight">ITIL Assistant</p>
            <p className="text-[#4DA3FF] text-[11px] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
              Online · Peer Consulting
            </p>
          </div>
          <button
            onClick={toggleOpen}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            aria-label="Close chat"
          >
            <span className="material-icons text-[20px]">close</span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#f8fafc] dark:bg-slate-900">
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
          {isTyping && <TypingIndicator />}

          {/* Suggested questions — shown only at start */}
          {showSuggestions && messages.length === 1 && !isTyping && (
            <div className="space-y-2 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
                Suggested questions
              </p>
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="w-full text-left text-xs px-3 py-2 rounded-xl border border-[#4DA3FF]/30 bg-white dark:bg-slate-800 text-[#4DA3FF] hover:bg-[#4DA3FF] hover:text-white transition-all duration-200 font-medium shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex-shrink-0">
          <div className="flex items-center gap-2 bg-[#f0f4f8] dark:bg-slate-700 rounded-xl px-3 py-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about ITIL certifications…"
              className="flex-1 bg-transparent text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!inputValue.trim() || isTyping}
              className="w-8 h-8 bg-[#4DA3FF] disabled:opacity-40 rounded-lg flex items-center justify-center text-white hover:bg-[#3b82f6] transition-all active:scale-95 disabled:cursor-not-allowed flex-shrink-0"
              aria-label="Send message"
            >
              <span className="material-icons text-[16px]">send</span>
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-2">
            Powered by Peer Consulting · ITIL knowledge base
          </p>
        </div>
      </div>

      {/* Floating Bubble — hidden until user scrolls down, sits above the scroll-to-top arrow */}
      <button
        onClick={toggleOpen}
        className={`fixed bottom-24 right-8 z-[60] w-14 h-14 rounded-full bg-[#4DA3FF] hover:bg-[#3b82f6] text-white shadow-[0_8px_30px_rgba(77,163,255,0.5)] flex items-center justify-center transition-all duration-300 active:scale-95 ${
          isVisible
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-75'
        } ${ !isOpen ? 'hover:scale-110' : '' }`}
        aria-label={isOpen ? 'Close chat' : 'Chat with ITIL Expert'}
        title="Chat with ITIL Expert"
      >
        <span
          className={`material-icons text-[26px] transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-50 absolute' : 'opacity-100 scale-100'
          }`}
        >
          chat
        </span>
        <span
          className={`material-icons text-[22px] transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50 absolute'
          }`}
        >
          close
        </span>
        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute w-full h-full rounded-full bg-[#4DA3FF]/30 animate-ping" />
        )}

      </button>
    </>,
    document.body
  );
}
