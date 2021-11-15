import React from 'react';


const Banner = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/yy7fnwx/slider-1.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/mzDNx2Q/slider-2.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/r3h3HZc/slider-3.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Banner;