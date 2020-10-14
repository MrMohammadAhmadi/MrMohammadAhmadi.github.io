import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <div className="row">
        <div className="col-sm-12 py-3 text-center">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="row justify-content-center py-5">
        <div className="col-sm-5 text-center text-sm-left phone">
          <ul>
            <strong> Phone </strong> :<li>+98 9105548773</li>
          </ul>
          <ul>
            <strong> Email </strong> :<li>sm.ahmadi77@yahoo.com</li>
          </ul>
        </div>
        <div className="col-sm-4 text-center py-3">
          <ul>
            <a href="https://codepen.io/mrmohammadahmadi">
              <li
                className="bg-codepen"
                data-toggle="tooltip"
                data-placement="bottom"
                title="codepen.io"
              ></li>
            </a>
            <a href="https://github.com/MrMohammadAhmadi">
              <li
                className="bg-github"
                data-toggle="tooltip"
                data-placement="bottom"
                title="github.com"
              ></li>
            </a>
            <a href="https://stackoverflow.com/users/12333935/mohammad-ahmadi">
              <li
                className="bg-stackoverflow"
                data-toggle="tooltip"
                data-placement="bottom"
                title="stackoverflow.com"
              ></li>
            </a>
          </ul>
        </div>
        <div className="col-sm-3 text-center py-3">
          <ul>
            <a href="https://www.instagram.com/moohahmadi">
              <li
                className="bg-insta"
                data-toggle="tooltip"
                data-placement="bottom"
                title="instagram.com"
              ></li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
