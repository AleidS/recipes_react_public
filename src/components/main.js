// Made in Summer 2022, refactored Feb. 2024

// Basic imports
import React from 'react'
import { useEffect } from 'react'

// react router dom
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";


// Styling
import './main.css'

// Components
import Recipe from './recipe/recipe.js'
import Recipes from '../data/recipes.js'
import Counter from './counter'
import Footer from './footer.js'
import About from './about.js'
import Thumbnails from './thumbnails/thumbnails.js';
import Menu from './menu/menu.js';


export default function Main() {
    const [expanded, setExpanded] = React.useState(false)
    const [allRecipes, setAllRecipes] = React.useState(Recipes)
    const [numberOfPeople, setNumberOfPeople] = React.useState(4)
    const [vegan, setVegan] = React.useState(false)


    useEffect(() => {
        document.body.style.zoom = "100%";
    }, []);

    //Change number of people
    function handleMinus() {
        if (numberOfPeople > 1) {
            setNumberOfPeople(prev => { return (prev - 1) })
        }
    }
    // Change number of people
    function handlePlus() {
        setNumberOfPeople(prev => { return (prev + 1) })
    }

    // Filter non-vegetarian recipes
    function goVegan() {
        setVegan(!vegan)
        if (vegan === false) {
            setAllRecipes(Recipes.filter(recipe =>
                recipe.vegan === true
            )
            )
        }
        else {
            setAllRecipes(Recipes)
        }
    }

    // 
    function RecipeOnClick() {
        setExpanded(expanded ? false : "expanded")
        window.scrollTo(0, 0)
    }


    return (
        <Router>
            <div className="main" >
                <Menu
                    allRecipes={allRecipes}
                    vegan={vegan}
                    goVegan={goVegan}
                    numberOfPeople={numberOfPeople}
                    handleMinus={handleMinus}
                    handlePlus={handlePlus}
                />

                <Routes>
                    <Route index path="/recipes/" element={(
                        <Thumbnails
                            allRecipes={allRecipes}
                        />
                    )}>
                    </Route>
                    <Route path="/recipes/:recipeName?" element={(
                        <Recipe
                            className='recipe'
                            onClick={
                                () => setExpanded(expanded ? false : "expanded")
                            }
                            data-bs-toggle="collapse"
                            numberOfPeople={numberOfPeople}
                            componentToPassDown={<Counter className='counter2' />}
                            count={numberOfPeople}
                            minus={handleMinus}
                            plus={handlePlus}
                            allRecipes={allRecipes}
                            expanded={expanded}
                            setExpanded={setExpanded}
                        />
                    )}>
                    </Route>
                    <Route path="/recipes/about" element={(
                        <About />
                    )}>
                    </Route>
                </Routes>
                <Footer />
            </div>
        </Router >
    )
}
