// Made in Summer 2022, refactored Feb. 2024

// Basic imports
import React from 'react'

// React Router Dom
import { Link, Route, Routes } from 'react-router-dom';

// Styling
import './menu.css'
// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Responsive Bootstrap props: 
import Container from 'react-bootstrap/Container';

// Components
import Counter from '../counter.js'
import { Divide as Hamburger } from 'hamburger-react'
import MenuCategories from './categories.js';



export default function Menu(props) {
    const allRecipes = props.allRecipes
    const vegan = props.vegan
    const goVegan = props.goVegan
    const numberOfPeople = props.numberOfPeople
    const handleMinus = props.handleMinus
    const handlePlus = props.handlePlus


    // Wether menu is expanded or not
    const [expanded, setExpanded] = React.useState(false)

    return (
        <Navbar className='navbar' id="testnav" variant="dark" expand="xl" sticky="top" expanded={expanded}>
            <div aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} className="navTop"></div>
            <Container className={expanded ? 'navContainerExpanded' : 'navContainer'}>
                <Navbar.Brand
                    // Act as react router link:
                    as={Link}
                    to={`/recipes`}
                    className='titleContainer'
                    onClick={() => {
                        setExpanded(false);
                    }
                    }>
                    <span className="title">
                        Recipes
                        <img
                            className='icons8'
                            src="https://img.icons8.com/color/96/000000/basil.png"
                            alt="icon8" />
                    </span>
                </Navbar.Brand>
                {/* Filter out non-vegan recipes */}
                <Routes>
                    <Route index path="/recipes/" element={(
                        <button
                            className={vegan ? "vegan p-1 px-3 mx-5 fw-bold btn" : "p-1 px-3 mx-5 fw-bold btn"}
                            id='vegetarian'
                            onClick={() => {
                                goVegan();
                            }
                            }
                        >
                            <img
                                src={require("../../images/vegetarian-mark-90.png")}
                                className="vegetarianSymbol"
                                alt="vegSymbol">
                            </img>
                        </button>
                    )}>
                    </Route>

                </Routes>


                {/* Number of people */}
                <Counter
                    className='counterMenu'
                    count={numberOfPeople}
                    minus={handleMinus}
                    plus={handlePlus} />


                {/* Expand menu in mobile view */}
                <Navbar.Toggle
                    className='toggle'
                    aria-controls="basic-navbar-nav"
                    onClick={() =>
                        setExpanded(expanded ? false : "expanded")}
                >
                    <Hamburger toggled={expanded} />
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* e.g. dinner, desert etc. */}
                        <MenuCategories
                            expanded={expanded}
                            setExpanded={setExpanded}
                            allRecipes={allRecipes}
                        />
                        <Nav.Item
                            as={Link}
                            to={`/recipes/about/`}
                            title='About'
                            className={expanded ? 'droppedDownTitle' : 'dropDownTitle'}
                            id="basic-nav-dropdown"
                        />
                        <Nav.Link
                            as={Link}
                            to={`/recipes/about/`}
                            className={expanded ? "droppedDownTitle" : "navLink"}
                            onClick={
                                () => {

                                    setTimeout(() => { setExpanded(false) }, 0);
                                    setExpanded(expanded ? false : "expanded");
                                }
                            }>
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
