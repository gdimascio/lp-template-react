import React from "react";

const tech = 'img/Tecnologias/HTML5.png'

const S3Techno = (props) => {
    return(
        <section className="section-techno" id="tech">
            <div className="techno-title title">
                <h2>TECHNOLOGY</h2>
                <p>This are some tools and platforms we daily use</p>
            </div>

            <div className="techno-body">
                <div className="technos">
                    <img src={tech} alt="imgTech"/>
                    <img src={tech} alt="imgTech"/>
                    <img src={tech} alt="imgTech"/>
                </div>
                <div className="technos">
                    <img src={tech} alt="imgTech"/>
                    <img src={tech} alt="imgTech"/>
                </div>
            </div>
        </section>
    )
}

export default S3Techno;


