export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        <p className="font-playfair italic text-white text-xl">Alvora</p>
        <p>© {new Date().getFullYear()} Alvora Studio. Karachi.</p>
        <div className="flex gap-5">
          <a href="mailto:workwithalovra@gmail.com" className="hover:text-white">Email</a>
          <a href="https://instagram.com/alovrastudio.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
