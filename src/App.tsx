import React from 'react';
import Header from './components/Header';
import Navigation from './components/navigation/Navigation';
import FoldingPanel from './components/FoldingPanel';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import ProjectList from './components/projects/ProjectList';

function App() {
  return (
    <>
      <Header />
      <main className="cd-main" id="projects-main">
        <ProjectList />
        <About />
        <hr />
        <Contact />
      </main>
      <Navigation />
      <FoldingPanel />
    </>
  );
}

export default App;
