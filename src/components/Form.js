import axios from "axios";
import React, { useState, useEffect } from "react";

const initialFormValue = {
  vin: "",
  make: "",
  model: "",
  year: "",
  color: "",
  mileage: 0,
  wrecked: false,
  autoTrans: true,
  doors: 2,
};

const URL = "https://cars-be-practice.herokuapp.com/api/cars/add";

const Form = ({ setPost }) => {
  const [formValue, setFormValue] = useState(initialFormValue);

  const changeHandler = (evt) => {
    setFormValue({ ...formValue, [evt.target.name]: evt.target.value });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const newCar = {
      vin: formValue.vin.trim(),
      make: formValue.make.trim(),
      model: formValue.model.trim(),
      year: Number(formValue.year.trim()),
    };
    axios
      .post(URL, newCar)
      .then((res) => {
        setPost(true);
        console.log(newCar);
      })
      .catch((err) => console.log("Error", err))
      .finally();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          name="vin"
          type="text"
          value={formValue.vin}
          onChange={changeHandler}
          placeholder="enter VIN"
        ></input>

        <input
          name="make"
          type="text"
          value={formValue.make}
          onChange={changeHandler}
          placeholder="enter MAKE"
        ></input>

        <input
          name="model"
          type="text"
          value={formValue.model}
          onChange={changeHandler}
          placeholder="enter MODEL"
        ></input>

        <input
          name="year"
          type="text"
          value={formValue.year}
          onChange={changeHandler}
          placeholder="enter YEAR"
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
