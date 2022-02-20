// import { render } from "@testing-library/react";
// import { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";





// function ControlledCarousel() {
   
    
//     useEffect(() => {
//        fetch("https://api.themoviedb.org/3/movie/634649/videos?api_key=a049d6086798142f1ce78897272be805&language=es")
//        .then((resp) => resp.json())
//        .then((data) => setTrailers(data.results))
//     }, [ ])
    

//     const [ setTrailers] = useState();

    
      



//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/KREBGtEeW9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src=""
//             alt="Second slide"
//           />

//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
  
//   render(<ControlledCarousel />);



//   export default ControlledCarousel;