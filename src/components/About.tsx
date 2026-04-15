import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/src/constants';
import { Calendar, MapPin, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Tentang Saya</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Saya adalah lulusan Multimedia dari SMK Negeri 2 Sukorejo tahun 2023. 
              Dengan latar belakang pendidikan multimedia dan pengalaman kerja di bidang NOC (Network Operations Center), 
              saya memiliki kombinasi unik antara kreativitas visual dan pemahaman teknis infrastruktur jaringan.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <User size={18} className="text-neutral-500" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Nama Lengkap</p>
                  <p className="font-medium">{PERSONAL_INFO.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <Calendar size={18} className="text-neutral-500" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Lahir</p>
                  <p className="font-medium">{PERSONAL_INFO.birth}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <MapPin size={18} className="text-neutral-500" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Lokasi</p>
                  <p className="font-medium">{PERSONAL_INFO.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-neutral-800"
          >
            <img 
              src={PERSONAL_INFO.avatarUrl} 
              alt={PERSONAL_INFO.name} 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
