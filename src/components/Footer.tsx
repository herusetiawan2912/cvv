import { PERSONAL_INFO } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold tracking-tighter text-white">
          HS<span className="text-neutral-500">.</span>
        </div>
        
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Hak cipta dilindungi undang-undang.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
