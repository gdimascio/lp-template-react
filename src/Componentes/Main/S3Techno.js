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
                    <img src={tech}/>
                    <img src={tech}/>
                    <img src={tech}/>
                </div>
                <div className="technos">
                    <img src={tech}/>
                    <img src={tech}/>
                </div>
            </div>
        </section>
    )
}

export default S3Techno;


{/* 
        <section class="section-techno" id="tech">
            <div class="techno-title title">
                <h2>TECHNOLOGY</h2>
                <p>This are some tools and platforms we daily use</p>
            </div>
            <div class="techno-body">
                <div class="technos">
                    <img src="./public/img/Tecnologias/HTML5.png" id="__img">
                    <img src="./public/img/Tecnologias/HTML5.png" id="__img">
                    <img src="./public/img/Tecnologias/HTML5.png" id="__img">
                </div>
                <div class="technos">
                    <img src="./public/img/Tecnologias/HTML5.png" id="__img">
                    <img src="./public/img/Tecnologias/HTML5.png" id="__img">
                </div>
            </div>
        </section>
 */}
