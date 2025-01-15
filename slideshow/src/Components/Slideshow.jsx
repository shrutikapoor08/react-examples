import Slide from "./Slide";
import Controls from "./Controls";
import { useState } from "react";

import "./slideshow.css";

const images = [
  {
    url: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue domes in greece",
  },
  {
    url: "https://images.pexels.com/photos/575362/pexels-photo-575362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Tower bridge in London",
  },
  {
    url: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Boats in Venice",
  },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="slideshow">
      <Slide image={images[index]} />
      <Controls
        activeIndex={index}
        setActiveIndex={setIndex}
        totalSlides={images.length}
      />
    </div>
  );
};

export default Slideshow;
