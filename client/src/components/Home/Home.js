import React from "react";
import { Container } from '@material-ui/core';
import CarouselExample from '../carousel/carousel';
import midImage from '../../images/midImage.jpg';
import './Home.css'
const Home = () => {
  return (
    <div>
      <Container  >
      <CarouselExample
          next={(next, active) =>
            console.log(`we left ${active}, and are now at ${next}`)
          }
          prev={(prev, active) =>
            console.log(`we left ${active}, and are now at ${prev}`)
          }
          ></CarouselExample>
         <br/>
          
      
      </Container>
      <div className = "mid-content">
              <img className = "mid-image" width  = "100%" height = "700rem" src = {midImage} alt = "mid section"/>
              <div class="top-center">
                <h1>Welcome to Virtual Lab</h1>
                <p>Learn from the Comfort of Your Home</p>
              
              </div>
              
              <div class="top-left">
                <h1>Open The Gate of New Possibilities</h1>
                <p>Practical Knowledge At Its Best</p>
              
              </div>
          </div>
          
    </div>
  );
};

export default Home;