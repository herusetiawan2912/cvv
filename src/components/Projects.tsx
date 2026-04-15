import { motion } from 'motion/react';
import { PROJECTS } from '@/src/constants';
import { ExternalLink, HardDrive, Cloud, Server } from 'lucide-react';

const icons = {
  HardDrive: HardDrive,
  Cloud: Cloud,
  Server: Server,
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Projek Unggulan</h2>
            <p className="text-neutral-400 max-w-xl">Beberapa infrastruktur server dan layanan cloud yang saya bangun dan kelola secara mandiri.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => {
            const Icon = icons[project.icon as keyof typeof icons] || Server;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all overflow-hidden"
              >
                {/* Decorative background icon */}
                <div className="absolute -right-8 -bottom-8 text-neutral-800/20 group-hover:text-neutral-800/40 transition-colors">
                  <Icon size={200} />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-neutral-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-neutral-800 text-xs font-medium text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-neutral-400 transition-colors"
                  >
                    Visit Project <ExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
