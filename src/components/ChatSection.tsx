import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  hasImage?: boolean;
  name: string;
}

const messages: Message[] = [
  {
    id: 1,
    text: "Hey, I have some doubts about my partner's loyalty. He's been acting kinda weird lately, hiding his phone and being secretive. Can you follow him on Instagram and see if he replies?",
    isUser: true,
    name: "Anonymous client"
  },
  {
    id: 2,
    text: "Maybe just start casual, like reacting to a story or something.",
    isUser: true,
    name: "Anonymous client"
  },
  {
    id: 3,
    text: "Hey! Sure, I'll do it right now.",
    isUser: false,
    name: "Checker Lazo"
  },
  {
    id: 4,
    text: "I sent him a follow request.",
    isUser: false,
    name: "Checker Lazo"
  },
  {
    id: 5,
    text: "Perfect, let me know if he accepts!",
    isUser: true,
    name: "Anonymous client"
  },
  {
    id: 6,
    text: "2 hours later...",
    isUser: false,
    name: "System"
  },
  {
    id: 7,
    text: "Hey, he just texted me: \"You're cute\"",
    isUser: false,
    name: "Checker Lazo"
  },
  {
    id: 8,
    text: "Damn, I knew he was a cheater. Can you see if he's down to meet up?",
    isUser: true,
    name: "Anonymous client"
  },
  {
    id: 9,
    text: "Sure! See what he just said rn",
    isUser: false,
    name: "Checker Lazo",
    hasImage: true
  },
  {
    id: 10,
    text: "Hoo... tell him you're visiting soon and see if he bites.",
    isUser: true,
    name: "Anonymous client"
  },
  {
    id: 11,
    text: "Alright, I just told him I'm coming next weekend. I'll send you a screenshot when he answers me!",
    isUser: false,
    name: "Checker Lazo"
  }
];

const Avatar = ({ name, isUser }: { name: string; isUser: boolean }) => {
  if (isUser) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <span className="text-sm font-medium text-gray-600">A</span>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-lazo-bordeaux/10 overflow-hidden">
      <img
        src="/images/checker-star.jpg"
        alt="Checker"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const ScrollIndicator = () => (
  <div className="w-full text-center flex flex-col items-center gap-2 text-gray-500">
    <motion.p 
      className="text-sm font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      Scroll to continue
    </motion.p>
    <motion.svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </motion.svg>
  </div>
);

const ChatSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionTop = rect.top;
        const totalHeight = rect.height - viewportHeight;
        
        let progress = (viewportHeight - sectionTop) / totalHeight;
        progress = Math.max(0, Math.min(1, progress));
        
        // Increased first message threshold
        const firstMessageThreshold = 0.35; // 35% of scroll for first message
        let adjustedProgress;
        
        if (progress < firstMessageThreshold) {
          adjustedProgress = 0;
        } else {
          adjustedProgress = (progress - firstMessageThreshold) / (1 - firstMessageThreshold);
          adjustedProgress = Math.pow(adjustedProgress, 0.7);
        }
        
        // Determine scroll direction with debounce
        const currentScrollY = window.scrollY;
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
          setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
          lastScrollY.current = currentScrollY;
        }, 50);

        // Calculate message index with adjusted progress
        const totalMessages = messages.length;
        const rawIndex = adjustedProgress * (totalMessages - 1);
        const newIndex = Math.min(
          Math.floor(rawIndex + 0.15), // Increased offset for quicker transitions
          totalMessages - 1
        );
        
        if (newIndex >= 0 && newIndex < messages.length) {
          setCurrentMessageIndex(newIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const currentMessage = messages[currentMessageIndex];

  const getAnimationProps = (isEntering: boolean) => {
    const yOffset = 40;
    return {
      y: scrollDirection === 'down' 
        ? (isEntering ? yOffset : -yOffset)
        : (isEntering ? -yOffset : yOffset),
      opacity: isEntering ? 0 : 1,
      scale: isEntering ? 0.97 : 1
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[400vh] bg-gradient-to-b from-lazo-pink/5 to-lazo-pink/20"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-12 text-center text-3xl md:text-4xl font-bold text-lazo-bordeaux"
        >
          Real Life Example
        </motion.h2>
        <div className="w-full max-w-3xl mx-auto flex flex-col h-[90vh] relative">
          <div className="flex items-center justify-center flex-1">
            <AnimatePresence mode="wait" initial={false}>
              {currentMessage && (
                <motion.div
                  key={currentMessage.id}
                  initial={getAnimationProps(true)}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      opacity: { duration: 0.3 }
                    }
                  }}
                  exit={getAnimationProps(false)}
                  className="w-full mx-auto transform-gpu"
                >
                  {currentMessage.id === 6 ? (
                    <div className="flex flex-col items-center py-24">
                      <motion.div 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="h-[1px] w-12 bg-lazo-bordeaux/20"></div>
                        <motion.span 
                          className="text-sm text-lazo-bordeaux/60 font-light tracking-wider uppercase"
                          animate={{ opacity: [0.6, 0.8, 0.6] }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        >
                          {currentMessage.text}
                        </motion.span>
                        <div className="h-[1px] w-12 bg-lazo-bordeaux/20"></div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className={`
                      flex items-start gap-3
                      ${currentMessage.isUser ? 'flex-row' : 'flex-row-reverse'}
                      ${messages[currentMessageIndex - 1]?.isUser === currentMessage.isUser ? 'mt-2' : 'mt-6'}
                    `}>
                      <Avatar name={currentMessage.name} isUser={currentMessage.isUser} />
                      <div className={`
                        flex-1 flex flex-col gap-1.5
                        ${currentMessage.isUser ? 'items-start' : 'items-end'}
                      `}>
                        <span className={`
                          text-sm font-light
                          ${messages[currentMessageIndex - 1]?.isUser === currentMessage.isUser ? 'hidden' : ''}
                          ${currentMessage.isUser ? 'text-gray-600' : 'text-lazo-bordeaux'}
                        `}>
                          {currentMessage.name}
                        </span>
                        <div className={`
                          max-w-[75%] rounded-2xl p-4 md:p-5 shadow-sm
                          ${currentMessage.isUser 
                            ? 'bg-gray-100 text-gray-900 rounded-bl-none' 
                            : 'bg-lazo-bordeaux text-white rounded-br-none'}
                        `}>
                          <p className="text-base md:text-lg leading-relaxed">
                            {currentMessage.text}
                          </p>
                          {currentMessage.hasImage && (
                            <motion.img
                              src="/images/conv-chat.jpg"
                              alt="Chat screenshot"
                              className="mt-4 rounded-xl w-full shadow-sm transform-gpu"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ 
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                              }}
                              loading="lazy"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute bottom-8 w-full">
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection; 