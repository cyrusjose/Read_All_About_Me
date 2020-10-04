import React from "react";
import "./Contactinfo.css";

export default function ContactInfo() {
  return (
    <div className="container fade-in">
        <div className="row justify-content-center mt-5 p-5">
            <div className="p-3 contactCard">
                <div className="card-body">
                    <h4 className="card-title mb-4">It would be a pleasure to know you!</h4>
                    <hr />
                    <p>
                        Shoot me an email, I would like to hear more from you.
                        <br/> Email: <a className="emailLink" href="mailto:cyrus.jose@outlook.com">cyrus.jose@outlook.com</a>.
                        <br/>
                        <br/> You can also reach me by phone.
                        <br/> Phone: <a href="tel: 909-213-1123">(909) 213-1123.</a>
                    </p>
                    <a className="emailButton" href="mailto:cyrus.jose@outlook.com"><button className="btn btn-primary" type="Email">Email</button></a>
                </div>
            </div>
        </div>
    </div>
  );
}
