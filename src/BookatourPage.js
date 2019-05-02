import React, { Component } from 'react';
import {
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import bookatour from "./img/bookatour/bookatour.jpg";

class BookatourPage extends Component{
    render(){
        return(
            <div>
                <h1 align="center">Book a Tour</h1>
                <Grid container justify="center">
                    <Grid item sm={3} md={3} lg={3} container alignItems="center" justify="space-between">
                        <Grid item>
                        <img src={bookatour}/>
                        </Grid>
                    </Grid>
                    <Grid item sm={7} md={7} lg={7}> 
                        <p>
                            If China is in your plans, we urge you to apply and book the tour early.
                            <br />
                            <br />
                            If you have your own dates for your own group, contact us via email.  We will organize it for your group.
                            <br />
                            <br />
                            If you have any questions, please email us at <a className="contact-link" href='mailto:UsChinaEducation@yahoo.com'>UsChinaEducation@yahoo.com.</a>
                            <br />
                            <br />
                        </p>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >
                                    Steps for Booking
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <ol>
                                        <li>Send email to <a className="contact-link" href='mailto:UsChinaEducation@yahoo.com'>UsChinaEducation@yahoo.com.</a> for tour appplication and payment information. Tell us your departure.</li>
                                        <li>Complete the tour application, and mail it with payment, to the trip organizer.</li>
                                    </ol>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >
                                    Payments
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <ol>
                                        <li>Payments for the tour cost can be made in personal check, money order or bank cashier check ( payable to "USCEC").</li>
                                        <li>In some special cases, travel agencies we work with can take payments by a credit card, with a non-refundable courtesy fee. If you do prefer to make payment with a credit card, contact us by email.</li>
                                    </ol>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >
                                    Eligible Applicants for All China & Tibet Tours
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <ol>
                                        <li>
                                            All in education at different levels: administrators& supervisors, teachers, professors, staff; or college students
                                        </li>
                                        <li>
                                            Applicants from all other professions who have an interest in Chinese history & culture are also welcome
                                        </li>
                                        <li>
                                            Applicant's spouse or friends can join, at the same cost
                                        </li>
                                        <li>
                                            Retirees are also welcome to participate
                                        </li>
                                    </ol>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <p>
                            --We do not have an age limit; people over 70 can go on the trip, as long as they are in good health and do some walking.
                            <br />
                            <br />
                            --There is not much walking for the tours, and at places such as the Forbidden City in Beijing and Terra Cotta Warriors Museum in Xi'an --only these two places involve some walking, our local tour guide can help hire wheelchair service (for about $30) for those who cannot walk or need assistance with walking.
                        </p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default BookatourPage;