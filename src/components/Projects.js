import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pokedex',
      description: 'This is a basic JavaScript pokedex, loaded from an external API, that allows users to select a Pokemon and view a modal describing that Pokemon. This website was created with HTML, CSS, and Javascript.',
      imageUrl: 'pokedex.png',
      githubUrl: 'https://github.com/SarJohnson/simple-js-app',
      demoUrl: 'https://sarjohnson.github.io/simple-js-app',
      hasCaseStudy: false, 
      caseStudyUrl: ''
    },
    {
      id: 2,
      title: 'HorrorFlix',
      description: 'This is a horror movie website that pulls information from my horror movie API. Users are able to find horror movies to watch and save their favorites to their profile. This website was created with HTML, CSS, Javascript, and React.',
      imageUrl: 'horrorflix.png',
      githubUrl: 'https://github.com/SarJohnson/myFlix-client',
      demoUrl: 'https://horrordeadbase.netlify.app',
      hasCaseStudy: false, 
      caseStudyUrl: ''
    },
    {
      id: 3,
      title: 'HorrorFlix Angular',
      description: 'This is a remake of the horror movie website using Angular that allows users to access different horror movies to watch, and a short description of the movie, as well as allows users to save their favorite movies to their profile for later. This app was created with HTML, CSS, and TypeScript.',
      imageUrl: 'horrorflix-angular.png',
      githubUrl: 'https://github.com/SarJohnson/myFlix-Angular-client',
      demoUrl: 'https://sarjohnson.github.io/myFlix-Angular-client',
      hasCaseStudy: false, 
      caseStudyUrl: ''
    },{
      id: 4,
      title: 'Meet App',
      description: 'This is a progressive web application that shows upcoming events, fetching this data from the Google Calendar API. The user is able to search for specific cities, expand event details, and view the data in a pie chart or scatter chart. This app was created with HTML, CSS, JavaScript, and React.',
      imageUrl: 'meet.png',
      githubUrl: 'https://github.com/SarJohnson/Meet',
      demoUrl: 'https://sarjohnson.github.io/Meet',
      hasCaseStudy: false, 
      caseStudyUrl: ''
    },{
      id: 5,
      title: 'Chat App',
      description: 'This is a mobile app that allows users to chat with other users. Users can select a color scheme, send text messages, send their locations, take photos, and access their camera roll to send photos. This app was created with React Native and Javascript.',
      imageUrl: 'chat.png',
      githubUrl: 'https://github.com/SarJohnson/chat-app',
      demoUrl: 'https://github.com/SarJohnson/chat-app',
      hasCaseStudy: false, 
      caseStudyUrl: ''
    },{
      id: 6,
      title: 'Make Em Eat Recipe App',
      description: 'This is a recipe app filled with my family recipes based on the cookbook my father created about my great grandmother. Users are able to log in, view all recipes, see info for each recipe, view tables according to recipe difficulty, and read stories about my family. This app was created with HTML, Python, and Django.',
      imageUrl: 'make-em-eat.png',
      githubUrl: 'https://github.com/SarJohnson/recipe-app',
      demoUrl: 'https://floating-basin-75047-0882723a8b64.herokuapp.com/',
      hasCaseStudy: true, 
      caseStudyUrl: '/case-study'
    },
  ];

  return (
    <Container className='projects-container'>
      <h2 className='projects-container-h2'>Projects</h2>
      <Row xs={1} md={2} className='g-4'>
        {projects.map((project) => (
          <Col key={project.id} className="mb-4">
            <Card className='project-card' style={{ width: '100%', minWidth: '500px' }}>
              <Card.Img className='project-card-img' variant="top" src={project.imageUrl} alt={project.title} style={{ height: '200px', objectFit: 'cover' }}/>
              <Card.Body className='project-card-body'>
                <Card.Title className='project-card-title'>{project.title}</Card.Title>
                <Card.Text className='project-card-text'>{project.description}</Card.Text>
                <Button variant="secondary" href={project.githubUrl}>GitHub</Button>{' '}
                <Button variant="secondary" href={project.demoUrl}>Demo</Button>
                {project.hasCaseStudy && (
                  <Button variant="secondary" href={project.caseStudyUrl}>Case Study</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
