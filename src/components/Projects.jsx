import { Link, useLocation } from "react-router-dom";
import weather from "../images/Weather.png";
import companyDB from "../images/CompanyDB.png";
import planner from "../images/Planner.png";
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
      name:  'Company Database Manager',
      imgSrc: companyDB,
      description: "This company database manager is the perfect way to track and update departments, roles, and employees. It's the solution to a problem many companies face and will allow you to view update and add info in a matter of seconds.",
      url: 'https://github.com/gaberinaldi/Company-Database-Manager',
      github: 'https://github.com/gaberinaldi/Company-Database-Manager'
    },
    {
      name: 'Daily Planner',
      imgSrc: planner,
      description: 'Daily Planner is a web application designed to help users manage their daily tasks by tracking their past, present, and future activities. This application is built to provide a simple and intuitive interface for users to plan their day-to-day activities and keep track of their progress.',
      url: 'https://gaberinaldi.github.io/Daily-Planner-5/',
      github: 'https://github.com/gaberinaldi/Daily-Planner-5'
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