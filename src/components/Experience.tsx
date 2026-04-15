import { motion } from 'motion/react';
import { EXPERIENCE } from '@/src/constants';

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Pengalaman Kerja</h2>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l border-neutral-800"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-neutral-500" />
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-medium text-neutral-500 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                  {exp.period}
                </span>
              </div>
              <p className="text-neutral-500 font-medium mb-4">{exp.company}</p>
              <p className="text-neutral-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
