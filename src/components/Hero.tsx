import { ArrowDown, Github, Linkedin, Mail, Code, Zap, Cpu, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import SkillShowcase from './SkillShowcase';
const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [glitchActive, setGlitchActive] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Parallax and delay state
  const [showSections, setShowSections] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Show sections after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSections(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadingTips = [
    "Initializing quantum processors...",
    "Compiling reality matrices...",
    "Synchronizing digital dimensions...",
    "Calibrating creative algorithms...",
    "Loading artistic neural networks...",
    "Booting imagination engine...",
    "Rendering infinite possibilities..."
  ];

  const codeSnippets = [
    "const magic = () => creativity();",
    "function dream() { return reality; }",
    "while(true) { innovate(); }",
    "const future = await Promise.resolve();",
    "export default imagination;",
    "async function create() { await inspire(); }"
  ];

  const headingWords = ["Creative", "Developer", "+", "Designer"];
  const taglineText = "Building digital products that not only work—but move, feel, and connect.";

  // Typing animation for heading
  const [headingIndex, setHeadingIndex] = useState(0);
  const [typedHeading, setTypedHeading] = useState("");
  const [displayedHeading, setDisplayedHeading] = useState([]);

  useEffect(() => {
    let timeout;
    if (headingIndex < headingWords.length) {
      let currentWord = headingWords[headingIndex];
      let charIndex = 0;
      setTypedHeading("");
      timeout = setInterval(() => {
        setTypedHeading((prev) => {
          const next = currentWord.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentWord.length + 1) {
            clearInterval(timeout);
            setDisplayedHeading((prevArr) => [...prevArr, currentWord]);
            setTimeout(() => setHeadingIndex((prev) => prev + 1), 400);
          }
          return next;
        });
      }, 70);
    }
    return () => clearInterval(timeout);
  }, [headingIndex]);

  // Typing animation for tagline
  const [typedTagline, setTypedTagline] = useState("");
  useEffect(() => {
    let idx = 0;
    setTypedTagline("");
    const interval = setInterval(() => {
      setTypedTagline(taglineText.substring(0, idx + 1));
      idx++;
      if (idx > taglineText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const headingLines = [
    { text: "Creative", className: "text-5xl md:text-7xl" },
    { text: "Developer", className: "text-5xl md:text-7xl" },
    { text: "+", className: "text-3xl md:text-4xl text-center w-full block" },
    { text: "Designer", className: "text-5xl md:text-7xl" },
  ];

  // Typing animation for heading lines
  const [headingLineIndex, setHeadingLineIndex] = useState(0);
  const [typedHeadingLine, setTypedHeadingLine] = useState("");
  const [displayedHeadingLines, setDisplayedHeadingLines] = useState([]);

  useEffect(() => {
    let timeout;
    if (headingLineIndex < headingLines.length) {
      let currentLine = headingLines[headingLineIndex].text;
      let charIndex = 0;
      setTypedHeadingLine("");
      timeout = setInterval(() => {
        setTypedHeadingLine((prev) => {
          const next = currentLine.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentLine.length + 1) {
            clearInterval(timeout);
            setDisplayedHeadingLines((prevArr) => [...prevArr, currentLine]);
            setTimeout(() => setHeadingLineIndex((prev) => prev + 1), 400);
          }
          return next;
        });
      }, 70);
    }
    return () => clearInterval(timeout);
  }, [headingLineIndex]);

  // Repeated typing animation for tagline
  const [taglinePhase, setTaglinePhase] = useState("typing"); // typing, pausing, erasing
  const taglineTypingSpeed = 30;
  const taglinePause = 1200;
  const taglineEraseSpeed = 18;

  useEffect(() => {
    let timeout;
    if (taglinePhase === "typing") {
      if (typedTagline.length < taglineText.length) {
        timeout = setTimeout(() => {
          setTypedTagline(taglineText.substring(0, typedTagline.length + 1));
        }, taglineTypingSpeed);
      } else {
        timeout = setTimeout(() => setTaglinePhase("pausing"), taglinePause);
      }
    } else if (taglinePhase === "pausing") {
      timeout = setTimeout(() => setTaglinePhase("erasing"), taglinePause);
    } else if (taglinePhase === "erasing") {
      if (typedTagline.length > 0) {
        timeout = setTimeout(() => {
          setTypedTagline(taglineText.substring(0, typedTagline.length - 1));
        }, taglineEraseSpeed);
      } else {
        timeout = setTimeout(() => setTaglinePhase("typing"), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedTagline, taglinePhase]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Interactive particles system
  useEffect(() => {
    const createParticle = (x, y) => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x,
        y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1,
        size: Math.random() * 4 + 2,
        color: `hsl(${Math.random() * 60 + 140}, 70%, 60%)`,
        type: Math.random() > 0.5 ? 'circle' : 'square'
      };
      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    const interval = setInterval(() => {
      if (!isSplineLoaded) {
        createParticle(
          mousePosition.x + (Math.random() - 0.5) * 100,
          mousePosition.y + (Math.random() - 0.5) * 100
        );
      }
    }, 200);

    return () => clearInterval(interval);
  }, [mousePosition, isSplineLoaded]);

  // Particle animation
  useEffect(() => {
    const animate = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        life: particle.life - 0.02,
        size: particle.size * 0.98
      })).filter(particle => particle.life > 0));

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Loading progress and tips
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) return prev;
        const increment = Math.random() * 12 + 3;
        return Math.min(prev + increment, 90);
      });
    }, 300);

    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % loadingTips.length);
    }, 2000);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000);

    const fallbackTimer = setTimeout(() => {
      if (!isSplineLoaded) {
        setShowFallback(true);
        setLoadingProgress(100);
      }
    }, 8000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tipInterval);
      clearInterval(glitchInterval);
      clearTimeout(fallbackTimer);
    };
  }, [isSplineLoaded]);

  // Typing effect
  useEffect(() => {
    if (!isSplineLoaded) {
      const text = loadingTips[currentTip];
      let index = 0;
      setTypedText('');
      setIsTyping(true);

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setTypedText(text.substring(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentTip, isSplineLoaded]);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
    setLoadingProgress(100);
    setParticles([]);
    setTimeout(() => setLoadingProgress(0), 500);
  };

  const handleInteractiveClick = (e) => {
    if (!isSplineLoaded) {
      setClickCount(prev => prev + 1);
      
      // Create explosion effect
      for (let i = 0; i < 10; i++) {
        const newParticle = {
          id: Date.now() + Math.random() + i,
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 15,
          vy: (Math.random() - 0.5) * 15,
          life: 1,
          size: Math.random() * 6 + 3,
          color: `hsl(${Math.random() * 60 + 140}, 80%, 70%)`,
          type: 'star'
        };
        setParticles(prev => [...prev, newParticle]);
      }
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Interactive Particles Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute transition-all duration-100 ${
              particle.type === 'circle' ? 'rounded-full' : 
              particle.type === 'square' ? 'rounded-sm' : 'transform rotate-45'
            }`}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.life,
              transform: particle.type === 'star' ? 'rotate(45deg)' : 'none',
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
          />
        ))}
      
      
      </div>

      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {!showFallback && (
       <iframe
       src="https://my.spline.design/chatgptkeyboard-ZMB3GS2L1zFsCZbGik3Yvr31/"
       frameBorder="0"
       width="100%"
       height="600px"   // give it a fixed or min height to avoid collapsing
       className={`transition-all duration-1000 ${
         isSplineLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
       }`}
       onLoad={handleSplineLoad}
       style={{
         pointerEvents: 'auto',
         transform: 'scale(1)',
         minHeight: '500px',   // safeguard for parent layout
       }}
       loading="eager"
       title="3D Computer Animation"
       allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking" 
       // 🚀 remove sandbox unless absolutely needed
     />
     
        )}
        
        {/* Enhanced Interactive Fallback */}
        {(showFallback || !isSplineLoaded) && (
          <div
            className={`absolute inset-0 bg-gradient-to-br from-black via-black to-black transition-all duration-1000 ${
              showFallback ? 'opacity-100' : 'opacity-90'
            }`}
            onClick={handleInteractiveClick}
            style={{ cursor: !isSplineLoaded ? 'pointer' : 'default' }}
          >
            {/* Dynamic Code Matrix */}
            <div className="absolute inset-0 overflow-hidden">
              {codeSnippets.map((code, i) => (
                <div
                  key={i}
                  className="absolute text-emerald-400/40 font-mono text-xs md:text-sm animate-pulse select-none"
                  style={{
                    left: `${(i * 15) % 100}%`,
                    top: `${(i * 20) % 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + (i % 3)}s`,
                    transform: `translateY(${Math.sin(Date.now() * 0.001 + i) * 10}px)`,
                  }}
                >
                  {code}
                </div>
              ))}
            </div>

            {/* Interactive Circuit Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1={`${(i * 8) % 100}%`}
                  y1="0%"
                  x2={`${((i * 8) + 30) % 100}%`}
                  y2="100%"
                  stroke="#10b981"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + (i % 2)}s`
                  }}
                />
              ))}
            </svg>

            {/* Mouse follower effect */}
            <div
              className="absolute w-32 h-32 bg-emerald-400/10 rounded-full blur-xl pointer-events-none transition-all duration-300"
              style={{
                left: mousePosition.x - 64,
                top: mousePosition.y - 64,
                transform: `scale(${1 + Math.sin(Date.now() * 0.005) * 0.2})`
              }}
            />
          </div>
        )}
        
        {/* Ultra-Interactive Loading Screen */}
        {!isSplineLoaded && !showFallback && (
          <div 
            className="absolute inset-0 flex items-center justify-center   cursor-pointer"
            onClick={handleInteractiveClick}
          >
            <div className="text-center space-y-8 relative">
              {/* Holographic Loading Ring */}
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin"></div>
                <div className="absolute inset-4 rounded-full border-4 border-transparent border-r-green-400 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                <div className="absolute inset-8 rounded-full border-4 border-transparent border-b-emerald-500 animate-spin" style={{animationDuration: '0.8s'}}></div>
                
                {/* Central processor animation */}
                <div className="absolute inset-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-black animate-bounce" />
                </div>

                {/* Orbiting icons */}
                {[Code, Zap, Wifi].map((Icon, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8 text-emerald-400"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 120 + Date.now() * 0.001 * 50}deg) translateY(-50px)`,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>

              {/* Glitch effect on text */}
              <div className="relative">
                <div className={`text-emerald-400 text-xl font-mono transition-all duration-150 ${
                  glitchActive ? 'text-red-400 transform skew-x-2' : ''
                }`}>
                  <span className="inline-block">{typedText}</span>
                  <span className={`inline-block w-2 h-5 bg-emerald-400 ml-1 ${isTyping ? 'animate-pulse' : 'animate-ping'}`}></span>
                </div>
                
                {/* Glitch overlay */}
                {glitchActive && (
                  <div className="absolute inset-0 text-cyan-400 opacity-50 transform translate-x-1">
                    {typedText}
                  </div>
                )}
              </div>

              {/* Interactive Progress Bar */}
              <div className="w-80 bg-gray-800 rounded-full h-3 relative overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 h-full rounded-full transition-all duration-500 ease-out relative"
                  style={{ width: `${loadingProgress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
                
                {/* Progress indicators */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        loadingProgress > i * 20 ? 'bg-white' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Click interaction feedback */}
              <div className="text-emerald-400/60 text-sm space-y-2">
                <p className="animate-pulse">Click anywhere to generate energy particles!</p>
                <p className="text-xs">Energy generated: {clickCount} ⚡</p>
              </div>

              {/* Floating action buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                {['⚡', '🚀', '✨', '🔥'].map((emoji, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center text-lg hover:bg-emerald-400/30 transition-all duration-300 hover:scale-110"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animation: 'bounce 2s infinite'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInteractiveClick(e);
                    }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>

              {/* Loading percentage */}
              <div className="text-2xl font-bold text-white">
                {Math.round(loadingProgress)}%
              </div>
            </div>
          </div>
        )}
        
        {/* Dynamic overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      {/* Main content */}
      <div
        className={`container mx-auto px-6 relative z-10 pt-20 transition-opacity duration-700 ${showSections ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translateY(${scrollY * 0.2}px)`, // slower parallax for main content
          transition: 'opacity 0.7s, transform 0.7s',
          willChange: 'transform, opacity',
        }}
      >
        <div className="animate-fade-in">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              <span className="typewriter font-mono bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                <span className=" press-start-2p-regular1">Creative</span>
              </span>
              <span className="mt-4 ml-8 block bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 text-2xl bg-clip-text text-transparent ">
              <span className="press-start-2p-regular1">Developer <br/><span className="ml-[200px]">+</span> <br/><span className="ml-[220px]">Designer</span></span>              </span> 
            </h1>
          
          </div>
        </div>
      
      
      </div>
      

      {/* Bottom section */}
      <div
        className={`container mt-[500px] px-6 absolute z-10 pb-20 transition-opacity duration-700 ${showSections ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translateY(${scrollY * 0.4}px)`, // faster parallax for bottom section
          transition: 'opacity 0.7s, transform 0.7s',
          willChange: 'transform, opacity',
        }}
      >
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pointer-events-auto">
            <a
              href="https://github.com/veeranjaneyulu12170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/90 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-3 rounded-full backdrop-blur-sm hover:bg-emerald-400/10"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/veeranjaneyulu-pepakayala-629392351/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/90 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-3 rounded-full backdrop-blur-sm hover:bg-emerald-400/10"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:veeranjaneyulupepakyala@gmail.com"
              className="text-emerald-400/90 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-3 rounded-full backdrop-blur-sm hover:bg-emerald-400/10"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="text-emerald-400/80 hover:text-emerald-400 transition-colors duration-300 animate-bounce p-2 rounded-full backdrop-blur-sm hover:bg-emerald-400/10 pointer-events-auto"
          >
            <ArrowDown size={32} />
          </button>
          
          <div className="relative bottom-[100px] mb-2 flex flex-col items-center">
          <p className="text-lg mr-12 md:text-xl text-white/90 max-w-4xl leading-relaxed drop-shadow-xl from-stone-400 font-mono">
            {/* Animated tagline */}
            {typedTagline}
            {typedTagline.length < taglineText.length && <span className="inline-block w-2 h-5 bg-emerald-400 ml-1 animate-pulse"></span>}
          </p>
            </div>
        </div>
        <div className="relative bottom-[150px] left-[1165px] z-30 w-36 h-36 bg-black rounded-md shadow-md flex items-center justify-center text-white text-sm font-medium">
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis et, optio dolorum sequi, ipsam magnam odit aliquid omnis deleniti veritatis accusantium distinctio doloribus earum exercitationem minima! Quidem, molestiae consectetur!</p>
      </div>

      <style >{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
  
    
    </section>
  );
};

export default Hero;