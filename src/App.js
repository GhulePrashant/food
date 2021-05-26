import React, { useState } from "react";
import "./styles.css";

const foodData = {
  Maharashtrian: [
    {
      name: "Puran Poli",
      rating: "5/5"
    },
    {
      name: "Vada Pao",
      rating: "4.5/5"
    },
    {
      name: "Aam Ras",
      rating: "4/5"
    }
  ],

  South: [
    {
      name: "Idli Sambar",
      rating: "5/5"
    },
    {
      name: "Dosa",
      rating: "4.5/5"
    },
    {
      name: "Medu Vada",
      rating: "4.5/5"
    }
  ],
  North: [
    {
      name: "Paneer & Naan",
      rating: "5/5"
    },
    {
      name: "Butter Chicken",
      rating: "4.5/5"
    }
  ]
};

var foodList = Object.keys(foodData);

export default function App() {
  const [selectedCategory, setCategory] = useState("Maharashtrian");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1>🍱 fooooddd</h1>
      <p>Hey, checkout my favourite foods. Select category to get started.</p>

      <div>
        {foodList.map((category) => (
          <button onClick={() => categoryClickHandler(category)}>
            {category}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <ul>
          {foodData[selectedCategory].map((food) => (
            <li key={food.name}>
              <div className="food-name">{food.name}</div>
              <div className="food-rating">{food.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
