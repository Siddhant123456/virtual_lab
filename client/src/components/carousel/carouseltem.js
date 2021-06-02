import React from 'react';
import './carousel.css'

const CarouselItem = (props) =>{
    return (
        <div>
        <img className = "carImg" src = {props.item.img} alt = "Carousel"/>
           
        </div>
    )
}
export default CarouselItem;