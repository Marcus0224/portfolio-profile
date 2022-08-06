import React from "react";
import "./experience.css"
import { BsPatchCheck } from 'react-icons/bs'

const experience = () => {
    return (
        <section>
            <h4>Skills</h4>
            <h2>My Experience</h2>

            <div className="experience-conatiner">
                <div className="experience_fr">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>
                <div className="experience-ba">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>Express.js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsPatchCheck className='experience-details-icon' />
                            <div>
                                <h4>GraphQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience