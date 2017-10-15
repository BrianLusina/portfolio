import React from 'react';
import $ from "jquery";
import PropTypes from "prop-types";
import FoldingPanelItem from "./FoldingPanelItem";

/**
 * FoldingPanel stateless component
 */
const FoldingPanel = ({ onFoldingPanelToggle }) => {

    /**
     * Closes the folding panel
     * @param event DOM event with information about element clicked
     * */
    function closeFoldingPanel(event){
        event.preventDefault();
        $('.cd-folding-panel').removeClass("is-open");

        onFoldingPanelToggle(false);
    }

    return (
        <div className="cd-folding-panel">
            <div className="fold-left"/>

            <div className="fold-right"/>

            {/*Content will be filled using JS*/}
            <div className="cd-fold-content">
                <FoldingPanelItem
                    projectTitle={"Acalc"}
                    projectLongDesc={"material design calc"}
                    projectUrl={"some long url"}
                    projectImg={""}
                    projectType={"app"}/>
            </div>
            <a className="cd-close" href="#" onClick={closeFoldingPanel}/>
        </div>
    );
};

/**
 * Folding panel prop types
 * */
FoldingPanel.propTypes = {
   onFoldingPanelToggle : PropTypes.func.isRequired
};

export default FoldingPanel;