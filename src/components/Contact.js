import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Contact = () => {
    
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_AnP9gHVnbz5gT83JMF5iS";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            userID
            )
            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Sent super successfully!");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div className="contact">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please contact me and I will get back to you as soon as possible!</p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 30,
                                        message: "Please enter a name with fewer than 20 characters"
                                    }
                                })
                            }
                            />
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required: "Please enter your phone number",
                              
                                })
                            }
                            />
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <input
                            type="text"
                            className="form-control"
                            placeholder="E-mail"
                            name="email"
                            ref={
                                register({
                                    required: "Please provide your email address",
                                    pattern: {
                                        value: /^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email format" 
                                    }
                                })
                            }
                            />
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            ref={
                                register({
                                    required: "Oop! Please enter a subject matter",
                                })
                            }
                            />
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION INPUT */}
                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="Message..."
                            name="message"
                            ref={
                                register({
                                    required: "Don't forget to gimme some context !",
                                })
                            }
                            ></textarea>
                            <span className="error-message">
                                {errors.message && errors.message.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">Contact Steph</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
