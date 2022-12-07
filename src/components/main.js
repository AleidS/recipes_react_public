import React from 'react'
import Recipe from './recipe.js'
import Recipes from '../data/recipes.js'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Divide as Hamburger } from 'hamburger-react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import './main.css'
import Counter from './counter'
import Frontpage from './frontpage'
//Responsive Bootstrap props: 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react' 
import Footer from './footer.js'
import About from './about.js'

export default function Main(){
    const [expanded, setExpanded] = React.useState(false)
    const [allRecipes, setAllRecipes] = React.useState(Recipes)
    const [currentRecipe, setCurrentRecipe] = React.useState(false)
    const [numberOfPeople, setNumberOfPeople] = React.useState(4)
    const [vegetarianRecipes, setVegetarianRecipes] = React.useState(false)
    const [frontPageOn, setFrontPageOn] = React.useState(true)
    const [vegan, setVegan] = React.useState(false)
    const [aboutOn, setAboutOn] = React.useState(false)


   // setAllRecipes(Recipes)

    // vegetarianOnly()
    // function vegetarianOnly(){
    //     setVegetarianRecipes(allRecipes.map(data=> 
    //         {
    //         return(data.content.map(recipe => {
    //                 if (recipe.vegetarian==true){
    //                     return(
    //                         {recipe}
    //                         )
    //                     }
    //                 }))})
    //     )
    //     alert(vegetarianRecipes)
    //     setAllRecipes(vegetarianRecipes)
    // }
        
    useEffect(() => {
        document.body.style.zoom = "100%";
      }, []);
    
    function handleMinus(){
        if (numberOfPeople>1){
        setNumberOfPeople(prev => {return(prev-1)})
        }
        // if (numberOfPeople>1001){
        //     alert('Alright then')
        //     setNumberOfPeople(102) 

        // }
    }
    function handlePlus(){
        setNumberOfPeople(prev => {return(prev+1)}) 
        // if (numberOfPeople===99){
        //     alert('Dude, really?')

        // }
        // if (numberOfPeople===100){
        //     alert('Carefull')

        // }
        // if (numberOfPeople===101){
        //     alert('Woopsie')
        //     setNumberOfPeople(1000000) 

        // }
    }
    //Below generates all buttons for all recipes available, with corresponding parameter for function call
    const frontpage = allRecipes.map(data =>{
        return(
            data.content.map(recipe=> { 
                if (recipe.Image){
                return( <Col sm={12} md={6} lg={4}>
                        <div onClick={
                            ()=>{ setFrontPageOn(false); RenderRecipe(recipe);
                                //To automatically adjust number of people to intended per recipe
                            // setNumberOfPeople(recipe.IntendedPeople? recipe.IntendedPeople:0);  
                            }}>
                            <Frontpage {...recipe}/> 
                        </div> 
                    </Col>)
                }
            })
            
       )
    }
    )
    const allButtons = allRecipes.map(data=> {
        const navDropdownTitle =  <span>{data.category} {data.icon && <img src={data.icon} className='icons8Small' alt=''/>} </span>
        return(
            <div>
                {/* Render menu on mount makes that it can be opened on hover with CSS */}
            <NavDropdown title={navDropdownTitle} className={expanded?'droppedDownTitle':'dropDownTitle'}id="basic-nav-dropdown" >
            {data.content.map(recipe => {
                return(   
                    <div>
                     <NavDropdown.Item className='dropDown'data-bs-toggle="collapse" onClick={
                        ()=>{RenderRecipe(recipe);
                        // setNumberOfPeople(recipe.IntendedPeople? recipe.IntendedPeople:0);
                        setFrontPageOn(false); 
                        setAboutOn(false);
                        setTimeout(() => {setExpanded(false)},0); 
                        setExpanded(expanded ? false : "expanded");
                        window.scrollTo(0, 0)}} > 
                        {/* //Hides navbar on button click, with short delay */}
                        {/* // href={`#${recipe.Name}`}  > */}
                        <span data-bs-target="#testnav" data-bs-toggle="collapse" id='testSpan'>
                        {recipe.Name}
                            </span>
                        </NavDropdown.Item>
                    {/* <Nav.Link className="recipeButton" onClick={()=>RenderRecipe(recipe.Name)} href={`#${recipe.Name}`}>{recipe.Name}</Nav.Link> */}
                    </div> 
                    )
                }
            )}
            </NavDropdown> 
        </div>
        )
    })
// Because nested have to use both map and filter
    function goVegan(){
    setVegan(!vegan)
        if (vegan==false){
        setAllRecipes(Recipes.map(group=>({
            ...group, content: group.content.filter(recipe=>
                recipe.vegan == true
            )
        })))
    }
    else{
        setAllRecipes(Recipes)

    }
    }
    
    const Navigation = 
          <Navbar className='navbar' fs-5 id="testnav" variant="dark" expand="xl" sticky="top" expanded={expanded}>       
            <div aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}className="navTop"></div>
           
            <Container className={expanded? 'navContainerExpanded' :'navContainer'}>

              <Navbar.Brand className='titleContainer' onClick={()=>
                {setCurrentRecipe(false);
                setFrontPageOn(true); 
                setExpanded(false);
                setAboutOn(false);
                window.scrollTo(0, 0)}
                }>
                <span class="title">
                    {/* <RestaurantIcon className="titleIcon"/> */}
                    Recipes  
                    <img className='icons8'src="https://img.icons8.com/color/96/000000/basil.png" alt="icon8"/>
                    </span>
                </Navbar.Brand>
                <button
                    className={vegan?"vegan p-1 px-3 mx-5 fw-bold btn":"p-1 px-3 mx-5 fw-bold btn"} id='vegetarian'
                        onClick={() => {
                            goVegan();
                        }
                        } >
                    <img src={require("../images/vegetarian-mark-90.png")} className="vegetarianSymbol"></img>
                </button>
                <Counter className='counterMenu' count={numberOfPeople} minus={handleMinus} plus={handlePlus}/>
                <Navbar.Toggle className='toggle'aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}  > <Hamburger toggled={expanded}/></Navbar.Toggle>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {allButtons}
                    <Nav.Item title='About' className={expanded?'droppedDownTitle':'dropDownTitle'}id="basic-nav-dropdown" />
                    {/* <NavDropdown.Item className='dropDown' >  About    </NavDropdown.Item>
                        <NavDropdown.Item className='dropDown' > Contact </NavDropdown.Item>
                        <NavDropdown.Item className='dropDown' > Sources </NavDropdown.Item> */}
                        <Nav.Link className={expanded?"droppedDownTitle" : "navLink"} onClick={
                            () =>
                           { 
                            setCurrentRecipe(false);
                            setAboutOn(true);
                            setFrontPageOn(false); 
                            setTimeout(() => {setExpanded(false)},0); 
                            setExpanded(expanded ? false : "expanded");
                            window.scrollTo(0, 0);
                           }
                            }>
                                About</Nav.Link>

                  {/* <Nav.Link className={expanded?"droppedDownTitle" : "navLink"}>Sources</Nav.Link> */}
                  {/* </NavDropdown> */}
                  
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>

              
            </Container>
          </Navbar>

  
    //Below function then generates a recipe based on which button was clicked
    function RenderRecipe(recipe){
        setCurrentRecipe(recipe)

    }

    function RecipeOnClick(){
        setExpanded(expanded ? false : "expanded")
        window.scrollTo(0, 0)
    
    }
        
       
    
    return (
        <div className="main" > 
          
        
            {Navigation}
          
            <div onClick={()=>setExpanded(false)}>

            {aboutOn && <About/>}
            {frontPageOn &&  <Container onClick={RecipeOnClick} data-bs-toggle="collapse" class='frontPageContainer'><Row> {frontpage} </Row> </Container>} 
           {currentRecipe && <Recipe className='recipe'onClick={
            () => setExpanded(expanded ? false : "expanded")
            }            
            {...currentRecipe} data-bs-toggle="collapse" numberOfPeople={numberOfPeople} 
            componentToPassDown={<Counter className='counter2'/>}  count={numberOfPeople} minus={handleMinus} plus={handlePlus}/>}
           {/* <Gallery {...Recipes}/> */}
           <Footer/>
           </div>
        
        </div>
    )
}




    // const allRecipes= Recipes.map(recipe=> {
       
    //     return(
    //     <div>
    //     <Recipe 
    //         name={recipe.Name}
    //         ingredients={recipe.Ingredients} 
    //         instructions={recipe.Instructions} 
    //         numberOfPeople={8}
    //         />
        
    //      </div>
    //     )
    // })

    // return(
    //     <div>
    //          <div>{allRecipes}</div>
    //     </div>
    // )
// }