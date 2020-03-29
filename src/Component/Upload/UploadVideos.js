import React, {Component} from 'react';

import Videojs from './VideoJS';
const videoJsOptions = {
    autoplay: false,
    fluid: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    // width: 720,
    // height: 300,
    aspectRatio: '16:9',
    controls: true,
    nativeControlsForTouch:true,
    sources: [
        {
            src: 'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8',
            // type: 'video/m3u8',
        },
    ],
};
class UploadVideos extends Component {
    render() {
        return (
            <div className="col-6">
                <Videojs {...videoJsOptions} />
            </div>
        );
    }
}

export default UploadVideos;