import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import CarCard from "./components/CarCard";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [post, setPost] = useState(false);

  const URL_GET = `https://cars-be-practice.herokuapp.com./api/cars`;

  console.log(cars);
  useEffect(() => {
    axios
      .get(URL_GET)
      .then((res) => {
        // console.log(res.data);
        setCars(res.data);
        setPost(false);
      })
      .catch((err) => console.log(`Error: ${err}`.red));
  }, [post]);
  console.log(post);
  return (
    <div className="App">
      <Form setPost={setPost} />

      <h2>Car(ds)*2</h2>
      <CarCard cars={cars} />
    </div>
  );
}

export default App;
