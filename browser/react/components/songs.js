'use strict';

import React, {Component} from 'react';

const Songs = ({songs, currentSong, isPlaying, play, pause}) => {
	return (
		<div>
			<br />
			<table className='table'>
			    <thead>
			      <tr>
			        <th></th>
			        <th>Name</th>
			        <th>Artists</th>
			        <th>Genre</th>
			      </tr>
			    </thead>
			    <tbody>
				    {songs.map(song => {
				    	return (
					      <tr key={song.id} className={song.id === currentSong.id ? 'active' : ''}>
					        <td>
					          {currentSong.id === song.id && isPlaying
					          	? <button className="btn btn-default btn-xs" onClick={pause}>
					          		<span className="glyphicon glyphicon-pause"></span>
					          	  </button>
					          	: <button className="btn btn-default btn-xs" onClick={() => {play(song)}}>
					          		<span className="glyphicon glyphicon-play"></span>
					          	  </button>
					          }
					        </td>
					        <td>{song.name}</td>
					        <td>{song.artists.map(artist => {
					        	return artist.name
					        }).join(', ')}</td>
					        <td>{song.genre}</td>
					      </tr>
				    	)
				    })}
			    </tbody>
			</table>
		</div>
	)
}

export default Songs;
