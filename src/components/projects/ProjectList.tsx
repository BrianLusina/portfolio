import React from 'react'
import ProjectItem from './ProjectItem';
import projects from './projects.json';

const ProjectList = () => {
    return (
        <ul className="cd-gallery">
            {
                projects.map(({id, link, title, description, classname }) => {
                    return <ProjectItem id={id} link={link} title={title} description={description} classname={classname} />
                })
            }
            
            {/* <!--Pet Shelter Project--> */}
            <li id="chatter-pro-item" className="cd-item">
                <a href="petshelter.html">
                    <div>
                        <h2>Pet Shelter</h2>
                        <p>Simple data management app</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>

            {/* <!--movie reel--> */}
            <li id="moviereel-pro-item" className="cd-item">
                <a href="moviereel.html">
                    <div>
                        <h2>MovieReel</h2>
                        <p>Movie app that keeps you updated on the latest movies</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>

            {/* <!--TreasureGram--> */}
            <li id="treasuregram-pro-item" className="cd-item">
                <a href="treasuregram.html">
                    <div>
                        <h2>TreasureGram</h2>
                        <p>Tresure Photo gallery to store all your precious treasures.</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>

            {/* <!--Food Hut--> */}
            <li id="foodhut-pro-item" className="cd-item">
                <a href="foodhut.html">
                    <div>
                        <h2>Food Hut</h2>
                        <p>Simple Food website displaying restaurants and their menus</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
            
            {/* <!--Pomodoro Clock--> */}
            <li id="pomodoro-pro-item" className="cd-item">
                <a href="pomodoroclock.html">
                    <div>
                        <h2>Pomodoro Clock</h2>
                        <p>Small Pomodoro clock in React</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
            
            {/* <!--Quote Machine--> */}
            <li id="quotemachine-pro-item" className="cd-item">
                <a href="quotemachine.html">
                    <div>
                        <h2>Quote Machine</h2>
                        <p>Small React app that generates random quotes</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
            
            {/* <!--JS Calculator--> */}
            <li id="jscalculator-pro-item" className="cd-item">
                <a href="jscalculator.html">
                    <div>
                        <h2>JS Calculator</h2>
                        <p>Small simple React calculator</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>   
            
            {/* <!--Markdown Journal--> */}
            <li id="makrdownjournal-pro-item" className="cd-item">
                <a href="markdown-journal.html">
                    <div>
                        <h2>Markdown Journal</h2>
                        <p>Small React Markdown Editor</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>

            {/* <!--Dev Conference--> */}
            <li id="devconference-pro-item" className="cd-item">
                <a href="devconference.html">
                    <div>
                        <h2>DevConference</h2>
                        <p>Flask Application for Conferences</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
            
            {/* <!--Hadithi--> */}
            <li id="hadithi-pro-item" className="cd-item">
                <a href="hadithi.html">
                    <div>
                        <h2>Hadithi</h2>
                        <p>Blog for African Stories</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
            
            {/* <!--TicTacToe--> */}
            <li id="tictactoe-pro-item" className="cd-item">
                <a href="tictactoe.html">
                    <div>
                        <h2>TicTacToe</h2>
                        <p>Simple Retro tic tac toe.</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
            
            {/* <!--Simon game--> */}
            <li id="simongame-pro-item" className="cd-item">
                <a href="simongame.html">
                    <div>
                        <h2>Simon</h2>
                        <p>Remember the simon game?</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
            
            {/* <!--Camper leaderboard--> */}
            <li id="simongame-pro-item" className="cd-item">
                <a href="camperleaderboard.html">
                    <div>
                        <h2>Leaderboard</h2>
                        <p>FCC camper leaderboard</p>
                        <b>View More</b>
                    </div>
                </a>
            </li>
        </ul>
    )
}

export default ProjectList;