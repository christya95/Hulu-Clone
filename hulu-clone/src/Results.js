import React, { useEffect, useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './requests';

function Results() {

    const [movies, setMovies] = useState([]);

        //When a component is loaded, run this function
        useEffect(() => {
            //run this code once the Results component loads/mounts
            async function fetchData() {
                const request = await axios.get(requests.fetchActionMovies)
                console.log(request);
            }

            fetchData();
        }, [])
        
        // useEffect(() => {
        //         //run this code EVERY the Results component loads/mounts
        //     }, )

    //For loops but for props
    return (
        <div className="results">
            {
                movies.map((movie) => (
                <VideoCard />
            ))}
        </div>
    )
}

export default Results
