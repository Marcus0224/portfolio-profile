import React, { useState } from "react";
import Project from '../Project';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio() {
    const [pages] = useState([
        {
            name:'portfolio'
        }
    ]);
    const [currentPage] = useState(pages);
    const [projects] = useState([
        {
            name: 'budget-tracker',
            description: 'indexDB, Node, Express, Mongoose',
            link: 'https://boiling-retreat-42311.herokuapp.com/',
            repo: 'https://github.com/Marcus0224/budget-tracker'
        },
        {
            name:'Devhub',
            description:'React, NoSQL databases, Chakra UI, GraphQL APIs',
            link:'https://whispering-island-67364.herokuapp.com/cart',
            repo:'https://github.com/Marcus0224/DevHub'
        },
        {
            name:'Safespot',
            description:'Express,handlebars, Bcrypt, MySQL2',
            link:'https://safespotblog.herokuapp.com/login',
            repo:'https://github.com/Marcus0224/SafeSpot'
        },
        {
            name: 'Food-Festival',
            description: 'Node, service-worker, PWA, MySQL2, HTML',
            link: 'https://marcus0224.github.io/food-festival/',
            repo: 'https://github.com/Marcus0224/food-festival'
        },
        {
            name: 'WeatherMan',
            description: 'HTML, API, Javascript',
            link:'https://marcus0224.github.io/WeatherMan/',
            repo: 'https://github.com/Marcus0224/WeatherMan',   
        },
        {
            name:'Zookeeper',
            description:'Node, routes, css, HTML,Javascript',
            link:'https://marcus0224.github.io/Zookeeper/',
            repo:'https://github.com/Marcus0224/Zookeeper'
        },
        {
            name:'tech-blog',
            description:'MySQL,Sequelize,express,bcrypt',
            link:'https://floating-beach-88217.herokuapp.com/',
            repo:'https://github.com/Marcus0224/tech-blog'
        },

    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;