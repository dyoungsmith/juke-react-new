'use strict';

export const mod = (num, m) => ((num % m) + m) % m;

// To sort arrays of objects by a key
export const sortBy = (field, reverse, primer) => {
	let key = primer 
		? function(x) {return primer(x[field])} 
		: function(x) {return x[field]};
	
	reverse = !reverse ? 1 : -1;

   	return (a, b) => {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    } 
};

export const addAudioUrl = (song) => {
	return `/api/songs/${song.id}/audio`;
};

export const addAlbumImg = (album) => {
	return `/api/songs/${album.songs[0].id}/image`;
};
