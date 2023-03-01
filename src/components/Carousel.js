import { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import "../style/components/carousel.css"


function Carousel(props){
  const [index, setIndex] = useState(0);
  const length = props.pictures.length;

  function handlePrevious(){
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  function handleNext(){
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  }

  return(
    <section className='carousel'>
      {length > 1 && <img className="carousel__arrow left" src={arrowLeft} alt="précédente" onClick={handlePrevious} />}
      <img className='carousel__img' src={props.pictures[index]} alt={props.title + "cover"}/>
      {length > 1 && <img className="carousel__arrow right" src={arrowRight} alt="suivante" onClick={handleNext} />}
    </section>
  )
}

export default Carousel
