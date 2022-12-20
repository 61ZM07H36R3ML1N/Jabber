import React from 'react'
import "./Feed.css";
import JabberBox from './JabberBox';
import "./JabberBox"


function Feed() {
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
            <h2>Home</h2>   
        </div>
        
        {/* JabberBox */}
        <JabberBox />

        {/* Post */}
    </div>
  )
}

export default Feed