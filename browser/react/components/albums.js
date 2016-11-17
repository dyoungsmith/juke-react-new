'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';


const Albums = ({albums}) => {
	return (
		<div>
		  <h3>Albums</h3>
		  <div className="row">

		  	{albums.map(album => {
		  		return (
				    <div className="col-xs-4" key={album.id}>
				      <div className="thumbnail">
				        <img src={album.imageUrl} />
				        <div className="caption">
				          <h5>
				            <Link to={`/albums/${album.id}`}>{album.name}</Link>
				          </h5>
				          <small>{album.songs.length}{album.songs.length === 1 ? ' song': ' songs'}</small>
				        </div>
				      </div>
				    </div>
		  		)
		  	})}

		  </div>
		</div>
	)
}

export default Albums;
