import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import newDataJs from "../../assets/newData.json";
import Carousel from "../../components/Carousel/Carousel";



import "./singleRental.scss";
import Summary from "../../components/Summary/Summary";

export default function SingleRental() {
  const [projects, setAppart] = useState(null);
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = newDataJs.find((projects) => projects.title === title);
    if (data === undefined) {
      return navigate("/pas-trouve");
    }
    setAppart(data);
  }, [title]);
  if (!projects) return <div>Chargement...</div>;
  return (
    <>
    <div className="locationInfoContainer">
    <div className="locationInfo-1">
          <h1 className="locationTitle title__projectPage">{projects.seoTitle}</h1>
          <ul className="tagGroup">
            {projects.tags.map((tag) => (
              <li key={tag}>{tag} </li>
            ))}{" "}
          </ul>
          <h2 className="title__type-3 title__type-3-projectPage">{projects.location}</h2>
          <a className="projectCodeLink" href={projects.github} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-folder-open"></i>The project code
          </a>
          
        </div>
    </div>
      
      <div className="caroselContainer">
        <Carousel images={projects.pictures} />
      </div>
      <div className="locationInfoContainer">
        <div className="locationInfo-2">
          <h3 className="title__type-2">Details</h3>
        <p className="title__2--subtitle title__absolute">Project specifications<span className="heading-separator-line border-bottom"></span></p>
        </div>
        
        <div className="locationInfo-3">
          <Summary title="Client needs" details={projects.description} />
          <Summary title="Client opinion" details={projects.equipments} author={projects.host.name} authorTitle={projects.host.authorAbout} />
        </div>
      </div>
    </>
  );
}
