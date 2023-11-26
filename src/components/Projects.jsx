import { Link, useLocation } from "react-router-dom";
import weather from "../images/weather.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const projectData = [
    {
      name: 'Weather Forecast',
      imgSrc: weather,
      description: 'Welcome to my Weather Forecast Website! This application is designed to provide you with the most accurate and up-to-date weather information for any city you choose. Get real-time weather updates and details such as temperature, humidity, wind speed, and more.',
      url: 'https://gaberinaldi.github.io/Weather-Forecast/',
      github: 'https://github.com/gaberinaldi/Weather-Forecast/deployments'
    },
  ];
  
  const Projects = () => {
    return (
      <div className="allCards">
      {projectData.map((project) => (
      <Card className='card'>
        <Card.Img className="card-images" variant="top" img src={project.imgSrc} />
        <Card.Body>
          <Card.Title className='card-title'>{project.name}</Card.Title>
          <Card.Text className="card-text">
            {project.description}
          </Card.Text>
          </Card.Body>
          <Card.Body className="button-layout">
          <a href={project.url}>
          <Button className='my-buttons' variant="primary">Website</Button>
          </a>
          <a href={project.github}>
          <Button className='my-buttons' variant="primary">GitHub</Button>
          </a>
        </Card.Body>
      </Card>
         ))}
      </div>
    );
  };
  
  export default Projects;