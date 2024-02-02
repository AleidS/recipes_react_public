import React, { useEffect } from 'react'
import styles from './recipe.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Counter from '../counter'

// React Router Dom
import {
    useParams
} from "react-router-dom";

import Table from './table';


export default function Recipe(props) {

    const [recipe, setRecipe] = React.useState({})
    // URL parameter from react router dom with recipe name
    let recipeURL = useParams().recipeName;
    // Obtain correct recipe depending on url param
    useEffect(() => {
        const newRecipe = props.allRecipes.filter(
            recipe => (recipe.url === recipeURL))
        setRecipe(
            newRecipe[0]
        )
        window.scrollTo(0, 0);
        props.setExpanded(props.expanded ? false : true)
    }, [recipeURL])

    //Check if source is a URL or not
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    return (

        <div className={styles.recipeBox}>
            <h1 className={styles.recipeName}>
                {recipe.Name}
            </h1>

            {/* If an image exists, display it, else, don't */}
            <Row className={styles.bootstrapRow}>
                {recipe.Image &&
                    <Col sm={12}
                        md={5}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                className={styles.recipeImage}
                                src={require(`../../images/${recipe.Image}`)}
                                alt=''
                            />
                            {recipe.ImageSource &&
                                <div> {recipe.ImageSource === 'own' ? <span className={styles.imageSource}>own</span>
                                    : <a className={styles.imageSource} target="_blank" rel="noopener noreferrer" href={recipe.ImageSource}> Image Source </a>}
                                </div>}
                        </div>
                    </Col>
                }
                <Col className={styles.column} sm={12} md={recipe.Image ? 7 : 12}>
                    <br></br>
                    {recipe.IntendedPeople &&
                        <div
                            className={styles.instructions}
                            id={styles.intendedPeople}>
                            Original recipe was for&nbsp;
                            <strong>
                                {recipe.IntendedPeople}
                            </strong>
                            {recipe.IntendedPeople === 1 ? ' person' : ' people'}
                            <div className={styles.counter2}>
                                <Counter
                                    className={styles.counter2} plus={props.plus} minus={props.minus} count={props.numberOfPeople} />
                            </div>
                        </div>}

                    {/* Ingredients+Instructions */}
                    <Table
                        {...props}
                        intendedPeople={recipe.intendedPeople}
                        recipe={recipe}
                    />
                </Col>
            </Row>

            <div className={styles.footer}>
                {recipe.RecipeSource &&
                    <div className={styles.sourceTitle}>
                        <h2 className={styles.sourceTitle}>Recipe (adapted) from:</h2>
                        <div className={styles.recipeSource}> {validURL(recipe.RecipeSource) ? <a href={recipe.RecipeSource} >{recipe.RecipeSource}</a> : <p> {recipe.RecipeSource}</p>}
                        </div>
                    </div>}
                <p className={styles.disclaimer}> Disclaimer: This website was merely made as a web-design demonstration. If you want anything removed please <a href="mailto:aleidoonk@gmail.com">contact me. </a></p>
                {recipe.freePikName && <p className={styles.disclaimer}> <a href={recipe.ImageSource}> Image by {recipe.freePikName}</a> on Freepik</p>}
            </div>


        </div >

    )


}
