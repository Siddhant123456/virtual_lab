import Carousel from 'react-material-ui-carousel'
import CarouselItem from './carouseltem';
import p1 from '../../images/p1.jpeg';

import p2 from '../../images/p2.jpeg'

const CarouselExample = () =>{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img : p1,
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img : p2,
        }

    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CarouselExample;