import React from 'react';
import YouTube, { Options } from 'react-youtube';

class VideoFrame extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1 as 1
            }
        };

        return <YouTube
            videoId="2g811Eo7K8U"
            opts={opts} />;
    }
}

export default VideoFrame;