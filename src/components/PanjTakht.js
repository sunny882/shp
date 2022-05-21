import React from 'react'
import image1 from "./imgs/1.jpg";
import image2 from "./imgs/2.jpg";
import image3 from "./imgs/3.jpg";
import image4 from "./imgs/4.jpg";
import image5 from "./imgs/5.jpg";

export default function PanjTakht() {
  return (
    <>
    <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <p className="text-center font-monospace">
              <h3>Panj Takht</h3>
            </p>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="Not Loaded" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Akal Takht Sahib</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="Not Loaded" />

                <div className="carousel-caption d-none d-md-block">
                  <h5>Takht Sri Keshgarh Sahib</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="Not Loaded" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Takht Sri Damdama Sahib</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image4} className="d-block w-100" alt="Not Loaded" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Takht Sri Patna Sahib</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image5} className="d-block w-100" alt="Not Loaded" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="shadow">Takht Sri Hazur Sahib</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </>
  )
}
