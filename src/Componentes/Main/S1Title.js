import React from "react";

const S1Title = (props) => {
    return (
        <section className="section-intro">
            <div className="intro-title">
                <h2>
                    {props.data ? props.data.title : "Loading"}
                </h2>
                <span class="span-line"></span>
                <h3>
                    {props.data ? props.data.subtitle : "Loading"}
                </h3>
            </div>
        </section>
    )
}

export default S1Title;
