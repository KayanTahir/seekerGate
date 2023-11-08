import React from "react"
import  PropTypes from "prop-types";


function Scheduler () {

const YoutubeEmbed = ({embedId}) => (
    <div >
        <iframe 
        width="800"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      title="Embedded youtube"

        />
    </div>
)

YoutubeEmbed.propTypes = {
    //A value of data type
    embedId: PropTypes.string.isRequired
  };

  return (
    
    <div>
      <h1>Your Schedule video</h1>
      <YoutubeEmbed embedId="7pfa1sn_TWo" />
    </div>
  )
}

export default Scheduler