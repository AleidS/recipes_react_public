import React from 'react'
import styles from './table.module.css'


export default function Table(props) {
    const recipe = props.recipe
    const intendedPeople = recipe.IntendedPeople ? recipe.IntendedPeople : 4

    // Recipe might consist of multiple sections (steps)
    //  with their own ingredients and instructions, 
    // e.g. dough and sauce, with or without sub-headers
    const tableSection =
        recipe.Table && recipe.Table.map((section, i) => {
            return (
                <React.Fragment key={i}>
                    {/* If theres multiple parts, e.g. Instructions, serving suggestions with the pancakes,
                    the following shows a subtitle: */}
                    {section.Title &&
                        <tr>
                            <td
                                colSpan='1'
                                className={`multi-row ${styles.ingredientsTable}`}
                            >
                            </td>
                            <td colSpan='19' className={styles.subtitle1} >
                                <h2 className={styles.subTitle2}>
                                    <small>
                                        {section.Title}
                                    </small>
                                </h2>
                            </td>
                        </tr>}

                    <tr className={styles.tableContent}>
                        {/* Ingredients */}
                        <td className={styles.ingredientsTable}
                            colSpan='1'>
                            {section.Ingredients && section.Ingredients.map((ingredient, index) => {
                                return (
                                    <li
                                        key={index}>
                                        {ingredient.word && ingredient.word + ' '}
                                        {/* Precision depends on quantity*/}
                                        {ingredient.quantity && (ingredient.quantity / intendedPeople * props.numberOfPeople < 25 ? ' ' +
                                            Math.round(parseFloat((Math.round(ingredient.quantity / intendedPeople * props.numberOfPeople * 10) / 10).toPrecision(2)) * 4) / 4 :
                                            parseFloat((Math.round((ingredient.quantity / intendedPeople * props.numberOfPeople) / 5) * 5).toPrecision(2)))}
                                        {ingredient.unit && ' ' + ingredient.unit}
                                        {ingredient.type && ' ' + ingredient.type}
                                    </li>
                                )
                            })}
                        </td>
                        {/* Instructions */}
                        <td
                            colSpan='10'
                            className={section.Instruction ? styles.tableInstruction : styles.emptyInstruction}
                        >
                            {section.Instruction &&
                                section.Instruction
                            }
                        </td>
                    </tr>
                </React.Fragment>
            )
        })


    return (
        <div className={styles.instructionsTable}>
            <table className={styles.recipes}
                cellPadding='0'
                cellSpacing='0'
                border="1"
                width="100%"
            >
                <thead>
                    <tr>
                        <td
                            className={styles.toprow}
                            id={styles.tableIngredients}>
                            <h2>
                                Ingredients
                            </h2>
                        </td>
                        <td colSpan='20'
                            className={styles.toprow}
                            id={styles.tableInstructions} >
                            <h2>
                                Instructions
                            </h2>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {recipe.Table && tableSection}
                </tbody>
            </table>
        </div>
    )


}
