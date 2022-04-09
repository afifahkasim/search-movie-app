import React from 'react'

import noImage from "../images/image_not_found.png";

const MovieCard = (props) => {
	return (
		<div className="movie" onClick={() => props.openPopup(props.movie.imdbID)}>
			<div className="poster">
				{/* <img src={props.movie.Poster} /> */}

				{props.movie.Poster === "N/A" ? (
							<img src={noImage} alt={props.movie.Title} />
						) : (
							<img src={props.movie.Poster} alt={props.movie.Title} />
						)}
			</div>
			<h3>{props.movie.Title} ({props.movie.Year})</h3>
		</div>
	)
}

export default MovieCard
