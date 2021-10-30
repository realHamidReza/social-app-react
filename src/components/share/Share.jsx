import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src="/assets/person/22.jpg"
                        alt=""
                        className="shareProfileImg"
                    />
                    <input
                        placeholder="What's in your mind Hamid Reza?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionTxt">
                                Photo or Video
                            </span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionTxt">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionTxt">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions
                                htmlColor="gold"
                                className="shareIcon"
                            />
                            <span className="shareOptionTxt">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
