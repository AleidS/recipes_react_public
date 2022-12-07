import React from 'react'
import styles from './about.module.css'


export default function About(){
return(
<div className={styles.about}>

    <h2> About this website </h2>

        <p>   
              {/* <img className={styles.reactLogo} src={require('../images/logo.svg')}/> */}
              <i class={`fa-brands fa-react ${styles.reactLogo}`}></i>
            Hi! Thankyou for checking out this website. <br/> <br/>
            This website was made to learn React (web design framework),
            and as a web design demonstration. (Hence, don't focus too much on the recipes themselves, I'm no expert :) ) <br/><br/>
            I wanted to make a user-friendly recipe website that displays recipes in such a way 
            you don't have to scroll back and forth between ingredients and instructions, and
            have a quick overview of what you need, and what to do, without any distractions.<br/>
        </p>

    <h2>About Me</h2>
        <p>
        <i class={`fa-solid fa-pen-nib ${styles.pen}`}></i>
            I'm an beginning front-end web developer, currently focusing on building a web design portfolio. 
            I first started learning HTML and CSS in 2019, later learned Javascript, 
            and then took a course on software development in Python. 
            I try to apply the things I learned there about functional and object oriented programming and coding practices, 
            to web-design :). In 2022 I followed the Scrimba React course.
            <br/>
            I'm currently a student in a HCI related field, and hope to continue designing websites after graduating.
            <br/>
            You can find more of my websites <a href="http://www.aleidsuzan.com ">here </a> 
        </p>

    <h2> Contact</h2>

        <p>
            <i class={`fa fa-envelope ${styles.email}`} aria-hidden="true"></i>
            For any questions, comments or feedback (always greatly appreciated), <a href="mailto:aleidoonk@gmail.com">send me an email</a>.<br/>
            I'm currently not doing any projects for others (untill I learn how to use a CMS). Working on a project and need specific help? I'm happy to take a look.
        <br/>    <br/>    <br/>
        </p>

    <h2>Technical info </h2>

        <p>
        <i class={`fa-solid fa-gears ${styles.gears}`}></i>
        <h4>Making of</h4>

        This website was coded from scratch, using Visual Studio Code. Combined with learning React, it took around 2 months to make as a side-project. 

        <h4>React</h4>

        This website uses React to render components (like the recipe cards on the front page, as well as the recipes themselves),
        based on the contents of a local database with recipes. <br/>For those unfamiliar with React:
        React is a Javascript framework that uses components that can be re-used.
        This makes it so that the layout and structure of similar elements, like recipes, only needs to be coded once, 
        and is automatically applied to every new recipe that is rendered in a component. 
        This makes it much easier to add new recipes, and to keep an overview of the code.<br/>
        The menu is automatically generated based on the contents of this database, so that new recipes and categories automatically get new menu buttons. 
        The frontpage also automatically generates recipe cards, based on which recipes have an image. A lot of conditional rendering is going on to avoid errors.

        <h4>useState</h4>

        The website uses React useStates for allowing a user to filter out all non-vegan recipes, and to select the preferred number of people.
        Recipes are automatically updated whenever the number of people is changed.
        If the number of people is not specified for a recipe, the website defaults this to 4, and calculates quantities from there.

        <h4>Rounding</h4>
        The ingredients are set to display at most 3 unique digits (and 0's when needed), to avoid overly-precise measurements. <br/>
        Quantities are automatically rounded to the nearest quarter for quantities under 10, between 10 and 20 quantities are rounded to whole numbeers, 
        and above 25 they are rounded to the nearest multiple of 5, with a maximum of 2 unique digits. <br/>
        This is done using Math.round, parseFloat and toPrecision.

        <h4>Responsive design</h4>

        I used a couple techniques for a better mobile experience: I used 'clamp' for many properties, 
        making them scale with device dimensions, while also ensuring they don't get too small or too large.
        I also used custom breakpoints/media queries for cases Bootstrap didn't suffice.

        <h4>Bootstrap</h4>

        Some of the content as well as the Navbar use bootstrap for easier responsivenes. So in large screens, you see three columns on the front page, and the recipe next to the photo, while on smaller screens everything becomes one colum.
        CSS files are moduled to prevent conflicts of classNames

        <h4>Compatibility</h4>
        For cross-browser compatibility, I used https://autoprefixer.github.io/, 
        as well as added default (font-)sizes for any properties that use clamp, because on old IOS versions, this method does not work.
        Other than that, I used a couple different devices and different browsers for manual testing.
        
        <h4>Clean code</h4>

        I must admit, that this website isn't the poster-child of clean code. I did use functions to avoid repetition, wherever possible. 
        And I picked more or less logical names, whenever I didn't need to use existing names from bootstrap modules for example.
        I also separated most of the stylesheets into modules, to keep a better overview.
      
        <h4>Lazy Image Loading / SEO </h4>

        Lastly, to save bandwith and improve SEO, the images displayed on the frontpage use a react-lazy-load-image-component,
        so they only load when they are in view for the user.

        <h4>Icons</h4>
        Most icons are font-awesome icons (except the title icon).





        </p>
    {/* <p>
     <a target="_blank" href="https://icons8.com/icon/35084/circled-envelope">Circled Envelope</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </p> */}
</div>
)
}