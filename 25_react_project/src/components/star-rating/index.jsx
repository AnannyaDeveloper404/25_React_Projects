import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getIdx) {
    console.log(getIdx);

    setRating(getIdx);
  }
  function handleMouseEnter(getIdx) {
    console.log(getIdx);
    setHover(getIdx);
  }
  function handleMouseLeave() {
    console.log(rating);
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
