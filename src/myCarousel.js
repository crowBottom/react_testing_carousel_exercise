import React from "react";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

const MyCarousel = () => {
  return (

    <div id="demo" class="carousel slide" data-ride="carousel">

      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={image1} alt="" width="90%" height="auto" />
        </div>
        <div class="carousel-item">
          <img src={image2} alt="" width="90%" height="auto" />
        </div>
        <div class="carousel-item">
          <img src={image3} alt="" width="90%" height="auto" />
        </div>
      </div>

      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>

  )
}

export default MyCarousel;
