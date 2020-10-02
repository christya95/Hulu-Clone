import React, { useEffect, useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './requests';

function Results({selectedOption}) {

    //State holds variables of the component that can be modified. Whenever, a state variable is updated the component is re-rendered.

    //First variable is the state variable, and the second is the function to modify the state.
    const [movies, setMovies] = useState([]);

        //When a component is loaded or updated, run this function
        useEffect(() => {
            //run this code once the Results component loads/mounts
            async function fetchData() {
                const request = await axios.get(requests.fetchActionMovies)
                console.log(request);
                setMovies(request.data.results); 
                return requests;               
            }

            fetchData();
        }, [])
        
        // useEffect(() => {
        //         //run this code EVERY the Results component loads/mounts
        //     }, )

        return (        
            <div className="results">
            {
                //The fetchData requsts is stored into movies (State variable), the .map function iterates (for loop) through movies. Then each index in movies is represented by movie. Movie is then passed into the component called "VideoCard"
                
                //For loops but for props
                movies.map((movie) => (

                //pass in the movie to the component as a prop
                <VideoCard movie={movie}/>
                //console.log(movie)
            ))}
        </div>
    )
}

export default Results
