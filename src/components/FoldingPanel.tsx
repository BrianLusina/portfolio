import React from 'react';


function FoldingPanel() {
  return (
    <div className="cd-folding-panel">
	
        {/* this is the left fold */}
		<div className="fold-left"/>

        {/* this is the right fold */}
		<div className="fold-right"/>

		<div className="cd-fold-content">
            {/* content will be loaded using javascript */}
		</div>
		<a className="cd-close" href="#0"/>
	</div>
  );
}

export default FoldingPanel;
