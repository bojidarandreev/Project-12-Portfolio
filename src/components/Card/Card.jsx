import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import newDataJs from "../../assets/newData.json";
import "./card.scss";
import Carousel from "../Carousel/Carousel";
import SingleRental from "../../pages/SingleRental/SingleRental";



function CardData() {
  const [locationIsClicked, setlocationIsClicked] = useState(false);
  const setOpenOrClose = () => {
    if (!locationIsClicked) {
      setlocationIsClicked(true);
    } else setlocationIsClicked(false);
    console.log(locationIsClicked);
  };

  return (
    <div className="cards__container">
      {newDataJs.map(projects => <Link key={projects.title} to={`/projects/${projects.title}`} style={{"display": "block"} } className="card">
      {/* {newDataJs.map(projects => <Link key={projects.title} to={`${projects.github}`} style={{"display": "block"} } className="card"> */}
        <section className="card__content">
          <div className="card__shadow"></div>
          <h3 className="card__title" >{projects.seoTitle}</h3>
          <img src={projects.cover} alt={`${projects.title}, proposé par ${projects.host.name} `} className="card__image" />
        </section>
        </Link>)}
    </div>
  )
  }
  
  export default CardData;