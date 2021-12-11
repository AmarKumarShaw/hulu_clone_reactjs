import React from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import Fade from "react-reveal/Fade"

const base_url = "https://image.tmdb.org/t/p/original/";


const VideoCard = ({movie}) => {
    return (
        <div className='videoCard'>
        <Fade>
            <img src={`${base_url}${movie.backdrop_path || movie.backdrop_path}`} alt="movie poster" />
            
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className='videoCard__stats'>
            {`${movie.release_date}`}
            <br />
            {movie.vote_count}
            </p>
            </Fade>
        </div>
    )
}

export default VideoCard
