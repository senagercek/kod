'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';

const menuItems = [
  { name: 'Truffle Ember Burger', detail: 'Dry-aged beef, black truffle aioli, cave cheddar' },
  { name: 'Midnight Wagyu Melt', detail: 'A5 wagyu blend, caramelized onions, smoked gouda' },
  { name: 'Inferno Signature', detail: 'Charcoal brioche, chili jam, crispy shallots' },
];

export default function Home() {
  return (
    <main className="bg-luxury-radial">
      <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 px-6 py-24 md:px-14">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1900&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-velvet/80 to-velvet" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-gold">Premium Burger House</p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-7xl lg:text-8xl">
              Ember<br />
              <span className="text-gold">&</span> Coal
            </h1>
            <p className="mt-8 max-w-xl text-base text-smoke md:text-lg">
              Crafted over open flame with precise technique and theatrical plating.
              A cinematic burger tasting room for night owls, creators, and connoisseurs.
            </p>
          </motion.div>

          <motion.a
            href="#reservation"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="inline-flex w-fit items-center border border-gold/70 px-7 py-4 text-sm uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-black"
          >
            Reserve Your Table
          </motion.a>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-6 py-24 md:px-14">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Menu Preview</p>
          <h2 className="mt-4 font-display text-4xl uppercase md:text-6xl">Three Signatures. Zero Compromise.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {menuItems.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.15}>
              <article className="h-full border border-white/10 bg-graphite/60 p-7 shadow-gold-glow backdrop-blur-sm transition hover:border-gold/40">
                <h3 className="font-display text-2xl text-white">{item.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-smoke">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-black/30 px-6 py-24 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-4xl uppercase leading-tight md:text-6xl">
              A Minimal Space,<br />
              Maximum Flavor.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-base leading-relaxed text-smoke md:text-lg">
              Ember & Coal is built around a singular obsession: transforming burgers into a premium
              dining ritual. Every cut is selected, every sauce is layered, and every plate lands with
              visual drama. Luxury, stripped down to essentials.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="reservation" className="mx-auto max-w-6xl px-6 py-24 text-center md:px-14">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Reservation</p>
          <h2 className="mt-4 font-display text-4xl uppercase md:text-6xl">Book Your Night At Ember & Coal</h2>
          <p className="mx-auto mt-5 max-w-2xl text-smoke">
            Limited nightly seating. Secure your table and enjoy a curated burger experience designed
            for slow evenings, loud conversations, and unforgettable flavor.
          </p>
          <a
            href="mailto:reservations@emberandcoal.com"
            className="mt-10 inline-flex items-center border border-gold bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-gold"
          >
            Request Reservation
          </a>
        </Reveal>
      </section>
    </main>
  );
}
