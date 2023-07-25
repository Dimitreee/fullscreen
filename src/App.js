import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        let fullscreen = document.querySelector("img");
        let button = document.querySelector("button");

        button.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                fullscreen?.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
    }, [])

    return (
        <div className="container">
            <p>
                When the image goes to fullscreen mode to preserve its aspect ratio, it won't fill the whole screen therefore
                a background might appear. <br/> Using :fullscreen pseudo-class selector we can control the background and
                other styles:
            </p>

            <button>Toggle Fullscreen</button>

            <img src="https://source.unsplash.com/600x400/?iran" alt="" />

        </div>
    );
}

export default App;
