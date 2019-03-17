import React from 'react';
import './styles.scss';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        const { formSubmitted, formError, ...rest } = this.state;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-silvia", ...rest })
        })
            .then(this.onSuccess)
            .catch(this.onError);

        e.preventDefault();
    };

    onSuccess = (response) => {
        if (!response.ok) {
            this.onError(response);
        } else {
            this.setState({ formSubmitted: true });
        }
    }

    onError = (error) => {
        this.setState({ formError: true });
        console.error(error);
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { formSubmitted, formError, name, email, message } = this.state;
        return (
            <>
                {formSubmitted && <h2 className="question">Thank you for contacting me!</h2>}
                {formError && <h2 className="question">Sorry, something went wrong!</h2>}
                
                <div className="contact" id="contact">
                    {!formSubmitted && (
                        <>
                            <h2 className="question">Have a question or want to work together?</h2>
                            <form method="POST" data-netlify="true" name="contact-silvia" className="contact-form " onSubmit={this.handleSubmit}>
                                <input className="input" type="text" name="name" placeholder="Name" required value={name} onChange={this.handleChange} />
                                <input className="input" type="email" name="email" placeholder="Email" required value={email} onChange={this.handleChange} />
                                <textarea className="input message-box" name="message" placeholder="Message" required value={message} onChange={this.handleChange} />
                                <input className="input submit" type="submit" value="Submit" />
                            </form>
                        </>
                    )}
                    <h2 className="contact-alternative ">Or feel free to drop me a line or email</h2>
                    <div className="contact-options">
                        <div className="contact-phone">
                            <img className="contact-icon" alt="phone icon" src="/images/phone.svg" />
                            <div className="contact-choice-box phone-box">
                                <h3 className="contact-choices">Phone:</h3>
                                <h4 className="contact-details">0416188951</h4>
                            </div>
                        </div>
                        <div className="contact-email">
                            <a className="email" href="mailto:silvia.vf.92@gmail.com"><img className="contact-icon email--icon" alt="email icon" src="/images/email.svg" /></a>
                            <div className="contact-choice-box">
                                <h3 className="contact-choices">Email:</h3>
                                <h4 className="contact-details">silvia.vf.92@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                    <img className="skyline_contact" alt="sydney skyline image" src="/images/Skyline_Contact.svg" />
                </div>
            </>
        );
    }
}

export default Contact
