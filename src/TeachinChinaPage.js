import React, { Component } from 'react';
import {
    Grid
} from "@material-ui/core";
import chinaeducation from "./img/teachingchina/chinaeducation.jpg";

class TeachinChinaPage extends Component{
    render(){
        return(
            <div>
                <h1 align="center">Teaching in China</h1>
                <Grid container justify="flex-start">
                    <Grid item sm={4} md={4} lg={4} container direction="column" alignContent="center" justify="space-around">
                        <Grid item>
                        <img src={chinaeducation}/>
                        </Grid>
                    </Grid>
                    <Grid item sm={7} md={7} lg={7} className="study-text" >
                    <p>
                        If you wish to teach English in China, please send a letter of interest, along with a resume (one-page limit), via e-mail to: 
                        <a className="contact-link" href='mailto:UsChinaEducation@yahoo.com'>UsChinaEducation@yahoo.com.</a>
                    </p>
                    <p>
                        The host in China asks that you include a good scan copy of your passport (for visa pre-approval purpose).
                    </p>
                    <p>
                        To qualify for the work permit to be approved by the Foreign Experts Bureau in China, the applicant needs to have a bachelor's degree (in any field) and two years of post-graduation experience (in any area, althou teaching experience is preferred).
                    </p>
                    <p>
                        Send a message of interest with resume to us via email at
                        <a className="contact-link" href='mailto:UsChinaEducation@yahoo.com'>UsChinaEducation@yahoo.com.</a>
                    </p>
                    <p>
                        Two letters of reference are also required.
                    </p>
                    <p>
                        Retirees from any profession are also welcome to apply.Teaching experience is not required. Native English proficiency is mandatory.
                    </p>
                    <p>
                        The following links give you an idea of what a typical teaching position is like; it is in Baoying (part of the City of  Yangzhou, which is not far from Shanghai):
                        <a className="contact-link" href="http://uschina-education.org/documents/Baoying-position.pdf">Position Description; </a>
                        <a className="contact-link" href="http://uschina-education.org/documents/Baoying-Info.pdf">Info about Baoying;</a> 
                        <a className="contact-link" href="http://uschina-education.org/documents/Baoying-Housing.pdf">Living Facilitiies</a>
                    </p>
                    <p>If a contract is offered following a telephone interview, the applicant will need to provide the following:
                        <ol>
                            <li>a valid passport that does not expire within the next two years</li>
                            <li>photocopy of the bachelor's degree (and other degrees, if applicable)</li>
                        </ol>
                    </p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default TeachinChinaPage;