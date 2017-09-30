import React, {Component} from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Navigation from "./components/Navigation";
import FoldingPanel from "./components/FoldingPanel";
import ProjectList from "./components/projects/ProjectList";

class App extends Component {
    render() {
        return (
            <body>
                <Header/>
                <main className="cd-main" id="projects-main">
                    <ProjectList />
                    <About/>
                    <hr/>
                    <Contact/>
                </main>

                <Navigation/>
                <FoldingPanel/>
            </body>
        );
    }
}

export default App;
