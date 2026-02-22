import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/construction_interior/1920/1080?blur=2"
          alt="Interior Construction"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg md:text-xl font-medium tracking-widest mb-4 text-blue-300 uppercase">
            神奈川・横浜の内装工事なら建誠株式会社
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            軽量下地から<br className="md:hidden" />リノベーションまで<br />
            <span className="text-blue-400">内装工事トータルサポート</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            確かな技術と豊富な実績で、<br className="sm:hidden" />
            お客様の理想の空間を創造します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/30"
            >
              お問い合わせ
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold text-lg transition-all"
            >
              事業内容を見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
