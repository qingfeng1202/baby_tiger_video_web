import VideoPlayer from '../../components/VideoPlayer';

const Home = () => {
    return (
        <VideoPlayer />
        // <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        // <video
        //     id="my-video"
        //     className="video-js"
        //     controls
        //     preload="auto"
        //     width="640"
        //     height="264"
        //     poster="MY_VIDEO_POSTER.jpg"
        //     data-setup="{}"
        // >
        //     <source src="http://192.168.31.19:9000/vedio/movie/%E8%B5%A2%E5%AE%B6.HD1280%E9%AB%98%E6%B8%85%E5%9B%BD%E8%AF%AD%E4%B8%AD%E5%AD%97%E7%89%88.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=H65N6VZ1CKCVEF9GR4OC%2F20220527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220527T153951Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJINjVONlZaMUNLQ1ZFRjlHUjRPQyIsImV4cCI6MTY1MzY2OTU2NywicGFyZW50IjoicWluZ2ZlbmcifQ.Pjkvq6w993yPKU0kDUK-Ggdnyz3GiSZgKjgLpydDL--L_oVbyWJil9OKsqQbmf9jpMCE1IJ9g6t-gfxpVvUXWQ&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=2444171723ea65de1ede08e038c296ae087eddd42c1296174e1633f91d53553a" 
        //         type="video/mp4" />
        // </video>
    );
};


export default Home;