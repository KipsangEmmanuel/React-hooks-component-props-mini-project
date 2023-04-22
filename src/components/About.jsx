import React from "react";
function About(props) {
    const {imgSrc = "data:image/jpeg;base64,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",
            altText = "blog logo",
            aboutText
        } = props;
    return (
    <aside>
        <img src={imgSrc} alt={altText}/>
        <p>{aboutText}</p>      
    </aside>    
    );

};
export default About;