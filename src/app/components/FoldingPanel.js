import React from 'react';

/**
 * FoldingPanel stateless component
 */
const FoldingPanel = () => {
    return (
        <div className="cd-folding-panel">
            <div className="fold-left"></div>

            <div className="fold-right"></div>

            <div className="cd-fold-content">
                {/*Content will be filled using JS*/}
            </div>
            <a className="cd-close" href="#0"></a>
        </div>
    );
};

export default FoldingPanel;