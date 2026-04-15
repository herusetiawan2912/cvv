import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/src/constants';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neutral-800/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6">
            Tersedia untuk peluang baru
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Halo, Saya <span className="text-neutral-500">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Seorang <span className="text-white">{PERSONAL_INFO.role}</span> yang berdedikasi di {PERSONAL_INFO.address}. 
            Saya ahli dalam membangun infrastruktur jaringan yang kokoh dan solusi digital kreatif.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              Lihat Projek <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white font-semibold rounded-xl border border-neutral-800 flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
            >
              Hubungi Saya
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
