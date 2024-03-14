import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming your styles are here
import Layout from '../Layout'; // Assuming your layout is here


function VideoTutorial() {
    return (
        <Layout>

            <div className="ht-vid-container">
                <video width="60%" height="60%" controls>
                    <source
                        src="https://cdn.glitch.global/4239e16b-9d82-4955-8858-fb32d502f520/Placeholder%20video.mp4?v=1710120896385"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </Layout>
    );
}

export default VideoTutorial;
