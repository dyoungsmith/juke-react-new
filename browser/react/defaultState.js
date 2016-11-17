'use strict';

const defaultAlbum = {
	name: '',
	id: 0,
	imageUrl: '',
	songs: []
};

const defaultState = {
	albums: [defaultAlbum],
	selectedAlbum: defaultAlbum,
	artists: [],
	selectedArtist: {
		albums: [defaultAlbum],
		songs: []
	},
	
	currentSong: {},
	isPlaying: false,
	progress: 0
};

export default defaultState;
