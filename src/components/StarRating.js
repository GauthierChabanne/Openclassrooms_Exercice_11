import filledStar from "../assets/filled-star.svg";
import emptyStar from "../assets/empty-star.svg";
import React from "react";

function StarRating(props) {
  const filledStarsNumber = props.rating
  const emptyStarsNumber = 5 - filledStarsNumber

  const starsArray = []

  for (let i=1; i <= filledStarsNumber; i++){
    starsArray.push(filledStar)
  }

  for (let i=1; i <= emptyStarsNumber; i++){
    starsArray.push(emptyStar)
  }

  return(
    <React.Fragment>
      {starsArray.map((star, index) => (
        <img key={index} src={star} alt="étoile de notation"/>
      ))}
    </React.Fragment>
  )
}

export default StarRating
