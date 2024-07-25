import React from "react";


const desktop = 'img/desktop.jpg'

const S2About = (props) => {
    return(
        <section className="section-about" id="about">

            <div className="about-title title">
                <h2>ABOUT US</h2>
                <p>{props.data ? props.data.subtitle : "loading..."}</p>

                <div className="about-body">
                    <img src={desktop} alt="" /> 
                    <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
            </div>

            <div className="about-info">
                {props.data ? props.data.info.map((infos) => 
                <div className="info">
                    <h4>{infos.titulo}</h4>
                    <span></span>
                    <p>{infos.paragraph}</p>
                </div>
                ) : "loading"}
            </div>
            
        </section>
    )
}

export default S2About;
