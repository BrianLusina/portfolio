import React, {Component} from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Navigation from "./components/Navigation";
import FoldingPanel from "./components/FoldingPanel";
import ProjectGallery from "./components/projects/ProjectGallery";
import $ from "jquery";

class App extends Component {
    constructor(){
        super();
        this.state = {
            isFoldingPanelOpen: false,
            viewPortSize: ""
        };

        this.onToggleFoldingPanel = this.onToggleFoldingPanel.bind(this);
        this.updateViewPortSize = this.updateViewPortSize.bind(this);
    }

    /**
     * Updates the view port size
     * */
    updateViewPortSize(){
        this.setState({
            viewPortSize : window.getComputedStyle(
                document.querySelector('.cd-main'), '::before')
                .getPropertyValue('content').replace(/"/g, "").replace(/'/g, "")
        })
    }

    /**
     * Toggles the content to display in the folding panel
     * This will open and close the folding panel and update the state
     * */
    onToggleFoldingPanel(isFoldingPanelOpen){
        this.setState(prevState => {
           prevState.isFoldingPanelOpen = isFoldingPanelOpen;
           return prevState;
        });

        let foldingPanel = $('.cd-folding-panel');
        let mainContent = $('.cd-main');

        if(isFoldingPanelOpen){
            /* load and show new content */
            let foldingContent = foldingPanel.find('.cd-fold-content');
            foldingContent.load(/*url + */' .cd-fold-content > *', function (event) {
                setTimeout(function () {
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            });
        } else {
            let mainContent = $(".cd-main");
            mainContent.removeClass('fold-is-open');
            let mq = this.state.viewportSize;

            (mq === 'mobile' || $('.no-csstransitions').length > 0 )
                /* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
                ? $('body').removeClass('overflow-hidden')
                : mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').removeClass('overflow-hidden');
                    mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                });
        }
    }


    /**
     * Component will mount
     * */
    componentDidMount(){
        window.addEventListener('resize', this.updateViewPortSize);
        this.updateViewPortSize()
    }

    /**
     * Component will un mount updates the view port size
     * */
    componentWillUnmount(){
        window.removeEventListener('resize', this.updateViewPortSize);
    }

    render() {
        return (
            <div>
                <Header/>
                <main className="cd-main" id="projects-main">
                    <ProjectGallery
                        onToggleFoldingPanel={this.onToggleFoldingPanel}
                        viewPortSize={this.state.viewPortSize}
                    />
                    <About/>
                    <hr/>
                    <Contact/>
                </main>

                <Navigation/>
                <FoldingPanel onFoldingPanelToggle={this.onToggleFoldingPanel}/>
            </div>
        );
    }
}

export default App;
