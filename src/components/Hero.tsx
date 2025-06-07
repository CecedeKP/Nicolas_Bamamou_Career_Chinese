import { ArrowDown, RefreshCw, Quote, Globe } from "lucide-react";
import profileImage from "@/assets/images/bamamou.jpg";
import { useState, useEffect } from 'react';
import { quotes } from "@/data/quotes";

const Hero = () => {
  const [quoteData, setQuoteData] = useState({ content: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const getRandomQuote = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteData(quotes[randomIndex]);
    setTimeout(() => setIsLoading(false), 300); // Add small delay for animation
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16 pb-8">
      {/* Language Switcher */}
      <div className="absolute top-8 right-8 z-50 language-switcher">
        <div className="relative">
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md 
                       border border-white/20 hover:bg-white/20 transition-all duration-300
                       shadow-lg text-primary"
          >
            <Globe className="w-5 h-5" />
            <span>中文</span>
          </button>
          
          {isLanguageMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 rounded-xl overflow-hidden
                          bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <a
                href="https://nicolasbammaou.netlify.app/"
                className="flex items-center gap-2 px-4 py-3 hover:bg-white/20 transition-all duration-300"
              >
                <img src="/flags/en.svg" alt="English" className="w-5 h-5 rounded-full" />
                <span>English</span>
              </a>
              <a
                href="https://bamamounicolas.netlify.app/"
                className="flex items-center gap-2 px-4 py-3 hover:bg-white/20 transition-all duration-300"
              >
                <img src="/flags/fr.svg" alt="Français" className="w-5 h-5 rounded-full" />
                <span>Français</span>
              </a>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left column */}
        <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">你好，我是</span>
            <span className="text-primary">Nicolas Bamamou （尼克）</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            工程师 | 创新者 | 创造者
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            我将复杂的工程挑战转化为优雅的解决方案。凭借横跨电气系统、电池设计、嵌入式编程和网页开发的专业知识，我为每个项目带来独特的视角。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              查看我的作品
            </a>
            <a href="#contact" className="btn-accent flex items-center gap-2">
              联系我
            </a>
          </div>
        </div>
        
        {/* Right column */}
        <div className="flex-1 max-w-md flex flex-col items-center justify-center animate-fade-in-up" 
             style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="relative mb-8">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-primary/10 rounded-full absolute -top-6 -left-6"></div>
            <div className="w-72 h-72 md:w-80 md:h-80 bg-accent/10 rounded-full absolute -bottom-6 -right-6"></div>
            <div className="w-72 h-72 md:w-80 md:h-80 bg-white relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={profileImage} 
                alt="专业形象照" 
                className="w-full h-full object-cover"
              />  
            </div>
          </div>
          
          {/* Quote section */}
          <div className="w-full text-center max-w-md transform transition-all duration-300 hover:scale-105">
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-xl shadow-xl border border-white/20">
              <Quote className="w-8 h-8 text-primary/40 mb-4 mx-auto" />
              <p className="text-xl font-serif italic text-gray-800 mb-4 leading-relaxed">
                "{quoteData.content}"
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gray-300"></div>
                <p className="text-sm font-medium text-gray-600">
                  {quoteData.author}
                </p>
                <div className="h-px w-12 bg-gray-300"></div>
              </div>
              <button 
                onClick={getRandomQuote}
                disabled={isLoading}
                className="mt-4 p-3 rounded-full hover:bg-white/50 transition-all duration-300 disabled:opacity-50 group"
                aria-label="刷新引用"
              >
                <RefreshCw className={`w-5 h-5 text-primary group-hover:scale-110 transition-transform ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="向下滚动">
          <ArrowDown className="text-primary w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
