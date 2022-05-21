import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Cards() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card border border-light">
          <h5 className="card-header">Live Kirtan</h5>
          <div className="card-body">
            <h5 className="card-title">Tap to play</h5>
            <p className="card-text">
              <ReactAudioPlayer
                className="center"
                src="https://live.sgpc.net:8443/;nocache=889869"
                controls
              />
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card border border-light">
          <h5 className="card-header">Mukhwaak</h5>
          <div className="card-body">
            <h5 className="card-title">Tap to Play</h5>
            <p className="card-text">
              <ReactAudioPlayer
                className="center"
                src="https://old.sgpc.net/hukumnama/jpeg%20hukamnama/hukamnama.mp3"
                controls
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
