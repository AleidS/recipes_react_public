// Made in Summer 2022, refactored Feb. 2024

// Basic imports
import React from 'react'

// React router dom
import {
    Link,

} from "react-router-dom";


// Styling
import '../main.css'

//Responsive Bootstrap props: 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import Thumbnail from './thumbnail.js'

export default function Thumbnails(props) {
    const allRecipes = props.allRecipes

    return (
        <Container
            data-bs-toggle="collapse"
            className='frontPageContainer'>
            <Row>
                {/* Below generates the thumbnails for all recipes with an image */}
                {allRecipes.filter(recipe => recipe.Image).map((recipe, index) => {
                    return (
                        <Col
                            sm={12}
                            md={6}
                            lg={4}
                            key={index}
                        >
                            <Link to={recipe.url}>
                                <div>
                                    <Thumbnail {...recipe} />
                                </div>
                            </Link>
                        </Col>)
                })}
            </Row>
        </Container>

    )
}
