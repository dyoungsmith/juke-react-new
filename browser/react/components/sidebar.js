'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';

const Sidebar = () => {
	return (
		<div className="col-xs-2">
		  <sidebar>
	          <img src="juke.svg" className="logo" />
	          <section>
	            <h4 className="menu-item active">
	              <Link to="/albums">ALBUMS</Link>
	            </h4>
	          </section>
	          <section>
	            <h4 className="menu-item">
	              <Link to="/artists">ARTISTS</Link>
	            </h4>
	          </section>
	          <hr />
	          <section>
	            <h4 className="text-muted">PLAYLISTS</h4>
			  	<h4>
			      <Link className="btn btn-primary btn-block" to='/new-playlist'>
			      	<span className="glyphicon glyphicon-plus"></span> PLAYLIST
			      </Link>
			  	</h4>
	          </section>
	        </sidebar>
	    </div>
	)
}

export default Sidebar;
