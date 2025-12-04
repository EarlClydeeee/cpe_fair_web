import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import TitleLogo from "@/assets/fonts/Archons-of-Innovation.png";
import FrameSvg from "@/assets/frames/frame.svg";
import SportsIcon from "@/assets/categories/Sports.svg";
import BoardIcon from "@/assets/categories/Board.svg";
import EsportsIcon from "@/assets/categories/Esports.svg";
import QuizBeeIcon from "@/assets/categories/Quiz-Bee.svg";
import TalentsIcon from "@/assets/categories/Talents.svg";
import MiniGamesIcon from "@/assets/categories/Mini-Games.svg";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { 
      name: "Overall Ranking", 
      icon: null,
      competitions: [
        { name: "Overall Team Rankings" },
      ],
      color: "from-amber-400 to-yellow-600"
    },
    { 
      name: "Sports Competition", 
      icon: SportsIcon,
      competitions: [
        { name: "Basketball" },
        { name: "Volleyball" },
        { name: "Badminton" },
      ],
      color: "from-red-400 to-orange-600"
    },
    { 
      name: "Logic & Board Competition", 
      icon: BoardIcon,
      competitions: [
        { name: "Chess" },
        { name: "Scrabble" },
        { name: "Sudoku" },
      ],
      color: "from-purple-400 to-indigo-600"
    },
    { 
      name: "Esports Competition", 
      icon: EsportsIcon,
      competitions: [
        { name: "Mobile Legends" },
        { name: "Valorant" },
        { name: "DOTA 2" },
      ],
      color: "from-cyan-400 to-blue-600"
    },
    { 
      name: "Academics Competition", 
      icon: QuizBeeIcon,
      competitions: [
        { name: "Quiz Bee" },
        { name: "Math Challenge" },
        { name: "Science Fair" },
      ],
      color: "from-emerald-400 to-green-600"
    },
    { 
      name: "Talents Competition", 
      icon: TalentsIcon,
      competitions: [
        { name: "Singing" },
        { name: "Dancing" },
        { name: "Acting" },
      ],
      color: "from-pink-400 to-rose-600"
    },
    { 
      name: "Mini Games", 
      icon: MiniGamesIcon,
      competitions: [
        { name: "Relay Race" },
        { name: "Tug of War" },
        { name: "Obstacle Course" },
      ],
      color: "from-teal-400 to-cyan-600"
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] text-white relative overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-amber-500/5 animate-pulse"></div>
        
        {/* Starry background with layers */}
        <div className="absolute inset-0 opacity-40">
          <div className="stars"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="stars" style={{ animationDelay: '-2s' }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-300 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Settings icon with glow */}
        <div className="absolute top-8 right-8 z-10">
          <button className="relative group">
            <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/40 transition-all"></div>
            <div className="relative text-amber-300 hover:text-amber-200 transition-colors p-2 bg-gray-900/40 rounded-full border border-amber-400/30 backdrop-blur-sm">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>

        {/* Main content container */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Title with enhanced glow */}
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400/20 via-amber-400/20 to-purple-400/20"></div>
            <img 
              src={TitleLogo} 
              alt="Archons of Innovation" 
              className="w-full max-w-xl h-auto relative z-10 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]"
              style={{ filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.4))' }}
            />
          </div>

          {/* Category Icons Row with Genshin-style presentation */}
          <div className="flex justify-center items-start gap-8 mb-20 flex-wrap px-4">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="relative group flex flex-col items-center"
              >
                {/* Outer glow effect */}
                {selectedCategory === index && (
                  <div className={`absolute inset-0 scale-[3.5] rounded-full bg-gradient-to-r ${category.color} opacity-20 blur-2xl animate-pulse pointer-events-none`}></div>
                )}
                
                {/* Frame with icon - Single clickable unit */}
                <div 
                  className={`relative w-40 h-40 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    selectedCategory === index ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  }`}
                  onClick={() => setSelectedCategory(index)}
                >
                  {/* Rotating ring animation for selected */}
                  {selectedCategory === index && (
                    <div className="absolute inset-0 scale-[3.2] animate-spin-slow pointer-events-none">
                      <div className={`w-full h-full rounded-full border-2 border-dashed bg-gradient-to-r ${category.color} opacity-30`}></div>
                    </div>
                  )}
                  
                  {/* Frame background */}
                  <div className="absolute inset-0 scale-[3] flex items-center justify-center pointer-events-none">
                    <img 
                      src={FrameSvg} 
                      alt="" 
                      className={`w-full h-full transition-all duration-300 ${
                        selectedCategory === index 
                          ? 'opacity-100 brightness-125' 
                          : 'opacity-70 group-hover:opacity-90 group-hover:brightness-110'
                      }`}
                      style={{
                        filter: selectedCategory === index 
                          ? `drop-shadow(0 0 20px rgba(96, 165, 250, 0.8)) drop-shadow(0 0 40px rgba(251, 191, 36, 0.4))`
                          : 'none'
                      }}
                    />
                  </div>
                  
                  {/* Icon - centered in frame */}
                  {category.icon ? (
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className={`relative z-10 w-20 h-20 transition-all duration-300 pointer-events-none ${
                        selectedCategory === index ? 'brightness-125' : 'group-hover:brightness-110'
                      } group-hover:scale-110`}
                      style={{
                        filter: selectedCategory === index 
                          ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                          : 'none'
                      }}
                    />
                  ) : (
                    <div className="relative z-10 text-6xl group-hover:scale-110 transition-transform pointer-events-none">
                      
                    </div>
                  )}
                </div>
                
                {/* Category Name with border - Also clickable */}
                <div 
                  className="relative mt-4 cursor-pointer"
                  onClick={() => setSelectedCategory(index)}
                >
                  <div className={`absolute inset-0 pointer-events-none ${selectedCategory === index ? `bg-gradient-to-r ${category.color} opacity-20 blur-sm` : ''}`}></div>
                  <p className={`relative text-center text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === index 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {category.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Competition Cards with Ornamental Frame Design */}
          {selectedCategory !== null && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
              {categories[selectedCategory].competitions.map((competition, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Outer glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${categories[selectedCategory].color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 scale-110`}></div>
                  
                  {/* Decorative Frame Card */}
                  <div className="relative bg-[#1a1f3a] p-8 transition-all duration-300 overflow-visible" style={{ minHeight: '280px' }}>
                    {/* Main Border Frame */}
                    <div className="absolute inset-0 border-4 border-amber-500/80 group-hover:border-amber-400 transition-colors duration-300" style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    }}></div>
                    
                    {/* Inner Border */}
                    <div className="absolute inset-2 border-2 border-amber-600/40"></div>
                    
                    {/* Corner Ornaments - Top Left */}
                    <div className="absolute top-0 left-0 w-12 h-12">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-transparent"></div>
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-300 to-transparent"></div>
                      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-400/60"></div>
                      <div className={`absolute top-0 left-0 w-3 h-3 bg-gradient-to-br ${categories[selectedCategory].color} group-hover:scale-125 transition-transform duration-300`}></div>
                    </div>
                    
                    {/* Corner Ornaments - Top Right */}
                    <div className="absolute top-0 right-0 w-12 h-12">
                      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-amber-300 to-transparent"></div>
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-amber-300 to-transparent"></div>
                      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400/60"></div>
                      <div className={`absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl ${categories[selectedCategory].color} group-hover:scale-125 transition-transform duration-300`}></div>
                    </div>
                    
                    {/* Corner Ornaments - Bottom Left */}
                    <div className="absolute bottom-0 left-0 w-12 h-12">
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-amber-300 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-400/60"></div>
                      <div className={`absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-tr ${categories[selectedCategory].color} group-hover:scale-125 transition-transform duration-300`}></div>
                    </div>
                    
                    {/* Corner Ornaments - Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-12 h-12">
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-amber-300 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-amber-300 to-transparent"></div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400/60"></div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-tl ${categories[selectedCategory].color} group-hover:scale-125 transition-transform duration-300`}></div>
                    </div>
                    
                    {/* Side Decorations */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-16 bg-gradient-to-r from-amber-400/60 to-transparent"></div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-16 bg-gradient-to-l from-amber-400/60 to-transparent"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 w-16 bg-gradient-to-b from-amber-400/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 w-16 bg-gradient-to-t from-amber-400/60 to-transparent"></div>
                    
                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      {/* Title with ornamental dividers */}
                      <div className="flex items-center justify-center mb-6 w-full">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent max-w-16"></div>
                        <h3 className={`text-2xl font-bold text-center mx-4 bg-gradient-to-r ${categories[selectedCategory].color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`} style={{
                          textShadow: '0 0 20px rgba(251, 191, 36, 0.3)'
                        }}>
                          {competition.name}
                        </h3>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-500/50 to-transparent max-w-16"></div>
                      </div>
                      
                      {/* Center Icon */}
                      <div className="flex flex-col items-center justify-center text-amber-300 space-y-3 my-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-amber-400/20 blur-xl group-hover:bg-amber-400/40 transition-all duration-300"></div>
                          <div className="relative w-16 h-16 border-2 border-amber-500/70 group-hover:border-amber-400 flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a]">
                            <svg className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-xs text-amber-400/80 group-hover:text-amber-300 transition-colors uppercase tracking-wider">View Rankings</p>
                      </div>
                      
                      {/* Bottom ornamental dots */}
                      <div className="flex gap-2 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 border border-amber-500/60 group-hover:bg-amber-500/40 transition-all duration-300`}
                            style={{ 
                              transform: 'rotate(45deg)',
                              transitionDelay: `${i * 50}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-40px) translateX(-10px); }
            75% { transform: translateY(-20px) translateX(10px); }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </ThemeProvider>
  );
}

export default App;