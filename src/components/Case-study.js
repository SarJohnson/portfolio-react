import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import '../App.css';

const CaseStudy = () => {
    return (
        <Row>
            <Col>
                <Row>
                    <header>
                        <div className="p-3 text-center">
                            <div className="mask">
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <div>
                                        <h1>Case Study</h1>
                                        <h4>Make 'Em Eat Recipe App</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </Row>
        <Row className="mt-4">
            <Col>
                <h3>Overview</h3>
                <p>
                Make Em Eat is a web app, developed using Python and Django, that provides users with my family recipes based on the cookbook my father created about my great- grandmother. Users can log in, view all recipes, see info (name, cooking time, ingredients, steps) for each recipe, view tables according to recipe difficulty level, and read stories about my family.
                </p>
            </Col>
            <Col>
                <h3>Purpose & Context</h3>
                <p>
                Make Em Eat was a project I built as part of my Python specialization course at CareerFoundry to demonstrate my Python and Django skills to my professional network and future employers.
                </p>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col>
                <h3>Objective</h3>
                <p>
                The objective of this project was to use the Django web framework to develop a fully-fledged web application with multiple users and an admin panel.
                </p>
            </Col>
        </Row>
        <Row className="bg-secondary py-1"></Row>
        <Row className="my-5">
            <Col>
                <h3>Duration</h3>
                <p>
                This project took me longer than expected at almost an entire month to complete due to the diDiculties I experienced. Nevertheless, by completing the project I was able to gain confidence in both Django and my problem-solving capabilities.
                </p>
            </Col>
        </Row>
        <Row className="mini-dividers bg-secondary py-1"></Row>
        <Row className="my-5">
            <h3 className="mb-3">Approach</h3>
            <Col>
                <p>At the start of my project, I initiated the development of a robust Django application, laying the foundation by establishing a superuser for administrative purposes. Subsequently, I created Django models, defining the structural components of the application. I also implemented the creation of database tables and added pertinent database records. Following the establishment of the foundational structure, I directed my attention towards the development of dynamic views and the creation of Django templates to ensure an aesthetically pleasing and user-friendly interface. I also undertook the task of delineating the URLs and routes, thereby creating a cohesive navigation flow throughout the project.</p>
            </Col>
            <Col>
                <p>To enhance user engagement, I created an inviting welcome page and designed subpages dedicated to presenting detailed recipe information, enhancing the overall user experience. Continuing development, I implemented robust user authentication mechanisms, introducing secure login and logout functionalities to strengthen the application's security. The next phase in my project involved the integration of sophisticated search features, empowering users to eDortlessly navigate and locate specific recipes within the application. This addition was pivotal in elevating the overall usability and accessibility of the platform.</p>
            </Col>
        </Row>
        <Row className="justify-content-xs-center my-5">
            <h4>Images</h4>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img className="carousel-img" src="recipeslist.png" alt="recipes list" />
                    <Carousel.Caption>
                        <h5 className="text-secondary">Recipes List</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img" src="recipecard.png" alt="recipe card" />
                    <Carousel.Caption>
                        <h5 className="text-secondary">Recipe Card</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img" src="familystories.png" alt="family stories" />
                    <Carousel.Caption>
                        <h5 className="text-secondary">Family Stories</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Row>
        <Row className="mini-dividers bg-secondary py-1"></Row>
        <Row className="mt-5">
            <Col>
                <h4>Challenges:</h4>
                <p>
                The greatest challenge I faced in this project was during deployment. I had deployed my finished project to Heroku only to realize that none of my media files with each recipe photo were showing. I then discovered that Heroku does not store media files, so I used S3 as my media hosting provider and all worked as expected.
                </p>
            </Col>
        </Row>
        <Row className="mb-5">
            <Col>
                <h4>Final Thoughts:</h4>
                <p>
                Overall, I am satisfied with the project I completed. While the deployment was certainly a challenge at first, successfully using AWS to store my media files made me feel as though I have a solid grasp on AWS now and of Python and the Django framework.
                </p>
            </Col>
        </Row>
        <Row>
          <Col>
            <h3>Technology Used:</h3>
            <p>
                HTML
            </p>
            <p>
                CSS
            </p>
            <p>
                JavaScript
            </p>
            <p>
                Python
            </p>
            <p>
                Django
            </p>
            <p>
                Heroku
            </p>
            <p>
                Postgres
            </p>
            <p>
                Github
            </p>
          </Col>
        </Row>
        <Row className="my-5 credits">
          <h1 className="mb-3">Make Em Eat</h1>
          <h3>Credits:</h3>
          <p>
            Developer: Sarah Johnson<br/>
            Mentor: James Wilson
          </p>
          <a href="https://github.com/SarJohnson/recipe-app" target='_blank' className='button'>GitHub Repository</a>
          <a href="https://floating-basin-75047-0882723a8b64.herokuapp.com/" target='_blank' className='button'>App Hosted on Heroku</a>
        </Row>

      </Col>
    </Row>
    )
}

export default CaseStudy;