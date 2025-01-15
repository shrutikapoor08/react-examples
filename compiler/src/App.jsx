import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FIELDS from "./constants";

function App() {
  const [formData, setFormData] = useState({
    name: { value: "", message: "Too short" },
    text: { value: "", message: "Too short" },
    description: { value: "", message: "Too short" },
  });

  const Input = ({ name, message, onChange, value }) => {
    return (
      <div className="input-container">
        <input
          type="text"
          onChange={onChange}
          className="input"
          name={name}
          value={value}
        />
        {message}
      </div>
    );
  };

  const renderInputFields = () => {
    return FIELDS.map((field, index) => (
      <Input
        key={index}
        name={field.name}
        message={formData[field.name]?.message || ""}
        onChange={(e) => handleChange(e)}
        value={formData[field.name]?.value || ""}
      />
    ));
  };

  const handleChange = (e) => {
    let message = "Too short";
    if (e.target.value.length <= 3) {
      message = "Too short";
    } else {
      message = "all good";
    }

    setFormData({
      ...formData,
      [e.target.name]: {
        value: e.target.value || "",
        message: message,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsS;
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {renderInputFields()}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
