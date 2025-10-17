import image from "@/images/resources/need-help-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";

const NeedHelp = () => {
  return (
    <section className="need-help">
      <div className="container">
        <div className="need-help__inner">
          <div className="need-help__img">
            <Image src={image.src} alt="" />
          </div>
          <div className="need-help__content">
            <h4 className="need-help__title">They need your help</h4>
            <p className="need-help__text">
              Lorem ipsum is are many variations of pass of norms and guide an
              effective simply free text majority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
