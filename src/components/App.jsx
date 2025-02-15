import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import "../styles/App.scss";
import Landing from "./Landing";

function App() {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("projectData");
    return storedData ? JSON.parse(storedData) : {
      name: "",
      slogan: "",
      autor: "",
      desc: "",
      job: "",
      demo: "",
      repo: "",
      technologies: "",
    };
  });

  useEffect(() => {
    
    localStorage.setItem("projectData", JSON.stringify(formData));

  }, [formData]);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /*function isEmpty(i) {
    const valueStr = i.value.trim();
    return valueStr === "";
  };*/

  const handleClickSave = (ev) => {
    ev.preventDefault();
    localStorage.removeItem("projectData");
    console.log(formData);
    setFormData({ name: "", slogan: "", autor: "", desc: "", job: "", demo: "", repo: "", technologies: "", });   
      
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
              <>
                <Preview formData={formData} />
                <Form
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleClickSave={handleClickSave}
                />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

