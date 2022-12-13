import React from "react";

import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from "react-share";

import "./Share.css"

function Share() {
    return (
        <div className="share">
            <p>Share Your Day</p>
            <div className="share-buttons">
                <FacebookShareButton 
                    url={"https://github.com/lewisgormanneale"}
                    quote={"Here's my days of code"}
                    hashtag="#mydaysofcode">
                    <FacebookIcon size={36} />
                </FacebookShareButton>
                <TwitterShareButton 
                    url={"https://github.com/lewisgormanneale"}
                    quote={"Here's my days of code"}
                    hashtag="#mydaysofcode">
                    <TwitterIcon size={36} />
                </TwitterShareButton>
                <LinkedinShareButton 
                    url={"https://github.com/lewisgormanneale"}
                    quote={"Here's my days of code"}
                    hashtag="#mydaysofcode">
                    <LinkedinIcon size={36} />
                </LinkedinShareButton>
            </div>
        </div>
    );
};

export default Share;