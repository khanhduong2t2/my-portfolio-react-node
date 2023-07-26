import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Results = () => {
    return (
        <p>Your message has been sent. I will contact you soon !</p>
    )
}

function Contact() {
    const [result, showResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_Email_Service_Id, process.env.REACT_APP_Email_Template_Id, form.current, process.env.REACT_APP_Email_Public_Key)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);
    };

    setTimeout(() => {
        showResult(false);
    }, 3000);

    return (
        <div className="contact_me" id="contact">
            <div className="contactOverlay">
                <div className="container">
                    <div className="form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="formWord">
                                <h2>Say Hello!</h2>
                                <span>Full Name</span>
                                <br />
                                <input className="input100" type="text" name="fullName" required />
                                <br />
                                <span>Phone Number</span>
                                <br />
                                <input className="input100" type="text" name="phone" required />
                                <br />
                                <span>Enter Email</span>
                                <br />
                                <input className="input100" type="text" name="email" required />
                                <br />
                            </div>
                            <div className="formWord">
                                <span>Message</span>
                                <br />
                                <textarea name="message" required></textarea>
                                <br />
                                <button>SUBMIT</button>

                                <div className="row">{result ? <Results /> : null}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact