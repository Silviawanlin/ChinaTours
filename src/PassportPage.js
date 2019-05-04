import React, { Component } from 'react';
import {
  Grid
} from '@material-ui/core';
import passport1 from "./img/passport/passport1.jpg";
import passport2 from "./img/passport/passport2.jpg";

class PassportPage extends Component{
    render(){
        return(
            <div>
                <h1 style={{ "textAlign": "center"} }>Passport & Visa</h1>
                <Grid container
                    direction="row" 
                    alignContent="center" 
                    justify="space-around">
                    <Grid item sm={4} md={4} lg={4} >
                            <img src={passport1} className="passportphoto-size"/>
                        </Grid>
                    <Grid item 
                        sm={7} md={7} lg={7} 
                        direction="row" 
                        alignContent="center" 
                        justify="space-around" 
                        className="benefit-text">
                            <h1 style={{ "textAlign": "center"}}> Passport</h1>
                            <p>All travelers need a passport that is valid until 6 months beyond the trip. Please check the expiration date of your passport against the dates of your trip. If it expires before that date (6 months beyond the dates of the tour you are planning to make), you should renew it now. If you do not have a passport, you should apply for one immediately. We recommend that you request rush service for the passport renewal or application.
                                <br />
                                If you are not a Chinese citizen, you will need to apply for the Chinese tourist visa to enter China. Information about this will be sent to the tour participants about two months before the trip dates or as soon as the international flights are confirmed. It normally takes one week (or one day with rush service) to get the visa. For travel to Tibet, a Tibet Entry Permit issued by the Tibet Tourism Bureau (TTB) is also needed. Our travel agencies in Chengdu and Lhasa will assist in securing this permit for you (after you have got your Chinese visa); the application fee for this Tibet Entry Permit is included in our program cost. Only with this permit will you be allowed to board the flight for Tibet.
                            </p>
                    </Grid>
                </Grid>
                <Grid container 
                    direction="row" 
                    alignContent="center"
                    justify="space-around" >
                        <Grid item sm={4} md={4} lg={4}>
                            <img src={passport2} />
                        </Grid>
                        <Grid item 
                            sm={7} md={7} lg={7} 
                            direction="row" 
                            alignContent="center" 
                            justify="space-around" 
                            className="benefit-text">
                                <h1 style={{ "textAlign": "center"}}>International Travel Insurance</h1>
                                <p>
                                    If your insurance does not include benefits for travel abroad, you will need to purchase international travel insurance. We will provide information about this insurance after the international airline tickets are finalized.
                                </p>
                        </Grid>
                </Grid>
            </div>
        );
    }
}

export default PassportPage;