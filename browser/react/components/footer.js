'use strict';

import React, {Component} from 'react';

const Footer = ({currentSong, isPlaying, play, pause, next, prev, progress}) => {
	return (
		<footer>
	        <div className="pull-left">
	          <button className="btn btn-default" onClick={prev}>
	            <span className="glyphicon glyphicon-step-backward"></span>
	          </button>

	          {isPlaying 
	          	? <button className="btn btn-default" onClick={pause}>
	          		<span className="glyphicon glyphicon-pause"></span>
	       		  </button>
	       		: <button className="btn btn-default" onClick={() => {play(currentSong)}}>
	       			<span className="glyphicon glyphicon-play"></span>
         		  </button>
	          }		            
	          
	          <button className="btn btn-default" onClick={next}>
	            <span className="glyphicon glyphicon-step-forward"></span>
	          </button>
	        </div>
	        <div className="bar">
	          <div className="progress">
	            <div className="progress-bar" style={{width: `${progress}%`, backgroundColor: "#00BC8C"}}></div>
	          </div>
	        </div>
	    </footer>
	) 
}

export default Footer;
