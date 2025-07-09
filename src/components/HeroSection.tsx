import { motion } from 'framer-motion';
import { EyeOff, Lock, CheckCircle2, ChevronDown, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const trustFeatures = [
  {
    icon: EyeOff,
    text: "100% Discreet Loyalty Test",
    color: "from-violet-400 to-violet-500",
    animationDelay: 0
  },
  {
    icon: Lock,
    text: "Secure Lazo Service",
    color: "from-blue-400 to-blue-500",
    animationDelay: 0.5
  },
  {
    icon: CheckCircle2,
    text: "10,000+ Loyalty tests completed",
    color: "from-emerald-400 to-emerald-500",
    animationDelay: 1
  }
];

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-lazo-pink/5">
      <div className="container relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Hero Video - Mobile format, fixed position */}
          <motion.div
            initial={{ opacity: 0.8, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-[280px] mx-auto"
          >
            <div className="relative aspect-[9/16]">
              {/* Background bubble effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-lazo-pink/30 to-lazo-bordeaux/20 rounded-3xl blur-xl" />
              
              {/* Video container with glass effect */}
              <div 
                className="absolute inset-2 bg-white/90 backdrop-blur-[5px] rounded-2xl shadow-xl overflow-hidden border border-white/30 group"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                <video
                  ref={videoRef}
                  src="/video/final version Lazo motion video demo .mov"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlayPause}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />
                
                {/* Video Controls Overlay - Click anywhere for play/pause */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 cursor-pointer ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}
                  onClick={togglePlayPause}
                >
                  {/* Play/Pause Button - Center - Visual indicator only */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 pointer-events-none">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white ml-1" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>

                  {/* Bottom Controls Bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                                         {/* Progress Bar */}
                     <div className="mb-2">
                       <div 
                         className="h-1 bg-white/30 rounded-full cursor-pointer hover:h-1.5 transition-all duration-200"
                         onClick={(e) => {
                           e.stopPropagation();
                           handleProgressClick(e);
                         }}
                       >
                        <div 
                          className="h-full bg-white rounded-full transition-all duration-100"
                          style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                        />
                      </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                      {/* Time Display */}
                      <span className="text-white text-xs font-medium">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>

                                             {/* Sound Control */}
                       <button
                         onClick={(e) => {
                           e.stopPropagation();
                           toggleSound();
                         }}
                         className="w-8 h-8 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                       >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-white" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sound control button - Always visible when controls are not shown */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSound();
                  }}
                  className={`absolute bottom-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${showControls || !isPlaying ? 'opacity-0' : 'opacity-100'}`}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Content Section - Optimized animations */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lazo-bordeaux mb-4 leading-tight">
                Lazo: The #1 Loyalty Test for
                <span className="gradient-text block">Your Relationship</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.a
                href="https://www.getlazo.app/providers"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-white bg-lazo-bordeaux rounded-full hover:bg-lazo-bordeaux-light transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Loyalty Test now
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6"
            >
              <a
                href="#how-it-works"
                className="inline-flex items-center text-gray-600 hover:text-lazo-bordeaux transition-colors duration-300"
              >
                <span className="text-lg">How Lazo Loyalty Test Works</span>
                <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-700 max-w-2xl mx-auto"
            >
              Lazo Loyalty Test helps you make informed decisions about your relationship with our experts in discreet fidelity testing.
            </motion.p>

            {/* Trust Features - Optimized animation delays */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {trustFeatures.map((feature) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: feature.animationDelay
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
                  >
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="small-text font-medium text-gray-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
