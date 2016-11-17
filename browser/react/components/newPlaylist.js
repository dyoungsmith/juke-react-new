'use strict';

import React, {Component} from 'react';

const NewPlaylist = ({handleChange, handleSubmit}) => {
	return (
		<div className="well" style={{marginTop: '20px'}}>
			<form className="form-horizontal" onSubmit={handleSubmit}>
				<fieldset>
					<div className="form-group col-xs-10">
						<input className="form-control"
							type="text"
							placeholder="Enter new playlist name"
							onChange={handleChange} />
					</div>
					<div className="form-group col-xs-10">
						<button className="btn btn-primary"
							type="submit"
							style={{backgroundColor: '#00BC8C'}}>CREATE PLAYLIST</button>
					</div>
				</fieldset>
			</form>
		</div>
	)
};

export default NewPlaylist;
