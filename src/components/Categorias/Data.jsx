import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

const Data = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-4">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center display-1">
            😀
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center display-1">
            😎
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center display-1">
            🤩
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Data;
