import React from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Proposal } from './components/Proposal';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="w-full bg-rose-50 text-rose-900 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <Hero />
      <Timeline />
      <Gallery />
      <Proposal />
      <Footer />
    </main>
  );
}

export default App;