import React from 'react'

import MovieCard from './MovieCard'

const Results = (props) => {
	return (
		<section className="results">
			{props.results.map(movie => (
				<MovieCard key={movie.imdbID} movie={movie} openPopup={props.openPopup} />
			))}
		</section>
	)
}

export default Results
