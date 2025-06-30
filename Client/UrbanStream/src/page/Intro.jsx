import React, { useState, useEffect } from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdRocketLaunch,
  MdTraffic,
  MdSpeed,
  MdTimeline,
  MdLocationOn,
  MdAnalytics,
  MdWarning,
  MdTrendingUp,
  MdMap,
  MdComputer,
  MdCloud,
} from "react-icons/md";
import logo from "../assets/UrbanStream_Logo.svg";
import UrbanStream from "../assets/Urban Stream.svg";

export const Intro = () => {
  const [currentStats, setCurrentStats] = useState({
    activeRoads: 247,
    avgSpeed: 42,
    congestionLevel: 23,
    predictedDelay: 8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats((prev) => ({
        activeRoads: prev.activeRoads + Math.floor(Math.random() * 6) - 3,
        avgSpeed: Math.max(
          25,
          Math.min(60, prev.avgSpeed + Math.floor(Math.random() * 6) - 3)
        ),
        congestionLevel: Math.max(
          0,
          Math.min(
            100,
            prev.congestionLevel + Math.floor(Math.random() * 10) - 5
          )
        ),
        predictedDelay: Math.max(
          0,
          Math.min(30, prev.predictedDelay + Math.floor(Math.random() * 4) - 2)
        ),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory md:scroll-smooth scrollbar-hide z-50">
        <div className="fixed top-3 right-3 md:top-4 md:right-4 z-50 p-2 flex items-center justify-center gap-2 cursor-pointer">
          <MdRocketLaunch size={16} className="md:hidden text-[#ade17d]" />
          <MdRocketLaunch
            size={20}
            className="hidden md:block text-[#ade17d]"
          />
          <p className="text-xs md:text-sm lg:text-[18px] text-[#ade17d]">
            Get Started
          </p>
        </div>

        <section className="min-h-screen md:h-screen snap-start w-full flex flex-col items-center justify-center overflow-hidden bg-[#ade17d] relative">
          <div className="absolute top-3 left-3 md:top-4 md:left-4 z-50">
            <img
              src={logo}
              alt="site logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </div>

          <div className="text-center relative z-10 px-4 w-full max-w-xs md:max-w-none">
            <img
              src={UrbanStream}
              alt="urbanStream"
              className="w-full h-auto max-w-sm md:max-w-none mx-auto"
            />
          </div>

          <MdKeyboardDoubleArrowDown
            size={24}
            className="md:hidden absolute bottom-6 text-[#162144] animate-bounce"
          />
          <MdKeyboardDoubleArrowDown
            size={30}
            className="hidden md:block absolute bottom-8 text-[#162144] animate-bounce"
          />
        </section>

        <section className="relative min-h-screen md:h-screen md:snap-start w-full bg-[#13190e] flex flex-col items-center justify-center px-4 py-8 md:py-0">
          <div className="text-center bg-gradient-to-br from-white to-[#ade17d] bg-clip-text text-transparent z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 z-50 leading-tight">
              Intelligent Traffic <br className="hidden sm:block" /> Management
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#86af61]/50 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
              Optimize urban traffic flow with AI-powered predictions, real-time
              monitoring, and smart route suggestions for modern cities.
            </p>
          </div>
          <div className="radial-bg absolute h-full w-1/2 bottom-0 left-0"></div>
        </section>

        <section className="min-h-screen md:h-screen md:snap-start w-full bg-[#13190e] relative flex flex-col items-center justify-center py-8 md:py-12 px-4 overflow-hidden">
          <div className="absolute -top-10 md:-top-20 -left-5 w-8 h-8 md:w-11 md:h-11 lg:w-[245px] lg:h-[245px] rounded-full bg-gradient-to-br from-[#ade17d]/10 via-[#86af61]/5 to-transparent border border-[#ade17d]/10 backdrop-blur-[10px] particle-float particle-7 z-30"></div>

          <div className="absolute top-10 md:top-0 -right-12 md:-right-24 w-8 h-8 md:w-11 md:h-11 lg:w-[245px] lg:h-[245px] rounded-full bg-gradient-to-br from-[#ade17d]/10 via-[#86af61]/5 to-transparent border border-[#ade17d]/10 backdrop-blur-[10px] particle-float particle-7 z-30"></div>

          <div className="text-center text-white flex flex-col items-center justify-center gap-2 mb-8 md:mb-12 z-10">
            <div className="glass-badge mb-3 md:mb-4">
              <span className="text-[#ade17d] text-xs md:text-sm font-semibold">
                LIVE DATA
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-[#ade17d] bg-clip-text text-transparent z-50">
              System Status
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-[#86af61]/70 max-w-xs sm:max-w-md md:max-w-xl px-2">
              Real-time insights from our intelligent traffic network
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-sm sm:max-w-2xl lg:max-w-6xl w-full z-10">
            <div className="glass-card group hover:scale-105 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 rounded-lg bg-[#ade17d]/20">
                  <MdTraffic className="text-[#ade17d] text-lg md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Active Roads
                </h3>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ade17d] mb-1">
                {currentStats.activeRoads}
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                Currently monitored
              </p>
              <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[#ade17d] rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="glass-card group hover:scale-105 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 rounded-lg bg-[#ade17d]/20">
                  <MdSpeed className="text-[#ade17d] text-lg md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Avg Speed
                </h3>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ade17d] mb-1">
                {currentStats.avgSpeed} mph
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                City-wide average
              </p>
              <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[#ade17d] rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="glass-card group hover:scale-105 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 rounded-lg bg-[#ade17d]/20">
                  <MdWarning className="text-[#ade17d] text-lg md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Congestion
                </h3>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ade17d] mb-1">
                {currentStats.congestionLevel}%
              </p>
              <p className="text-xs md:text-sm text-gray-400">Current level</p>
              <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[#ade17d] rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="glass-card group hover:scale-105 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 rounded-lg bg-[#ade17d]/20">
                  <MdTimeline className="text-[#ade17d] text-lg md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Predicted Delay
                </h3>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ade17d] mb-1">
                {currentStats.predictedDelay} min
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                Next hour average
              </p>
              <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[#ade17d] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen md:h-screen md:snap-start w-full bg-[#13190e] relative flex items-center justify-center py-8 md:py-12 px-4">
          <div className="absolute top-[15%] sm:top-[20%] right-[10%] sm:right-[15%] w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#ade17d]/10 via-[#86af61]/5 to-transparent border border-[#ade17d]/10 backdrop-blur-[10px] particle-float particle-2 z-30"></div>

          <div className="absolute bottom-[15%] sm:bottom-[20%] right-[5%] sm:right-[10%] w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] rounded-full bg-gradient-to-br from-[#ade17d]/10 via-[#86af61]/5 to-transparent border border-[#ade17d]/10 backdrop-blur-[10px] particle-float particle-4 z-30"></div>

          <div className="absolute top-[35%] sm:top-[40%] left-[40%] sm:left-[50%] w-7 h-7 md:w-9 md:h-9 lg:w-[35px] lg:h-[35px] rounded-full bg-gradient-to-br from-[#ade17d]/10 via-[#86af61]/5 to-transparent border border-[#ade17d]/10 backdrop-blur-[10px] particle-float particle-5 z-30"></div>

          <div className="absolute top-[60%] sm:top-[70%] right-[25%] sm:right-[30%] w-9 h-9 md:w-11 md:h-11 lg:w-[45px] lg:h-[45px] rounded-full bg-gradient-to-br from-[#ade17d]/10 via-[#86af61]/5 to-transparent border border-[#ade17d]/10 backdrop-blur-[10px] particle-float particle-7 z-30"></div>

          <div className="absolute top-[25%] sm:top-[30%] right-[35%] sm:right-[40%] w-11 h-11 md:w-14 md:h-14 lg:w-[55px] lg:h-[55px] rounded-full bg-gradient-to-br from-[#ade17d]/10 via-[#86af61]/5 to-transparent border border-[#ade17d]/10 backdrop-blur-[10px] particle-float particle-8 z-30"></div>

          <div className="max-w-7xl w-full z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="glass-badge mb-2">
                    <span className="text-[#ade17d] text-xs md:text-sm font-semibold">
                      POWERED BY AI
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                    Intelligent{" "}
                    <span className="bg-gradient-to-r from-[#ade17d] to-[#86af61] bg-clip-text text-transparent">
                      Features
                    </span>
                  </h1>
                  <p className="text-sm md:text-lg text-[#86af61]/70 max-w-xl">
                    Advanced capabilities powered by machine learning and
                    real-time data processing
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="feature-item group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-[#ade17d]/20 to-[#86af61]/10 group-hover:from-[#ade17d]/30 group-hover:to-[#86af61]/20 transition-all">
                        <MdAnalytics className="text-[#ade17d] text-xl md:text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                          AI Predictions
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base">
                          ARIMA-based forecasting enhanced with weather analysis
                          for accurate congestion predictions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-[#ade17d]/20 to-[#86af61]/10 group-hover:from-[#ade17d]/30 group-hover:to-[#86af61]/20 transition-all">
                        <MdMap className="text-[#ade17d] text-xl md:text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                          Smart Routing
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base">
                          Intelligent route suggestions using real-time traffic
                          data and predictive algorithms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item group">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-[#ade17d]/20 to-[#86af61]/10 group-hover:from-[#ade17d]/30 group-hover:to-[#86af61]/20 transition-all">
                        <MdLocationOn className="text-[#ade17d] text-xl md:text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                          Real-time Monitoring
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base">
                          Live traffic conditions with instant alerts and
                          notifications for optimal flow management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="glass-panel p-6 md:p-8 max-w-sm sm:max-w-md mx-auto">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-sm md:text-base">
                        Traffic Flow
                      </span>
                      <span className="text-[#ade17d] text-xs md:text-sm">
                        Live
                      </span>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ade17d] animate-pulse"></div>
                        <div className="flex-1 h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#ade17d] to-[#86af61] rounded-full w-3/4 animate-pulse"></div>
                        </div>
                        <span className="text-white text-xs md:text-sm">
                          85%
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                        <div className="flex-1 h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-1/2 animate-pulse"></div>
                        </div>
                        <span className="text-white text-xs md:text-sm">
                          52%
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400 animate-pulse"></div>
                        <div className="flex-1 h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full w-1/4 animate-pulse"></div>
                        </div>
                        <span className="text-white text-xs md:text-sm">
                          23%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen md:h-screen md:snap-start w-full bg-[#13190e] relative flex flex-col items-center justify-center px-4 py-8 md:py-0">
          <div className="text-center z-10 max-w-xs sm:max-w-2xl md:max-w-4xl">
            <div className="glass-badge mb-4 md:mb-6">
              <span className="text-[#ade17d] text-xs md:text-sm font-semibold">
                TRANSFORM YOUR CITY
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white to-[#ade17d] bg-clip-text text-transparent mb-4 md:mb-6">
              Ready to Revolutionize <br className="hidden sm:block" /> Urban
              Traffic?
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#86af61]/70 mb-8 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
              Join the smart city revolution with UrbanStream's intelligent
              traffic management platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#ade17d] to-[#86af61] text-[#162144] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ade17d]/20 hover:shadow-2xl">
                Start Demo
              </button>
              <button className="w-full sm:w-auto glass-card-button text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-xs sm:max-w-lg md:max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#ade17d] mb-1 md:mb-2">
                  500+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Cities Connected
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#ade17d] mb-1 md:mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Real-time Monitoring
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#ade17d] mb-1 md:mb-2">
                  AI
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Powered Predictions
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
