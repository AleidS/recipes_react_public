import React from 'react'
import styles from './recipe.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Counter from './counter'

// https://stackoverflow.com/questions/19266197/reactjs-convert-html-string-to-jsx
//Converts string to html markup, usage: 
// const articleContent = "<p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p>"
// <Markup content={articleContent} />


export default function Recipe(props){
    //Check if source is a URL or not
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }
    //Split instruction string on newline char
    let instructions 
    let allInstructions
    if(props.Instructions){
         instructions =  props.Instructions.split('\n')
         allInstructions= instructions.map(instruction =>{
            return(
            <p>{instruction}  </p>
            )
        }
        )
    }
  //Check number of digits before decimal 


    //If recipe mentions intended number of people use that, else use 4
    const intendedPeople = props.IntendedPeople? props.IntendedPeople : 4
  
    const tableSection =
        props.Table? props.Table.map((section,i)=> { 
            return(
                <>
                {section.Title && <tr><td colspan='1' className={`multi-row ${styles.ingredientsTable}`}></td>{spacers(i-1)}
                <td colspan='19' className={styles.subtitle1} > 
                <h2 className={styles.subTitle2}><smaller>{section.Title}</smaller></h2> </td></tr>}
                    <tr className={styles.tableContent}>
                        <td className={styles.ingredientsTable}colspan='1'>
                        <table className={styles.test} cellspacing='0' width='100%' border='0' border-width='0' frame='0' bgcolor="">
                        {section.Ingredients? section.Ingredients.map(ingredient=>{
                            return(
                                <div>
                                    <tr>
                                        <td ><li>
                                             {ingredient.word && ingredient.word + ' '}
                                            
                                            {ingredient.quantity && (ingredient.quantity/intendedPeople*props.numberOfPeople<25?' '+
                                             Math.round(parseFloat((Math.round(ingredient.quantity/intendedPeople*props.numberOfPeople * 10) / 10).toPrecision(2))*4)/4 : 
                                            parseFloat((Math.round((ingredient.quantity/intendedPeople*props.numberOfPeople)/5)*5).toPrecision(2)))}
                                            {ingredient.unit && ' ' + ingredient.unit}
                                            {ingredient.type && ' ' + ingredient.type}</li>
                                            </td>
                                            
                                            
                                    </tr>
                                </div>
                            )
                         }):<><div><tr><td></td></tr></div></>}
                        </table>
                        </td>
                        {spacers(i)}
                        
                        <td colspan='10' className={section.Instruction? styles.tableInstruction:styles.emptyInstruction}>{section.Instruction &&<>{section.Instruction}</>}</td>
                    </tr> 
                </>
               
            )     
        })
        :
        <span></span>
    
    // Have as many spacers as table elements (map function of table has increment 'i')
    function spacers(number){
        let spacer = [];
        let lastSpacer=false;
        for(let i= 0; i <0; i++) {
            if (i===number-1){
                lastSpacer=true;
            }
            spacer.push(<td colspan='1' width='10%' className={styles.spacer} id={lastSpacer? styles.lastSpacer:styles.notLastSpacer}> </td>);
          }
          return(
            <>{spacer}</>
          )
    }
    
    const table2 = 
    <div>
        <table className={styles.recipes} cellpadding='0' cellspacing='0' border="1" width="100%" >
            <tr>
                <td className={styles.toprow} id={styles.tableIngredients}><h2>Ingredients</h2></td>
                <td colspan='20' className={styles.toprow} id={styles.tableInstructions} ><h2>Instructions</h2></td>
            </tr>
          {tableSection}
        </table>
    </div>
  
  const oldingredientList=
        props.Ingredients ? props.Ingredients.map((ingredient,index) =>{
            return(
                <li key={index} className={styles.ingredientInTable}>
                <span>{ingredient.type} </span>
                {ingredient.quantity && <span>: {ingredient.quantity/intendedPeople*props.numberOfPeople} </span>}
                {ingredient.quantity && <span> {ingredient.unit} </span>}
                </li>
            )
        })
        :<></>
  
    //Maps ingredients and properties to a list 
    const ingredientList= 
    props.Table ? <li>
        {props.Table.map(section=>{
            return(
            //If there are no ingredients, don't show a number
            section.Ingredients? section.Ingredients.map((ingredient,index) =>{
                return(
                    <li key={index}>
                    <span>{ingredient.type} </span>
                    {ingredient.quantity && <span>: {ingredient.quantity/intendedPeople*props.numberOfPeople} </span>}
                    {ingredient.quantity && <span> {ingredient.unit} </span>}
                    </li>
                )
            }):<></>
            )
            })
}
            
    </li>
    :
    <div></div>

    return(
        
    <div className={styles.recipeBox}>
        

       
        <h1 className= {styles.recipeName}>{props.Name}</h1>
        {/* If an image exists, display it, else, don't */}
        
        <Row className={styles.bootstrapRow}>
     
        {props.Image && <Col sm={12} md={5}> <div className={styles.imageContainer}>
            <img className= {styles.recipeImage} src={require(`../images/${props.Image}`)} alt=''/>
            {props.ImageSource &&
                <div> {props.ImageSource==='own'? <span className={styles.imageSource}>own</span>
                : <a className={styles.imageSource} href={props.ImageSource}> Image Source </a>}
                </div> }
           </div>
       </Col> }
       <Col className={styles.column}sm={12} md={props.Image? 7: 12}>
        <br></br>
       {props.IntendedPeople &&<p className={styles.instructions} id={styles.intendedPeople}> Original recipe was for <strong> {props.IntendedPeople}</strong> 
       {props.IntendedPeople===1? ' person':' people'} 
      <div className={styles.counter2}><Counter className={styles.counter2} plus={props.plus} minus={props.minus} count={props.numberOfPeople}/></div></p>}
     
        {/* If there is no image, let ingredients take up whole width */}
{/* <img className="icons8Small" src="https://img.icons8.com/color/96/000000/grocery-store.png"/> */}
   
        {props.Table ? <div className={styles.instructionsTable}> {table2} </div> :
       <div> <h2 className = {styles.ingredients}>  Ingredients</h2>
        <ul>{props.Table? <div> {ingredientList} </div> : <div>{oldingredientList} </div>}</ul></div>}
        </Col>
        </Row>
       
    
       {props.Instructions &&
       <>
        <h2 className={styles.instructionsTitle}>{props.Table && <>+</>} Instructions</h2>
        <p className={styles.instructions}> {allInstructions} </p>
        </>
       }
        {props.Source && 
        <div className={styles.sourceTitle}> 
            <h2 className={styles.sourceTitle}>Recipe (adapted) from:</h2>
        <div className={styles.instructions}> {validURL(props.Source)? <a href={props.Source} >Source</a>: <p> {props.Source}</p>}
        </div>
        </div>}
        <p className={styles.disclaimer}> Disclaimer: This website was made to demonstrate web-design, not as a 'serious' recipe website. If you want anything removed please <a href="mailto:aleidoonk@gmail.com">contact me. </a></p>
        {props.freePikName && <p className={styles.disclaimer}> <a href={props.ImageSource}> Image by {props.freePikName}</a> on Freepik</p>}
        
        
        
    </div>

    )


}


// Extra

// let movies = [
//     {
//         title: "Fight Club",
//         rank: 10,
//         id: "tt0137523"
//     },
//     {
//         title: "The Shawshank Redemption",
//         rank: 1,
//         id: "tt0111161"
//     }  
// ];

// let table = '';
// table += `<tr><th>ID</th><th>Name</th><th>Rank</th></tr>`;
// props.Table.forEach((section, quantity) => {
//     section.Ingredients.map(ingredient=>{
//             table = table + `<tr>`;
//             table = table + `<td> ${ingredient.type}</td>`;
//             table = table + `<td>${ingredient.unit}</td>`;
//             table = table + `<td>${ingredient.quantity}</td>`;
//             table += `</tr>`;
// })})
