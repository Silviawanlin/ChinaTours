import React, { Component } from 'react';
import {
    Grid
  } from '@material-ui/core';

class VaccinationsPage extends Component{
    render(){
        return(
            <div>
                <h1 style={{ "textAlign": "center"}}>Vaccinations</h1>
                <Grid className="benefit-text">
                    <h1>Immunizations </h1>
                    <p>
                        We do not require any shots for travel to China. You should check the WHO (World Health Organization) website for information about vaccines and other health related issues for travel to China. This site has general information:
                    </p>
                    <br />
                    <a className="contact-link" href="http://www.who.int/ith/en/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;http://www.who.int/ith/en/</a>
                    <br />
                    <br />
                    <p>
                        This is the country list, with vaccines suggested for each country:
                    </p>
                    <br />
                    <a className="contact-link" href="http://whqlibdoc.who.int/publications/2005/9241580364_country_list.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;http://whqlibdoc.who.int/publications/2005/9241580364_country_list.pdf</a>
                    <br />
                    <br />
                    <p>If necessary, you should also consult your doctor.</p>
                </Grid>
            </div>
        );
    }
}

export default VaccinationsPage;