import {ArrowBackOutlined, Fullscreen, FullscreenExit} from "@material-ui/icons";
import {useLocation} from "react-router-dom";
import "./Watch.scss";
import {useRef, useState} from "react";

export default function Watch() {
    const location = useLocation();
    const movie = location.state.movie;
    const videoRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    const handleFullScreen = () => {
        const video = videoRef.current;
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            // Check if document is in fullscreen mode
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setIsFullScreen(false);
        } else {
            // Enter fullscreen mode
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
            setIsFullScreen(true);
        }
    };

    return (
        <div className="watch">
            <a href="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </a>
            <video className="video watch" autoPlay ref={videoRef}>
                <source src={movie?.video} type="video/mp4" />
            </video>
            <button className="play-pause-button" onClick={handlePlayPause}>
                Play/Pause
            </button>
            <button className="fullscreen-button" onClick={handleFullScreen}>
                {isFullScreen ? <FullscreenExit /> : <Fullscreen />}
            </button>
        </div>
    );
}
