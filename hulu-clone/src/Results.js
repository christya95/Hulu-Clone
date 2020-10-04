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
                console.log(selectedOption)
                //We iterate through selectedOption (what we select from Nav)
                //each index of selectOption is fetchUrlOption
                //use axios to get the fetch request from TMDB using fetchUrlOption
                //We then store the promise from axios.get() into "request"
                //then request is stored into results array
                let results = selectedOption.map((fetchUrlOption)=> {
                    const request = axios.get(fetchUrlOption)
                    console.log(request)
                    return request;
                })
                //We return an array of data, not an array of promises
                return await Promise.all(results);              
            }

            //We will set each movie/tv shows to "movies" (member of the component)
            async function setData() {
                //Retrieve the array of Data from fetchData function
                let arrayOfData = await fetchData();
                console.log(arrayOfData)
                let allDataResults = [];
                //For each URL response form the API (either Movies or TV)
                //we will collect the data.results from each and store those 
                //into one giant array called "allDataResults"
                arrayOfData.forEach((dataObject)=> {
                    console.log(dataObject)
                    allDataResults = allDataResults.concat(dataObject.data.results);
                    console.log(allDataResults)
                })
                console.log(allDataResults);
                //Assign the giant array into "movies"
                setMovies(allDataResults); 
            }

            setData();
            //selectedOption is a dependancy from outside, and useEffect needs it before it is run
        }, [selectedOption])
        
        // useEffect(() => {
        //         //run this code EVERY the Results component loads/mounts
        //     }, )

        return (        
            <div className="results">
            {
                //The fetchData requsts is stored into movies (State variable), the .map function iterates (for loop) through movies. Then each index in movies is represented by movie. Movie is then passed into the component called "VideoCard"
                
                //For loops but for props
                movies.map((movie,index) => (

                //pass in the movie to the component as a prop
                <VideoCard movie={movie}
                           mediaType={index < 20 ? 'movie' : 'tv'}
                />
                //console.log(movie)
            ))}
        </div>
    )
}

export default Results
