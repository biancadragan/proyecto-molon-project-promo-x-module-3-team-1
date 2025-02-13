
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import '../styles/App.scss';


function App() {

  const [ formData, setFormData ] = useState ({
    name: "",
    slogan: "",
    autor: "",
    desc: "",
    job: "",
    demo: "",
    repo:"",
    technologies:"",
  
  });
  
  const handleInputChange = (ev) => {
    const {name,value} = ev.target;
    setFormData (( prevData) => ({
      ...prevData, [name] : value }));
    };

    
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Hero />
        <Preview formData={formData}/>
        <Form handleInputChange={handleInputChange} formData={formData}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

