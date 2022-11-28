import React from "react";
import { Carousel } from "react-responsive-carousel";
import './carousel.css';

export default function CarouselComponent () {
    return (
        <div>
            <Carousel className="carousel">
                <div>
                    <img alt="" src="../japan.jpg"></img>
                </div>
                <div>
                    <img alt="" src="../las-vegas.jpg"></img>
                </div>
                <div>
                    <img alt="" src="../macao.jpg"></img>
                </div>
                <div>
                    <img alt="" src="../hong-kong.jpg"></img>
                </div>
            </Carousel>
        </div>
    );
}