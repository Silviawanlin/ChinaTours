import React, { Component } from 'react';
import {
    Grid
} from "@material-ui/core";

class ChinaTripPlansPage extends Component{
    render(){
        return(
            <div>
                <h1 align="center">China Trip Plans</h1>
                <Grid container direction="column" justify="space-around" alignItems="center" className="study-text">
                    <h2>2019 China Tours</h2>
                    <h3>China 3-Best-Cities Tour: Beijing-Xi'an-Shanghai</h3>
                    <ol>
                        <li>Beijing -- China’s national capital, in North China.</li>  
                        <li>Xi’an -- capital of 10 Chinese dynasties, starting point of the ancient over-land Silk Road, in West China.</li>
                        <li>Shanghai -- China’s leading metropolis & financial center, in Southeast China.</li>
                        <a href="http://uschina-education.org/images/BXS.jpg" className="contact-link">Click here to view the route map </a>
                    </ol>
                    <h3>Distinguished Features:</h3>
                    <ol>
                        <li>Escorted, int'l flights, meals and admissions inclusive tour packages</li>
                        <li>Visit school, college, business, government agency, NGOs</li>
                        <li>Luxury hotel accommodations in all cities</li>
                        <li>Visits to important historic and cultural site in 3 best Chinese cities</li>
                    </ol>
                    <h2>Project Time</h2>
                    <Grid item sm={12} md={12} lg={12} container direction="clounm" alignItems="center" justify="space-around">
                        <h3>Spring Time</h3>
                            <Grid item>
                            <p>Date: March 16-24, 2019</p>
                            <p>Cost: $2,798 </p>
                            <p>Application Deadline: Dec 16, 2018</p>
                            </Grid>
                            <Grid item>
                            <p>Date: April  20-28, 2019</p>
                            <p>Cost: $2,798</p>
                            <p>Application Deadline: Jan 20, 2019</p>
                            </Grid>
                    </Grid>
                    <Grid item sm={12} md={12} lg={12} container direction="clounm" alignItems="center" justify="space-around">
                        <h3>Summer Time</h3>
                        <Grid>
                            <p>Date: May 21-29, 2019</p>
                            <p>Cost:  $3,298 </p>
                            <p>Application Deadline: Feb 20, 2019</p>
                        </Grid>
                        <Grid>
                            <p>Date: July 1-9, 2019</p>
                            <p>Cost: $3,398</p>
                            <p>Application Deadline: March 30, 2019</p>
                        </Grid>
                    </Grid>
                    <p> Click To View details-->
                    <a href="http://uschina-education.org/documents/China3best-2019_001.pdf" className="contact-link"> Tour Itinerary </a></p>  
                    <p>Any other dates for your group. Contact us via email. Discount prices available for tour organizers.</p>
                    <p>To book tour, e-mail to: <a className="contact-link" href='mailto:UsChinaEducation@yahoo.com'>UsChinaEducation@yahoo.com.</a></p>
                    <p>If China is in your plans, please book your tour early.</p>
                    <h3>If you want to know more informations about future project, please go to "<a className="contact-link" href='/contact'>Contact Us</a>" to contact with us.</h3>
                </Grid>
            </div>
        );
    }
}

export default ChinaTripPlansPage;