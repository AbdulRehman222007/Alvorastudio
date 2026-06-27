export function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white py-28">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">About</p>
          <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight">
            A creative studio for<span className="italic"> ambitious brands.</span>
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-white/75 text-lg leading-relaxed">
          <p>
            Your Brand Has Potential,We Unlock It..
          </p>
          <p>
            Alvora is where ambition meets execution. We partner with brands who refuse to settle and we give them the strategy, content, and presence to prove it to the world.
          </p>
          <dl className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-white/50">Discipline</dt>
              <dd className="mt-2 font-playfair text-2xl">Build · Launch · Scale</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-white/50">Working with</dt>
              <dd className="mt-2 font-playfair text-2xl">Brands worldwide</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
