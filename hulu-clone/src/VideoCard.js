import React from 'react'
import './VideoCard.css'
import TextTruncate from "react-text-truncate";
import {ThumbUpSharp} from "@material-ui/icons";

//base URL for the images in the TMDB API
const base_url = "https://image.tmdb.org/t/p/original/"

//img src is the base url + the movie props backdrop
//TextTruncate component is a tool used to minimize text of a selected element and it's content
function VideoCard( {movie,mediaType} ) {
    return (
        <div className='videoCard'>

            
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"/>
            
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />

            <h2>{movie.title || movie.name}</h2>

            <p className= "videoCard__stats">
                {"Type: " + mediaType.toString().toUpperCase()} &nbsp; ● &nbsp;
                { "Movie Release: " + (movie.release_date || movie.first_air_date)} &nbsp; ● &nbsp;
                <ThumbUpSharp />  &nbsp;
                {movie.vote_count}
            </p>
            
        </div>
    )
}

export default VideoCard
