import React from 'react'
import styles from './frontpage.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Frontpage(props){
    //Get first 4 ingredients for front page 
    const ingredientList= props.Table? 
        props.Table.map(section=>
        section.Ingredients?
        section.Ingredients.slice(0,4).map((ingredient,index)=>{
            
            return(

                <li key={index}>
                <span>{ingredient.type}</span>
                </li>
            )
        }):<></>
        
        ):
        props.Ingredients? props.Ingredients.slice(0,4).map((ingredient,index)=>{
            
            return(

                <li key={index}>
                <span>{ingredient.type}</span>
                </li>
            )
        }) :<></>


    return(
       
        <div className={styles.allRecipes}>
            {/* Only display if recipe has an image */}
       
           {props.Image && <div className={styles.frontPageRecipeContainer}>
           <ul className={styles.FPIngredients}> {ingredientList}</ul>
                    <div className={styles.frontPageImageContainer}>
                    {props.Image && <><LazyLoadImage className={styles.frontPageRecipeImage} src={require(`../images/${props.Image}`)}  effect='blur' alt=''/>
                    <div className={styles.white}></div></>}
                       {props.ImageSource &&
                        <div> {props.ImageSource==='own'? <span className={styles.imageSource}>own</span>
                         : <a className={styles.imageSource} href={props.ImageSource}>img src</a>}
                         {/* <i className="fa-solid fa-code"></i> */}
                         </div> }
                    </div>
                    <span className={styles.frontPageRecipeName}> {props.Name}</span>
                    
                    
            </div>}
   
   
        </div>
       
    )
}