import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        style={{ borderRadius: "5px", marginRight: "2px", padding: "8px" }}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        style={{ borderRadius: "5px", marginRight: "2px", padding: "8px" }}
        type="submit"
        value="Agregar"
      />
    </form>
  );
}
