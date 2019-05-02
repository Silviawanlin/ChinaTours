import React, { Component } from 'react';

class ContactPage extends Component{
    render(){
        return(
            <div>
                <h1 align="center">Contact Us</h1>
                <p className="contact-text">
                    We rely on email as our primary mode of communication. If you have any questions or recommendations, please first email us at:<br />
                    <br /><a className="contact-link" href='mailto:UsChinaEducation@yahoo.com'>UsChinaEducation@yahoo.com.</a><br /><br />We normally can respond to you very quickly.
                    <br />
                    <br />However, if you have questions that need to be discussed on the phone, please kindly include your telephone numbers and the times for us to call you back.
                    <br />
                    <br />Thanks for visiting our website. We look forward to hearing from you.
                </p>
            </div>
        );
    }
}

export default ContactPage;