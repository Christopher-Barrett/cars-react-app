import React from "react";

const CarCard = ({ cars }) => {
  console.log("cars", cars);
  return (
    <div>
      {cars.map((car) => (
        <div key={car._id}>
          <h3>
            {car.make}, {car.year}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
