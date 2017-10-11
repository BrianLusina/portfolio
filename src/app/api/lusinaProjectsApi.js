/**
 * @author lusinabrian on 11/10/17.
 * @notes: mock api that handles fetching project list items
 */
const projects = [
    {
        id:"menu-pro-item", 
        projectPage:"menu-desc.html",
        projectTitle:"Menu",
        projectShortDesc:"Website for a restaurant."
    },
    {
        id:"emerald-pro-item",
        projectPage:"emerald.html", 
        projectTitle:"Emerald",
        projectShortDesc:"A sample website for a design agency."
    },
    {
        id:"financevill-pro-item", 
        projectPage:"financevill.html",
        projectTitle:"Finance Village", 
        projectShortDesc:"Kenyan financial market information hub."
    },
    {
        id:"zenith-pro-item",
        projectPage:"zenith.html",
        projectTitle:"Zenith", 
        projectShortDesc:"Sample porfolio site for tech company."
    },
    {
        id:"miniwiki-pro-item",
        projectPage:"miniwiki.html",
        projectTitle:"Mini Wiki", 
        projectShortDesc:"Small webite mirroring Wikipedia."
    },
    {
        id:"chatter-pro-item",
        projectPage:"petshelter.html",
        projectTitle:"Pet Shelter",
        projectShortDesc:"Simple data management app"
    },
    {
        id:"acalc-pro-item",
        projectPage:"acalc.html",
        projectTitle:"ACalc",
        projectShortDesc:"Small material design calculator."
    },
    {
        id:"moviereel-pro-item",
        projectPage:"moviereel.html",
        projectTitle:"MovieReel",
        projectShortDesc:"Movie app that keeps you updated on the latest movies"
    },
    {
        id:"treasuregram-pro-item",
        projectPage:"treasuregram.html",
        projectTitle:"TreasureGram",
        projectShortDesc:"Tresure Photo gallery to store all your precious treasures."
    },
    {
        id:"foodhut-pro-item",
        projectPage:"foodhut.html",
        projectTitle:"Food Hut",
        projectShortDesc:"Simple Food website displaying restaurants and their menus"
    },
    {
        id:"pomodoro-pro-item",
        projectPage:"pomodoroclock.html",
        projectTitle:"Pomodoro Clock",
        projectShortDesc:"Small Pomodoro clock in React"
    },
    {
        id:"quotemachine-pro-item",
        projectPage:"quotemachine.html",
        projectTitle:"Quote Machine",
        projectShortDesc:"Small React app that generates random quotes",
    },
    {
        id:"jscalculator-pro-item",
        projectPage:"jscalculator.html",
        projectTitle:"JS Calculator",
        projectShortDesc:"Small simple React calculator",
    },
    {
        id:"makrdownjournal-pro-item",
        projectPage:"markdown-journal.html",
        projectTitle:"Markdown Journal",
        projectShortDesc:"Small React Markdown Editor",
    },
    {
        id:"devconference-pro-item",
        projectPage:"devconference.html",
        projectTitle:"DevConference",
        projectShortDesc:"Flask Application for Conferences",
    },
    {
        id:"hadithi-pro-item",
        projectPage:"hadithi.html",
        projectTitle:"Hadithi",
        projectShortDesc:"Blog for African Stories"
    },
    {
        id:"tictactoe-pro-item",
        projectPage:"tictactoe.html",
        projectTitle:"TicTacToe",
        projectShortDesc:"Simple Retro tic tac toe."
    },
    {
        id:"simongame-pro-item",
        projectPage:"simongame.html",
        projectTitle:"Simon",
        projectShortDesc:"Remember the simon game?"
    },
    {
        id:"simongame-pro-item",
        projectPage:"camperleaderboard.html",
        projectTitle:"Leaderboard",
        projectShortDesc:"FCC camper leaderboard"
    }
];

/**
 * Returns a promise to retrieve all projects locally stored in project
 * Acts like a mock api call
 * @returns {Object} Promise that is resolved
 * */
export function getAllLocalProjects(){
   return new Promise((resolve, reject) => {
       resolve(Object.assign([], projects));
   });
}