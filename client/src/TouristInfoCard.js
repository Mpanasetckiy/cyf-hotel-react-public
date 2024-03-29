import React from "react";
import { Cards } from "./InfoCards";

const TouristInfoCard = () => {
  return (
    <>
      <main>
        <h1>Ultimate experience</h1>
      </main>
      <section>
        {Cards.map(({ src, alt, href, text }, index) => {
          return (
            <div key={index} className="card">
              <img src={require(`${src}`)} alt={alt} className="card-img-top" />
              <div className="card-body">
                <p>{text}</p>
                <a href={href} className="btn btn-secondary">
                  More info
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TouristInfoCard;
