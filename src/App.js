import React from "react";
import "./styles.css";
import { useState } from "react";

const resources = {
  Youtube: [
    { name: "JS Conf", rating: "4/5" },
    { name: "Programming with Mosh", rating: "4.5/5" }
  ],

  Books: [
    {
      name: "Eloquent JS",
      rating: "5/5"
    },
    {
      name: "You don't know JS",
      rating: "4.5/5"
    }
  ],
  Podcasts: [
    {
      name: "JS Talks",
      rating: "5/5"
    },
    {
      name: "Developer duvidha",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Podcasts");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#7f8c8d" }}> DEV Resources 👨🏽‍💻</h1>
      <p style={{ fontSize: "smaller", color: "#2c3e50" }}>
        {" "}
        These are my favourite resources.Just select the platform you like.{" "}
      </p>

      <div>
        {Object.keys(resources).map((genre, index) => (
          <button
            key={index}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "none",
              outline: "none",
              margin: "1rem 0.3rem",
              backgroundColor: "#16a085",
              color: "white"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {resources[selectedGenre].map((resources) => (
            <li
              key={resources.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "80%",
                margin: "1rem 2rem",
                borderRadius: "0.5rem",
                backgroundColor: "#1abc9c",
                boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
                color: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {resources.name} </div>
              <div style={{ fontSize: "smaller" }}> {resources.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
