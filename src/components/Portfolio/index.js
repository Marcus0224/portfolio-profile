import React, { useState } from "react";
import Project from '../Project';

function Portfolio() {
    
    const [projects, setProjects] = useState([
        {
            name: 'budget-tracker',
            description: 'indexDB, Node, Express, Mongoose',
            link: 'https://boiling-retreat-42311.herokuapp.com/',
            repo: 'https://github.com/Marcus0224/budget-tracker',
            image: 'tracker.png'
        },
        {
            name:'Devhub',
            description:'React, NoSQL databases, Chakra UI, GraphQL APIs',
            link:'https://whispering-island-67364.herokuapp.com/cart',
            repo:'https://github.com/Marcus0224/DevHub',
            image: 'Devhub.png'
        },
        {
            name:'Safespot',
            description:'Express,handlebars, Bcrypt, MySQL2',
            link:'https://safespotblog.herokuapp.com/login',
            repo:'https://github.com/Marcus0224/SafeSpot',
            image:'safespot.png'
        },
        {
            name: 'Food-Festival',
            description: 'Node, service-worker, PWA, MySQL2, HTML',
            link: 'https://marcus0224.github.io/food-festival/',
            repo: 'https://github.com/Marcus0224/food-festival',
            image:'burgers.jpg'
        },
        {
            name: 'WeatherMan',
            description: 'HTML, API, Javascript',
            link:'https://marcus0224.github.io/WeatherMan/',
            repo: 'https://github.com/Marcus0224/WeatherMan',
            image:'weatherman.png'   
        },
        {
            name:'Zookeeper',
            description:'Node, routes, css, HTML,Javascript',
            link:'https://marcus0224.github.io/Zookeeper/',
            repo:'https://github.com/Marcus0224/Zookeeper',
            image:'header-bg.jpg'
        },
        {
            name:'tech-blog',
            description:'MySQL,Sequelize,express,bcrypt',
            link:'https://floating-beach-88217.herokuapp.com/',
            repo:'https://github.com/Marcus0224/tech-blog',
            image:'techblog.png'
        },

    ]);

    return (
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <Project project={project} key={project.name} />
          ))}
        </div>
      );
    }
    
    export default Portfolio;
  
   