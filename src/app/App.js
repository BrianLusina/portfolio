import React, { Component } from 'react';
import Header from "./components/Header";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <main className="cd-main" id="projects-main">

            <About/>
            <hr/>
        </main>
      </body>
    );
  }
}

export default App;
