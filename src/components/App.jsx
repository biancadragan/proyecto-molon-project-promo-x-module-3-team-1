import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import "../styles/App.scss";
import Landing from "./Landing";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    autor: "",
    desc: "",
    job: "",
    demo: "",
    repo: "",
    technologies: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<Landing />} />
          <Route
            path="/Preview"
            element={
              <div>
                <Preview formData={formData} />
                <Form
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
