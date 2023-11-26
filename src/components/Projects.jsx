import { Link, useLocation } from "react-router-dom";
import weather from "../images/weather.png";
import quiz from "../images/quiz.png";
import soon from "../images/soon.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const projectData = [
    {
      name: 'Weather Forecast',
      imgSrc: weather,
      description: 'Welcome to my Weather Forecast Website! This application is designed to provide you with the most accurate and up-to-date weather information for any city you choose. Get real-time weather updates and details such as temperature, humidity, wind speed, and more.',
      url: 'https://gaberinaldi.github.io/Weather-Forecast/',
      github: 'https://github.com/gaberinaldi/Weather-Forecast'
    },
    {
      name:  'Coding Quiz',
      imgSrc: quiz,
      description: 'Welcome to my JavaScript Quiz Website! This platform is designed to test your knowledge of JavaScript and improve your skills. The website presents a series of JavaScript questions, one at a time, and keeps track of your score. Your score is updated in real-time as you answer each question.',
      url: 'https://gaberinaldi.github.io/Coding-Quiz/',
      github: 'https://github.com/gaberinaldi/Coding-Quiz'
    },
    {
      name: 'Coming soon...',
      imgSrc: soon,
      description: 'Coming soon...',
      url: 'https://github.com/gaberinaldi',
      github: 'https://github.com/gaberinaldi'
    },
    {
      name: 'Coming soon...',
      imgSrc: soon,
      description: 'Coming soon...',
      url: 'https://github.com/gaberinaldi',
      github: 'https://github.com/gaberinaldi'
    },
  ];
  
  const Projects = () => {
    return (
      <div className="allCards">
      {projectData.map((project) => (
      <Card className='card'>
        <Card.Header className='card-header'>{}</Card.Header>
        <Card.Img className="card-images" variant="top" img src={project.imgSrc} />
        <Card.Body>
          <Card.Title className='card-title'>{project.name}</Card.Title>
          <Card.Text className="card-text">
            {project.description}
          </Card.Text>
          </Card.Body>
          <Card.Body className="button-layout">
          <a href={project.url} target="_blank">
          <Button className='my-buttons' variant="primary">Website</Button>
          </a>
          <a href={project.github} target="_blank">
          <Button className='my-buttons' variant="primary">GitHub</Button>
          </a>
        </Card.Body>
      </Card>
         ))}
      </div>
    );
  };
  
  export default Projects;