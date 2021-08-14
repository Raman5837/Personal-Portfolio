import React from 'react'
import styled from 'styled-components';
import emailjs from 'emailjs-com';



const StyleContactForm = styled.form`

    width: 100%;
    .form-group{
        width: 100%;
        margin-bottom: 2rem;
    }
    label{
        font-size: 1.8rem;
    }
    input, textarea{
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea{
        min-height: 250px;
        resize: vertical;
    }
    input[type="submit"]{
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 2rem;
        display: block;
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 1rem 4rem;
        cursor: pointer;
        margin: 0 auto;

    }
   

`



const ContactForm = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_8zl1mun", "template_gm0dbrc", e.target, "user_Ng64SyqgO9SFhzNmIKGH0")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <StyleContactForm onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">Your Name
                        <input type="text" placeholder="Your Name"
                            id="name" name="name" required />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email
                        <input type="email" placeholder="example@example.com"
                            id="email" name="email" required />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Type Your Message
                        <textarea type="text"
                            id="message" name="message" placeholder="Write Your Message Here..." required />
                    </label>
                </div>
                {/* <button type="submit"><input type="submit" value="Send" /></button> */}
                <input type="submit" value="Send Message" />
            </StyleContactForm>
        </div>
    )
}

export default ContactForm
