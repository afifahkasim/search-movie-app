import React from 'react'

import noImage from "../images/image_not_found.png";

const Popup = (props) => {
	return (
		<section className="popup">
			<div className="content">
				<div className="detail-container">
					<div className="poster">
						{props.selected.Poster === "N/A" ? (
							<img src={noImage} alt={props.selected.Title} />
						) : (
							<img src={props.selected.Poster} alt={props.selected.Title} />
						)}
					</div>
					<div className="info">
						<div className="field">
							<div className="label">
								<p className="title label-p">{props.selected.Title}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								<p className="label-p">{props.selected.Plot}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								Released: <p className="label-p">{props.selected.Released}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								Runtime: <p className="label-p">{props.selected.Runtime}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								Genre: <p className="label-p">{props.selected.Genre}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								IMDB Rating: <p className="label-p">{props.selected.imdbRating}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								Director(s): <p className="label-p">{props.selected.Director}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								Writer(s): <p className="label-p">{props.selected.Writer}</p>
							</div>
						</div>
						<div className="field">
							<div className="label">
								Language(s): <p className="label-p">{props.selected.Language}</p>
							</div>
						</div>
						<button className="close" onClick={props.closePopup}>Close</button>

					</div>
				</div>

			</div>
		</section>
	)
}

export default Popup
