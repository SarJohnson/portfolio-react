import React from 'react';
import { Card, Row, Col, CardGroup } from 'react-bootstrap';
import '../App.css';

const CaseStudy = () => {
    return (
        <Row>
            <Col>
                <Row>
                    <header>
                        <div className="p-3 text-center">
                            <div>
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <div>
                                        <h1 style={{ color: 'white' }}>Case Study</h1>
                                        <img src='title-img-make-em-eat.png' alt='title-img' style={{ width: '500px', borderRadius: '10px', border: '5px solid #000' }}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </Row>
        <Row className="mt-4">
            <Col>
                <h3 style={{ color: 'white', textAlign: 'center' }}>Overview</h3>
                <p style={{ margin: '10px' }}>
                Make Em Eat is a web app, developed using Python and Django, that provides users with my family recipes based on the cookbook my father created about my great- grandmother. Users can log in, view all recipes, see info (name, cooking time, ingredients, steps) for each recipe, view tables according to recipe difficulty level, and read stories about my family.
                </p>
            </Col>
            <Col>
                <h3 style={{ color: 'white', textAlign: 'center' }}>Purpose & Context</h3>
                <p style={{ margin: '10px' }}> 
                Make Em Eat was a project I built as part of my Python specialization course at CareerFoundry to demonstrate my Python and Django skills to my professional network and future employers.
                </p>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col>
                <h3 style={{ color: 'white', textAlign: 'center' }}>Objective</h3>
                <p style={{ textAlign: 'center', margin: '10px' }}>
                The objective of this project was to use the Django web framework to develop a fully-fledged web application with multiple users and an admin panel.
                </p>
            </Col>
        </Row>
        <Row className="bg-secondary py-1"></Row>
        <Row className="my-5">
            <Col>
                <h3 style={{ color: 'white', textAlign: 'center' }}>Duration</h3>
                <p style={{ textAlign: 'center', margin: '10px' }}>
                This project took me longer than expected at almost an entire month to complete due to the difficulties I experienced. Nevertheless, by completing the project I was able to gain confidence in both Django and my problem-solving capabilities.
                </p>
            </Col>
        </Row>
        <Row className="mini-dividers bg-secondary py-1"></Row>
        <Row className="my-5">
            <h3 className="mb-3" style={{ color: 'white', textAlign: 'center' }}>Approach</h3>
            <Col>
                <p style={{ margin: '10px' }}>At the start of my project, I initiated the development of a robust Django application, laying the foundation by establishing a superuser for administrative purposes. Subsequently, I created Django models, defining the structural components of the application. I also implemented the creation of database tables and added pertinent database records. Following the establishment of the foundational structure, I directed my attention towards the development of dynamic views and the creation of Django templates to ensure an aesthetically pleasing and user-friendly interface. I also undertook the task of delineating the URLs and routes, thereby creating a cohesive navigation flow throughout the project.</p>
            </Col>
            <Col>
                <p style={{ margin: '10px' }}>To enhance user engagement, I created an inviting welcome page and designed subpages dedicated to presenting detailed recipe information, enhancing the overall user experience. Continuing development, I implemented robust user authentication mechanisms, introducing secure login and logout functionalities to strengthen the application's security. The next phase in my project involved the integration of sophisticated search features, empowering users to eDortlessly navigate and locate specific recipes within the application. This addition was pivotal in elevating the overall usability and accessibility of the platform.</p>
            </Col>
        </Row>
        <Row className="justify-content-xs-center my-5">
            <h4 style={{ color: 'white', textAlign: 'center' }}>Images</h4>
            <CardGroup>
                <Card style={{ margin: '20px', borderRadius: '5px' }}>
                    <Card.Img className="card-img" src="recipeslist.png" alt="recipes list" />
                    <Card.Body>
                        <h5 style={{ textAlign: 'center' }} className="text-secondary">Recipes List</h5>
                    </Card.Body>
                </Card>
                <Card style={{ margin: '20px', borderRadius: '5px' }}>
                    <Card.Img className="card-img" src="recipecard.png" alt="recipe card" />
                    <Card.Body>
                        <h5 style={{ textAlign: 'center' }} className="text-secondary">Recipe Card</h5>
                    </Card.Body>
                </Card>
                <Card style={{ margin: '20px', borderRadius: '5px' }}>
                    <Card.Img className="card-img" src="familystories.png" alt="family stories" />
                    <Card.Body>
                        <h5 style={{ textAlign: 'center' }} className="text-secondary">Family Stories</h5>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Row>
        <Row className="mini-dividers bg-secondary py-1"></Row>
        <Row className="mt-5">
            <Col>
                <h4 style={{ color: 'white', textAlign: 'center' }}>Challenges:</h4>
                <p style={{ textAlign: 'center', margin: '10px' }}>
                The greatest challenge I faced in this project was during deployment. I had deployed my finished project to Heroku only to realize that none of my media files with each recipe photo were showing. I then discovered that Heroku does not store media files, so I used S3 as my media hosting provider and all worked as expected.
                </p>
            </Col>
        </Row>
        <Row className="mb-5">
            <Col>
                <h4 style={{ color: 'white', textAlign: 'center' }}>Final Thoughts:</h4>
                <p style={{ textAlign: 'center', margin: '10px' }}>
                Overall, I am satisfied with the project I completed. While the deployment was certainly a challenge at first, successfully using AWS to store my media files made me feel as though I have a solid grasp on AWS now and of Python and the Django framework.
                </p>
            </Col>
        </Row>
        <Row>
          <Col>
            <h3 style={{ color: 'white', textAlign: 'center' }}>Technology Used:</h3>
            <p style={{ textAlign: 'center' }}>
                HTML
            </p>
            <p style={{ textAlign: 'center' }}>
                CSS
            </p>
            <p style={{ textAlign: 'center' }}>
                JavaScript
            </p>
            <p style={{ textAlign: 'center' }}>
                Python
            </p>
            <p style={{ textAlign: 'center' }}>
                Django
            </p>
            <p style={{ textAlign: 'center' }}>
                Heroku
            </p>
            <p style={{ textAlign: 'center' }}>
                Postgres
            </p>
            <p style={{ textAlign: 'center' }}>
                Github
            </p>
          </Col>
        </Row>
        <Row className="my-5 credits">
          <h3 style={{ color: 'white', textAlign: 'center' }}>Credits:</h3>
          <p style={{ color: 'white', textAlign: 'center' }}>
            Developer: Sarah Johnson<br/>
            Mentor: James Wilson
          </p>
          <a style={{ color: 'white', textAlign: 'center' }} href="https://github.com/SarJohnson/recipe-app" target='_blank' rel="noreferrer" className='button'>GitHub Repository</a>
          <a style={{ color: 'white', textAlign: 'center' }} href="https://floating-basin-75047-0882723a8b64.herokuapp.com/" target='_blank' rel="noreferrer" className='button'>App Hosted on Heroku</a>
        </Row>

      </Col>
    </Row>
    )
}

export default CaseStudy;