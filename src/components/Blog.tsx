import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Clock, Loader2, AlertCircle } from 'lucide-react';
import { fetchBloggerPosts, type BloggerPost } from '@/src/services/bloggerService';

export default function Blog() {
  const [posts, setPosts] = useState<BloggerPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchBloggerPosts();
        setPosts(data);
      } catch (err) {
        setError('Gagal memuat artikel dari Blogger.');
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  // Helper to strip HTML tags for excerpt
  const getExcerpt = (html: string) => {
    const text = html.replace(/<[^>]*>?/gm, '');
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Artikel Terbaru</h2>
          <p className="text-neutral-400">Berbagi pengetahuan dan pengalaman seputar teknologi dan multimedia langsung dari blog saya.</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-neutral-500" size={40} />
            <p className="text-neutral-500 font-medium">Memuat artikel...</p>
          </div>
        ) : error || posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center glass rounded-3xl border-dashed">
            <AlertCircle className="text-neutral-600 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Belum ada artikel</h3>
            <p className="text-neutral-400 max-w-md">
              {error || "Silakan konfigurasi VITE_BLOGGER_API_KEY dan VITE_BLOGGER_BLOG_ID di pengaturan untuk menampilkan artikel dari Blogger Anda."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col h-full"
              >
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {formatDate(post.published)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neutral-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-neutral-400 mb-8 leading-relaxed line-clamp-3 text-sm">
                  {getExcerpt(post.content)}
                </p>
                <div className="mt-auto">
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider group-hover:gap-4 transition-all"
                  >
                    Baca Selengkapnya <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
