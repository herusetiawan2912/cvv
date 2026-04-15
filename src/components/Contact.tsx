import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/src/constants';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Mari terhubung</h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
              Tertarik untuk bekerja sama atau sekadar ingin bertanya? 
              Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
            </p>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Email Saya</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <a 
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-white font-medium">Chat on WhatsApp</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-neutral-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">Alamat Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-neutral-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">Pesan</label>
                <textarea 
                  rows={4}
                  placeholder="Bagaimana saya bisa membantu Anda?"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-neutral-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors">
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
