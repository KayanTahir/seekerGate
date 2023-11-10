import React from "react"
import  PropTypes from "prop-types";


function Scheduler () {

const YoutubeEmbed = () => (
    
    <div >
        <iframe 
        width="800"
        height="480"
        //embed Link will be come from database 
        src={`https://www.youtube.com/embed/XVXzfvnXcw0?si=2uKmGa2M533lM6IQ&amp;start=120`}
        text="helloworld"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      title="Embedded youtube"
        />
    </div>
)


// YoutubeEmbed.propTypes = {
//     //A value of data type
//     embedId: PropTypes.string.isRequired
//   };

  return (
    
    <div>
      <h1>Your Schedule video</h1>
      <YoutubeEmbed  />
      
    </div>

    
  )
}

export default Scheduler

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Scheduler() {
//   const [videoDuration, setVideoDuration] = useState('');

//   const getYoutubeVideoDuration = async (videoId) => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=YOUR_YOUTUBE_API_KEY`
//       );

//       // Parse the duration from the API response
//       const videoDuration = response.data.items[0].contentDetails.duration;

//       return videoDuration;
//     } catch (error) {
//       console.error('Error fetching video duration:', error);
//       return 'Unknown'; // Handle errors gracefully
//     }
//   };

//   useEffect(() => {
//     const fetchVideoDuration = async () => {
//       const videoId = 'XVXzfvnXcw0'; // Extract this from your embed link or database

//       const duration = await getYoutubeVideoDuration(videoId);
//       setVideoDuration(duration);
//     };

//     fetchVideoDuration();
//   }, []);

//   return (
//     <div>
//       <h1>Your Scheduled Video</h1>
//       <p>Video Duration: {videoDuration}</p>
//       <div>
//         <iframe
//           width="800"
//           height="480"
//           src="https://www.youtube.com/embed/XVXzfvnXcw0?si=2uKmGa2M533lM6IQ&amp;start=120"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           title="Embedded youtube"
//         />
//       </div>
//     </div>
//   );
// }

// export default Scheduler;
