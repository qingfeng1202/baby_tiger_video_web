import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends React.Component {

  videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: 'http://192.168.31.19:9000/vedio/movie/%E8%B5%A2%E5%AE%B6.HD1280%E9%AB%98%E6%B8%85%E5%9B%BD%E8%AF%AD%E4%B8%AD%E5%AD%97%E7%89%88.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=H65N6VZ1CKCVEF9GR4OC%2F20220527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220527T153951Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJINjVONlZaMUNLQ1ZFRjlHUjRPQyIsImV4cCI6MTY1MzY2OTU2NywicGFyZW50IjoicWluZ2ZlbmcifQ.Pjkvq6w993yPKU0kDUK-Ggdnyz3GiSZgKjgLpydDL--L_oVbyWJil9OKsqQbmf9jpMCE1IJ9g6t-gfxpVvUXWQ&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=2444171723ea65de1ede08e038c296ae087eddd42c1296174e1633f91d53553a',
      type: 'video/mp4'
    }]
  };

  // Instantiate a Video.js player when the component mounts
  componentDidMount() {
    

    this.player = videojs(this.videoNode, this.videoJsOptions, () => {
      console.log('onPlayerReady', this);
    });
    
  }

  // Dispose the player when the component will unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // Wrap the player in a `div` with a `data-vjs-player` attribute, so Video.js
  // won't create additional wrapper in the DOM.
  //
  // See: https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <video ref={node => this.videoNode = node} className="video-js"></video>
      </div>
    );
  }
}