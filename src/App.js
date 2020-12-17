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
      <h1> DEV Resources 👨🏽‍💻</h1>
      <p style={{ fontSize: "smaller" }}>
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
              border: "1px solid black",
              margin: "1rem 0.3rem"
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
                borderRadius: "0.5rem"
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
