import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import requests from './requests';
import Results from './Results';

//The default fetch request is the Trending movies in the API
//Passing in the selected option property to the results component
function App() {

    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

    return ( <div className = "app">

        <Header />
        
        <Nav setSelectedOption={setSelectedOption}/>
        
        <Results selectedOption={selectedOption}/>
        
        </div>
    );
}

export default App;