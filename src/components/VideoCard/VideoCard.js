import React from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";


const base_url = "https://image.tmdb.org/t/p/original/";


const VideoCard = ({movie}) => {
    return (
        <div className='videoCard'>
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
        </div>
    )
}

export default VideoCard
