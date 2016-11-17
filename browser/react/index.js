'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import AppContainer from './containers/appContainer.js';
import FilterableArtistsContainer from './containers/filterableArtistsContainer.js';
import Albums from './components/albums.js';
import Album from './components/album.js';
import Artists from './components/artists.js';
import Artist from './components/artist.js';
import Songs from './components/songs.js';
import NewPlaylist from './components/newPlaylist.js';

const Routes = (
	<Router history={hashHistory}>
		<Route path='/' component={AppContainer}>
			<IndexRedirect to='albums' />
			<Route path='albums' component={Albums} />
			<Route path='albums/:albumId' component={Album} />
			<Route path='artists' component={FilterableArtistsContainer} />
			<Route path='artists/:artistId' component={Artist}>
				<IndexRedirect to='albums' />
				<Route path='albums' component={Albums} />
				<Route path='songs' component={Songs} />
			</Route>
			<Route path='new-playlist' component={NewPlaylist} />
		</Route>
	</Router>
)

// Define React entry point for html
ReactDOM.render(Routes, document.getElementById('app'));
