import React from 'react'
import './VideoCard.css'

function VideoCard( movie ) {
    return (
        <div class='videoCard'>
            
            <img src="https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/half-baked-detail.png" alt=""/>
            
            <p>This is a film about icecream</p>
            <h2>Movie title</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
