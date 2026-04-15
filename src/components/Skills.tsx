import { motion } from 'motion/react';
import { SKILLS } from '@/src/constants';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Keahlian & Keterampilan</h2>
          <p className="text-neutral-400">Keahlian teknis dan kreatif yang saya kembangkan selama perjalanan karir saya.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-500" />
                {category}
              </h3>
              <ul className="space-y-4">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <li key={skill.name} className="flex items-center gap-3 text-neutral-400">
                    <CheckCircle2 size={16} className="text-neutral-600" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
