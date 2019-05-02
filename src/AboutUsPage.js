import React, { Component } from 'react';
import {
  Grid
} from '@material-ui/core';
import ab1 from "./img/aboutus/ab1.jpg";
import ab2 from "./img/aboutus/ab2.jpg";

class AboutUsPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ "textAlign": "center"} }>About Us</h1>
        <Grid container justify="flex-start">
          <Grid item sm={4} md={4} lg={4} container direction="column" alignContent="center" justify="space-around">
            <Grid item>
              <img src={ab1}/>
            </Grid>
            <Grid item>
              <img src={ab2} />
            </Grid>
          </Grid>
          <Grid item sm={7} md={7} lg={7}>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The chief members of USCEC are a group of Chinese-American educators and professionals who have lived and taught at different levels first in China and then in the U.S. for many years, and thus are familiar with culture and education in both countries.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition, many educators in the U.S. and China also serve as council advisors.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although our main office is in northern New Jersey, the service we provide is not limited to the Greater New York area. Colleagues from different states in the U.S. and from Canada have benefited from our programs.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have good working relationships with China's Ministry of Education, the Confucius Institute, educational departments, schools and universities in all major Chinese provinces and cities, China International Travel Service (CITS), and the Consulate General of the P. R. China in New York.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have not found it necessary to apply for the BBB accreditation, for two reasons: First, not all good businesses are BBB-accredited. Second, we have been providing high-quality service since 2002 of promoting cultural and educational exchanges between the two countries, and have built our reputation with past participants of our programs. We are confident in what we do and have trust from our clients.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifically, we offer the following service and programs to educators, students, scholars and other professionals:
              <ol>
                <li>Educational tours from the U.S. to China, and from China to the U.S.</li>
                <li>Study abroad programs and summer camps in China</li>
                <li>Teacher exchange programs</li>
              </ol>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutUsPage;