'use strict';

import React, {Component} from 'react';
import Songs from './songs.js';


export default class Album extends Component {
	render() {
		return (
			<div className="album col-xs-10">
			  <div>
			    <h3>{this.props.selectedAlbum.name}</h3>
			    <img src={this.props.selectedAlbum.imageUrl} className="img-thumbnail" />
			  </div>
			  <Songs songs={this.props.selectedAlbum.songs}
			  	currentSong={this.props.currentSong}
			  	isPlaying={this.props.isPlaying}
			  	play={this.props.play}
			  	pause={this.props.pause} />
			</div>
		)
	};

	componentDidMount() {
		const albumId = this.props.params.albumId;
		const selectAlbum = this.props.selectAlbum;
		selectAlbum(albumId);
	}
}
