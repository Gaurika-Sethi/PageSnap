import React from 'react';
import Hero from './home/Hero';
import Cards from './home/Cards';
import Footer from './home/Footer';

export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
        <Cards/>
        <Footer/>
      </main>
    </div>
  );
}
