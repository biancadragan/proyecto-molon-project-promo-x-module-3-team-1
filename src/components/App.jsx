import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import '../styles/App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Hero />
        <Preview />
        <Form />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;

