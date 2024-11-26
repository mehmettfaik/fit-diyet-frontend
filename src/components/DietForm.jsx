import React, { useState } from "react";
import "../css/DietForm.css";

function LoadingModal() {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
            textAlign: "center",
          }}
        >
          <div className="spinner" style={{ margin: "10px auto" }}></div>
          <p style={{ marginBottom: "10px" }}>Diyet planı oluşturuluyor...</p>
          <p>Lütfen bekleyin.</p>
        </div>
      </div>
    );
  }
  
function DietForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gender: "",
    height: "",
    age: "",
    weight: "",
    targetWeight: "",
    duration: "7"
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fit-diyet-backend.onrender.com/generate-diet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${formData.name}-diyet-plan.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setFormData({
        name: "",
        surname: "",
        gender: "",
        height: "",
        age: "",
        weight: "",
        targetWeight: "",
        duration: "7",
      });

    } catch (error) {
      console.error("Error generating diet plan:", error);
      setError("Failed to generate diet plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <LoadingModal />}
      <div className={loading}>
      <h3 style={{ 
    fontSize: 35, 
    paddingLeft: 20, 
    fontFamily: 'Arial, sans-serif', 
    color: '#b6883f',  
    fontWeight: 'bold', 
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)' 
}}>
    Fit Diyet Programı
</h3>
        {error && <div style={{ color: 'red', margin: '10px' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Adınız" value={formData.name} onChange={handleChange} required />
          <input name="surname" placeholder="Soyadınız" value={formData.surname} onChange={handleChange} required />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <select name="gender" value={formData.gender} onChange={handleChange} style={{ marginRight: '10px' }} required>
              <option value="">Cinsiyet</option>
              <option value="Erkek">Erkek</option>
              <option value="Kadın">Kadın</option>
            </select>
            <input name="age" type="number" placeholder="Yaşınz" value={formData.age} onChange={handleChange} required />
          </div>
          <input name="height" type="number" placeholder="Boyunuz (cm)" value={formData.height} onChange={handleChange} required />
          <input name="weight" type="number" placeholder="Kilonuz (kg)" value={formData.weight} onChange={handleChange} required />
          <input name="targetWeight" type="number" placeholder="Hedeflediğiniz Kilo  (kg)" value={formData.targetWeight} onChange={handleChange} required />
          <select name="duration" value={formData.duration} onChange={handleChange}>
            <option value="7">7 Days</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? "Oluşturuluyor..." : "Diyet Planı Oluştur"}
          </button>
        </form>
        <footer style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#555" }}>
          Created by Mehmet Faik AYHAN
        </footer>
        <div style={{textAlign: "center"}}>Sadece bilgi amaçlıdır. </div>
         

      </div>
    </div>
  );
}

export default DietForm;
