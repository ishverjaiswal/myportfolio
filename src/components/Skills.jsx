import React, { useState, useRef } from 'react';
import '../styles/Skills.css';
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import cpp from "../assets/cpp.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.webp";
import figma from "../assets/figma.png";
import clang from "../assets/clang.webp";
import css from "../assets/css.png";
import html from "../assets/html.png";


const Skills = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: react,
     
    },
    { id: 2, 
      image: javascript,
     },

    {
      id: 3,
      image: nodejs,
      
    },
    {
      id: 4,
      image: cpp,
      
    },

    { id: 5, 
    image: python,
      },
      { id: 6, 
        image: figma,
         },

    { id: 7, 
    image: clang,
     },

    { id: 8, 
    image: css,
  },

    { id: 9,
     image: html, 
     },
    
  ];

  const maxIndex = cards.length - 1;

  const scrollSlider = (direction) => {
    let newIndex = currentIndex;

    if (direction === "next") {
      newIndex = currentIndex + 1 > maxIndex ? 0 : currentIndex + 1;
    } else if (direction === "back") {
      newIndex = currentIndex - 1 < 0 ? maxIndex : currentIndex - 1;
    }

    setCurrentIndex(newIndex);

    const newOffset = -(newIndex * 300); // Adjust `300` based on card width
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${newOffset}px)`;
    }
  };

 
  return (
    <div id="Skills" >
      <div  className="skills">
        <h1>My Skills</h1>
      </div>

      <div className="slider-container">
        <button
          className="arrow-button left-arrow"
          onClick={() => scrollSlider("back")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </button>

        <div className="slider" ref={sliderRef}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleImageClick(card.link)}
            >
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="card-image"
              />
            </div>
          ))}
        </div>

        <button
          className="arrow-button right-arrow"
          onClick={() => scrollSlider("next")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Skills;
