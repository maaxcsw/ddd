/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Crosshair, Shield, Database, Terminal, Cpu, ChevronRight, Activity, Users, Server } from 'lucide-react';

const IMAGES = {
  hero: "https://oss.canme.tech/img/Image_1774756221045.jpg",
  about: "https://oss.canme.tech/img/Image_1774756216757.jpg",
  recruitment: "https://oss.canme.tech/img/Image_1774756215046.jpg",
  team: "https://oss.canme.tech/img/Image_1774756213841.jpg",
  iconLogo: "https://oss.canme.tech/img/Image_1774755999522.jpg",
  mainLogo: "https://oss.canme.tech/img/Image_1774756782055.jpg"
};

export default function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-tactical-bg text-white font-sans selection:bg-tactical-green selection:text-black">
      {/* Global CRT/Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-scanlines opacity-30 mix-blend-overlay"></div>
      <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>

      {/* Navigation HUD */}
      <nav className="fixed top-0 w-full z-40 border-b border-tactical-green/20 bg-tactical-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-tactical-green">
            <img src={IMAGES.iconLogo} alt="GZMC Icon" className="w-10 h-10 object-contain rounded-sm border border-tactical-green/30 bg-black/50" />
            <span className="font-bold tracking-widest text-lg hidden sm:block">GZMC<span className="text-white/50">_SOF</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <button onClick={() => scrollTo('about')} className="hover:text-tactical-green transition-colors glitch-hover">SYS.ABOUT</button>
            <button onClick={() => scrollTo('command')} className="hover:text-tactical-green transition-colors glitch-hover">SYS.COMMAND</button>
            <button onClick={() => scrollTo('recruitment')} className="hover:text-tactical-green transition-colors glitch-hover">SYS.RECRUIT</button>
            <a href="https://docs.qq.com/sheet/DT2NqUkhJVHBRR2Fj" target="_blank" rel="noreferrer" className="text-tactical-green border border-tactical-green/50 px-4 py-1 hover:bg-tactical-green hover:text-black transition-all">
              DATABASE_LINK
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt="Night Vision Helicopter" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-tactical-bg via-transparent to-tactical-bg"></div>
          <div className="absolute inset-0 bg-tactical-green/5 mix-blend-color"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={IMAGES.iconLogo} alt="GZMC Logo" className="w-32 sm:w-40 md:w-48 max-w-full h-auto mx-auto mb-6 md:mb-8 object-contain drop-shadow-[0_0_15px_rgba(0,255,157,0.3)] rounded-2xl" />
            
            <div className="inline-flex items-center gap-2 border border-tactical-green/30 bg-tactical-green/10 px-4 py-1 mb-6 font-mono text-tactical-green text-sm">
              <Activity className="w-4 h-4" />
              <span>STATUS: ACTIVE // CLASSIFIED</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 filter drop-shadow-[0_0_10px_rgba(0,255,157,0.3)]">
              GZMC Special<br />Operations Forces
            </h1>
            
            <h2 className="text-xl md:text-3xl font-mono text-tactical-green mb-6 tracking-widest">
              ELITE FPS/TPS TACTICAL UNIT
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 font-mono text-sm md:text-base border-l-2 border-tactical-green pl-4 text-left">
              &gt; 广州军事基地及GZMC社区最精锐的作战队伍。<br/>
              &gt; EXECUTING HIGH-STAKES OPERATIONS WITH PRECISION.<br/>
              &gt; NO COMPROMISE. NO FAILURE.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono">
              <button onClick={() => scrollTo('recruitment')} className="w-full sm:w-auto px-8 py-4 bg-tactical-green text-black font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                JOIN NOW <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://docs.qq.com/sheet/DT2NqUkhJVHBRR2Fj" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 border border-tactical-green/50 text-tactical-green hover:bg-tactical-green/10 transition-colors flex items-center justify-center gap-2">
                <Database className="w-5 h-5" /> ACCESS DATABASE
              </a>
              <button onClick={() => scrollTo('about')} className="w-full sm:w-auto px-8 py-4 text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 glitch-hover">
                ABOUT US
              </button>
            </div>
          </motion.div>
        </div>

        {/* HUD Elements */}
        <div className="absolute bottom-8 left-8 font-mono text-xs text-tactical-green/50 hidden md:block">
          <div>LAT: 23.1291 N</div>
          <div>LON: 113.2644 E</div>
          <div>SYS_TIME: {new Date().toISOString().split('T')[1].substring(0,8)}</div>
        </div>
        <div className="absolute top-24 right-8 font-mono text-xs text-tactical-green/50 hidden md:block text-right">
          <div>UPLINK: SECURE</div>
          <div>ENC: AES-256</div>
          <div className="animate-pulse text-red-500">REC [•]</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative border-t border-tactical-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-tactical-green font-mono">
                <Terminal className="w-5 h-5" />
                <span>// FILE_01: ABOUT_US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase">Forged in Combat</h2>
              <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed">
                <p>
                  GZMC SOF (Special Operations Forces) is the premier tactical unit within the Guangzhou Military Base and GZMC community. We specialize in high-stakes, precision-driven operations across FPS and TPS environments.
                </p>
                <p>
                  Powered by the <strong className="text-tactical-green">SURGE (VAK Framework)</strong> recruitment and training system, we forge ordinary members into elite operators capable of comprehensive combat scenarios.
                </p>
                <ul className="space-y-2 mt-4 border-l border-tactical-gray pl-4">
                  <li className="flex items-center gap-2"><Crosshair className="w-4 h-4 text-tactical-green" /> Comprehensive Combat Training</li>
                  <li className="flex items-center gap-2"><Crosshair className="w-4 h-4 text-tactical-green" /> Tactical Coordination & Comms</li>
                  <li className="flex items-center gap-2"><Crosshair className="w-4 h-4 text-tactical-green" /> Elite Tier Operations</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hud-border p-2"
            >
              <img src={IMAGES.about} alt="Tactical Breach" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-80" />
              <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 font-mono text-xs text-tactical-green border border-tactical-green/30">
                CAM_04 // AIRBORNE
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Command Structure */}
      <section id="command" className="py-24 relative border-y border-tactical-gray overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.team} alt="Command Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-tactical-surface/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">Command Structure</h2>
            <p className="text-tactical-green font-mono">OPERATIONAL DIVISIONS & HIERARCHY</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 relative hud-border p-2 max-w-4xl mx-auto"
          >
            <img src={IMAGES.team} alt="Squad Formation" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-90" />
            <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 font-mono text-xs text-tactical-green border border-tactical-green/30">
              FORMATION // TACTICAL_SQUAD
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SODC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hud-border p-8 group hover:bg-tactical-gray/50 transition-colors"
            >
              <Users className="w-10 h-10 text-tactical-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">SODC</h3>
              <div className="text-xs text-tactical-green font-mono mb-4 border-b border-tactical-gray pb-2">Special Operations Dev Command</div>
              <ul className="space-y-3 font-mono text-sm text-gray-400 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-tactical-green mt-1">▸</span> Initiate Development Program
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tactical-green mt-1">▸</span> NCO Leadership Development
                </li>
              </ul>
              <p className="text-xs text-gray-500 uppercase tracking-wider border-t border-tactical-gray pt-4">
                核心训练与人才培养中枢
              </p>
            </motion.div>

            {/* WC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hud-border p-8 group hover:bg-tactical-gray/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-tactical-green/10 rounded-bl-full"></div>
              <Shield className="w-10 h-10 text-tactical-green mb-6 group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-xl font-bold mb-2 relative z-10">WC</h3>
              <div className="text-xs text-tactical-green font-mono mb-4 border-b border-tactical-gray pb-2 relative z-10">Warfare Command</div>
              <ul className="space-y-3 font-mono text-sm text-gray-400 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-tactical-green mt-1">▸</span> Direct Action Regiment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tactical-green mt-1">▸</span> Centurion Guards <span className="text-xs bg-tactical-green/20 text-tactical-green px-1 ml-1">(ELITE)</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 uppercase tracking-wider border-t border-tactical-gray pt-4 relative z-10">
                一线作战与高强度比赛任务执行
              </p>
            </motion.div>

            {/* LC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hud-border p-8 group hover:bg-tactical-gray/50 transition-colors"
            >
              <Server className="w-10 h-10 text-tactical-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">LC</h3>
              <div className="text-xs text-tactical-green font-mono mb-4 border-b border-tactical-gray pb-2">Logistic Command</div>
              <ul className="space-y-3 font-mono text-sm text-gray-400 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-tactical-green mt-1">▸</span> Administration Department
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tactical-green mt-1">▸</span> Technology Department
                </li>
              </ul>
              <p className="text-xs text-gray-500 uppercase tracking-wider border-t border-tactical-gray pt-4">
                后勤保障、战术数据库维护与基地运营
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruitment & System */}
      <section id="recruitment" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="flex items-center gap-3 text-tactical-green font-mono">
                <Cpu className="w-5 h-5" />
                <span>// FILE_02: RECRUITMENT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase">SURGE System</h2>
              <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed">
                <p>
                  The <strong className="text-white">SURGE (VAK Framework)</strong> is our proprietary recruitment and evaluation matrix. It ensures that only candidates with the highest aptitude for tactical combat, communication, and adaptability are selected.
                </p>
                <div className="bg-tactical-surface border border-tactical-gray p-4 mt-6">
                  <div className="text-tactical-green mb-2">VAK FRAMEWORK PARAMETERS:</div>
                  <ul className="space-y-2">
                    <li className="flex justify-between"><span>Visual Processing:</span> <span className="text-white">98% REQ</span></li>
                    <li className="flex justify-between"><span>Auditory Comms:</span> <span className="text-white">CLEAR/CONCISE</span></li>
                    <li className="flex justify-between"><span>Kinesthetic Reflex:</span> <span className="text-white">&lt; 200ms</span></li>
                  </ul>
                </div>

                <div className="mt-8 border-l-2 border-tactical-green pl-4">
                  <p className="text-white mb-3 font-bold">如果您正在计划加入广州特种作战部队，您可以通过以下途径参与：</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="text-tactical-green">▸</span> IDP ｜ 长期开放，公告群</li>
                    <li className="flex items-center gap-2"><span className="text-tactical-green">▸</span> OT ｜ 定期举行，公告群</li>
                  </ul>
                </div>

                <p className="text-xs text-tactical-green/70 mt-4">
                  * 强调专业筛选与训练体系。未经SURGE认证的人员禁止参与核心行动。
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative hud-border p-2"
            >
              <img src={IMAGES.recruitment} alt="Recruitment Briefing" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-80" />
              <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 font-mono text-xs text-tactical-green border border-tactical-green/30">
                LZ // EXTRACTION
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Database CTA */}
      <section className="py-24 relative bg-tactical-surface border-t border-tactical-gray overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,157,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Database className="w-16 h-16 text-tactical-green mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">Access Public Database</h2>
          <p className="text-gray-400 font-mono mb-10">
            Verify operative status, review mission logs, and access public GZMC SOF records. Clearance level: PUBLIC.
          </p>
          <a 
            href="https://docs.qq.com/sheet/DT2NqUkhJVHBRR2Fj" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-tactical-green/10 border-2 border-tactical-green text-tactical-green font-bold font-mono hover:bg-tactical-green hover:text-black transition-all group"
          >
            <Terminal className="w-5 h-5" />
            INITIALIZE CONNECTION
            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-tactical-gray text-center font-mono text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} GZMC Special Operations Forces. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tactical-green animate-pulse"></span> SECURE NETWORK</span>
            <span>V 2.4.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
