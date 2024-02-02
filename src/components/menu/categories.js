// Made in Summer 2022, refactored Feb. 2024

// Basic imports
import React from 'react'
import { useEffect } from 'react'

// React Router Dom
import { Link } from 'react-router-dom';

// Styling
import './menu.css'
// Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function MenuCategories(props) {
    const allRecipes = props.allRecipes
    const expanded = props.expanded
    const setExpanded = props.setExpanded
    // Store a list of all unique recipe categories
    const [menuCategories, setMenuCategories] = React.useState([])

    // Obtain all unique categories from recipe database
    useEffect(() => {
        let newCategories = []
        let other = false
        allRecipes.forEach((recipe) => {
            if (!newCategories.includes(recipe.category) && recipe.category !== undefined) {
                newCategories.push(recipe.category)
            }
            if (recipe.category === undefined) {
                other = true;
            }
        })
        if (other == true) {
            newCategories.push('Other')
        }
        setMenuCategories([...newCategories])
    }, [])


    return (
        <>
            {menuCategories.map((category, index) => {
                return (
                    <div
                        key={index}
                    >
                        {/* create dropdown menu for each category */}
                        <NavDropdown

                            title={category}
                            className={expanded ? 'droppedDownTitle' : 'dropDownTitle'}
                            id="basic-nav-dropdown"
                        >
                            {/* if recipe does not have a category, place it in the 'other' category */}
                            {allRecipes.filter(recipe => recipe.category === category || (category === 'Other' && !recipe.category)).map((recipe, i) => {
                                return (
                                    // Place the corresponding recipes in those categories
                                    <NavDropdown.Item
                                        as={Link}
                                        key={i}
                                        to={`/recipes/${recipe.url}`}
                                        className='dropDown'
                                        data-bs-toggle="collapse"
                                        onClick={
                                            () => {
                                                setTimeout(() => { setExpanded(false) }, 0);
                                                setExpanded(expanded ? false : "expanded");
                                            }} >
                                        {/* //Hides navbar on button click, with short delay */}
                                        <span data-bs-target="#testnav" data-bs-toggle="collapse" id='testSpan'>
                                            {recipe.Name}
                                        </span>
                                    </NavDropdown.Item>
                                )
                            }
                            )}
                        </NavDropdown >
                    </div >
                )
            })
            }
        </>
    )
}
