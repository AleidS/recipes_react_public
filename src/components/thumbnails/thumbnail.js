import React, { useEffect } from 'react'
import styles from './thumbnail.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Frontpage(props) {

    // Scroll to top of page when going back to home
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    //Get first 4 ingredients for front page 
    const ingredientList =
        props.Table ?
            props.Table.map((section, index) =>
                section.Ingredients ?
                    section.Ingredients.slice(0, 4).map((ingredient, index) => {
                        return (
                            <li key={index}>
                                <span>{ingredient.type}</span>
                            </li>
                        )
                    }) : <></>

            ) :
            <></>

    return (

        <div className={styles.allRecipes}>
            {/* Only display if recipe has an image */}

            {props.Image &&
                <div className={styles.frontPageRecipeContainer}>
                    <ul className={styles.FPIngredients}>
                        {ingredientList}
                    </ul>
                    <div className={styles.frontPageImageContainer}>
                        {props.Image &&
                            <>
                                <LazyLoadImage
                                    className={styles.frontPageRecipeImage}
                                    src={require(`../../images/${props.Image}`)}
                                    effect='blur'
                                    alt=''
                                />
                                <div className={styles.white}>
                                </div>
                            </>}

                    </div>
                    <span className={styles.frontPageRecipeName}>
                        {props.Name}
                    </span>


                </div>}


        </div>

    )
}