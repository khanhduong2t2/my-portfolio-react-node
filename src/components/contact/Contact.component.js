import React from 'react'

function Contact() {

    const submitForm = () => {

    }

    return (
        <div className="contactme" id="contact">
            <div className="contactOverlay">
                <div className="container">
                    <div className="form">
                        <form action="" onSubmit={submitForm}>
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

                                {/* <div className="row">{showResults ? <Results /> : null}</div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact