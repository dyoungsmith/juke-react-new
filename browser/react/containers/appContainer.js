'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import Promise from 'bluebird';

import Sidebar from '../components/sidebar.js';
import Footer from '../components/footer.js';

import AUDIO from '../audio.js';
import defaultState from '../defaultState.js';
import {mod, sortBy, addAudioUrl, addAlbumImg} from '../utils.js';


export default class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.state = defaultState,

		// Methods
		this.selectAlbum = this.selectAlbum.bind(this);
		this.selectArtist = this.selectArtist.bind(this);
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	};

	render() {
		const props = {
			// Albums props
			albums: this.state.albums,
			// Album props
			selectAlbum: this.selectAlbum,
			selectedAlbum: this.state.selectedAlbum,

			// Artists props
			artists: this.state.artists,
			// Artist props
			selectArtist: this.selectArtist,
			selectedArtist: this.state.selectedArtist,

			// Player (shared by many components)
			currentSong: this.state.currentSong,
			isPlaying: this.state.isPlaying,
			play: this.play,
			pause: this.pause
		};

		return (
			<div id="main" className="container-fluid">
				<Sidebar />
				
				<div className="col-xs-10">
					{this.props.children && React.cloneElement(this.props.children, props)}
				</div>
				
				{this.state.currentSong.id 
					? <Footer currentSong={this.state.currentSong}
						isPlaying={this.state.isPlaying}
						play={this.play}
						pause={this.pause}
						next={this.next}
						prev={this.prev}
						progress={this.state.progress} /> 
					: <p></p>}
			</div>
		)
	};

	selectAlbum(albumId) {
		const logErr = console.error.bind(console);

		axios.get(`/api/albums/${albumId}`)
		.then(res => res.data)
		.then(fullAlbum => {
			fullAlbum.imageUrl = addAlbumImg(fullAlbum);
			fullAlbum.songs.map(song => {
				song.audioUrl = addAudioUrl(song);
			})
			this.setState({selectedAlbum: fullAlbum});
		})
		.catch(logErr);
	};

	selectArtist(artistId) {
		const logErr = console.error.bind(console);
		const endpoints = [
			`/api/artists/${artistId}`,
			`/api/artists/${artistId}/albums`,
			`/api/artists/${artistId}/songs`
		];

		let artistPromises = endpoints.map(endpt => {
			return axios.get(endpt);
		});

		Promise.all(artistPromises)
		.then(res => {
			return res.map(elem => { return elem.data })
		})
		.then(([artist, albums, songs]) => {
			let selectedArtist = artist;

			albums.map(album => { album.imageUrl = addAlbumImg(album) });
			selectedArtist.albums = albums;

			songs.map(song => { song.audioUrl = addAudioUrl(song) });
			selectedArtist.songs = songs;

			this.setState({selectedArtist});
		})
		.catch(logErr);
	};

	play(song) {
		AUDIO.pause();
		AUDIO.src = song.audioUrl;
		AUDIO.load();
		AUDIO.play();
		this.setState({currentSong: song, isPlaying: true})
	};

	pause() {
		AUDIO.pause();
		this.setState({isPlaying: false});
	};

	next() {
		let idx = this.state.selectedAlbum.songs.map(song => song.id).indexOf(this.state.currentSong.id);
		let nextIdx = mod(idx + 1, this.state.selectedAlbum.songs.length);
		this.play(this.state.selectedAlbum.songs[nextIdx]);
	};

	prev() {
		let idx = this.state.selectedAlbum.songs.map(song => song.id).indexOf(this.state.currentSong.id);
		let nextIdx = mod(idx - 1, this.state.selectedAlbum.songs.length);
		this.play(this.state.selectedAlbum.songs[nextIdx]);
	};

	componentDidMount() {
		const logErr = console.error.bind(console);
		const endpoints = [
			'/api/albums',
			'/api/artists'
		];

		let dataPromises = endpoints.map(endpt => {
			return axios.get(endpt);
		});

		Promise.all(dataPromises)
		.then(res => {
			return res.map(elem => {return elem.data})
		})
		.then(([albums, artists]) => {
			albums.map(album => {
				album.imageUrl = addAlbumImg(album);
			});
			const sortedAlbums = albums.sort(sortBy('name', false));
			const sortedArtists = artists.sort(sortBy('name', false));

			this.setState({
				albums: sortedAlbums,
				artists: sortedArtists
			});
		})
		.catch(logErr);

		// Player event listeners
		AUDIO.addEventListener('ended', () => {this.next()});

		AUDIO.addEventListener('timeupdate', () => {
			this.setState({progress: 100 * AUDIO.currentTime / AUDIO.duration});
		});
	}
}
