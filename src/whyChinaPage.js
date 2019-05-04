import React, { Component } from 'react';
import {
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import modernchina from "./img/whychina/modernchina.jpg";

  class whyChinaPage extends Component{
      render(){
          return(
            <div>
                <h1 style={{"textAlign": "center"}}>Why China</h1>
                <Grid container justify-content="center">
                    <Grid item sm={6} md={6} lg={6} container alignContent="center" justify="space-around">
                        <Grid item>
                        <img src={modernchina}/>
                        </Grid>
                    </Grid>
                    <Grid item sm={5} md={5} lg={5}> 
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the world's longest continuous civilization, China is a most appealing region to visit. The wealth of its culture, the richness of its history, the hospitality of the people, and the wide range of beautiful landscapes make China one of the most rewarding countries to explore. And modern China is even more fascinating: the traditional way of life now exists side by side with a newly emerging, Western-influenced culture. It is this rejuvenated, multifaceted China that you can look forward to discovering on our tour.
                        </p>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >Jonathan Spence, History Professor at Yale University: The Search for Modern China</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p>
                                        "For a long time China was a completely unknown quantity to those living in the West, and even today seems set apart by differences of language, custom, and attitude. Now that China has over 1 billion people within its borders, it suffers internal pressures that the rest of us can only guess at; and the swings of its political life, the switches  in its cultural moods, the lurches in its economy, the fact that its stated hostility to foreign influences is so often accompanied by the flashes of a welcoming smile, 	all combine to keep us in a state of bewilderment as to China's real nature." 
                                    </p>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >The World Bank, China 2020: Development and Challenges in the New Century</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p>
                                        “China has telescoped into one generation what other countries took centuries to achieve. No country (let alone one of continental proportions) has tried to accomplish so much in such a short time. China’s unique attempt to complete two transitions at once –from a command to a market economy and from a rural to an urban society—is without historical precedent.”
                                    </p>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >Guy McLeod, President, Airbus China    </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p>
                                        “Now here in the world is there a market like this—nowhere. To me, the 21st century will be the Chinese century. China will change the economic balance of the world.”
                                    </p>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >Thom Shanker, New York Times, December 10, 2012</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p>
                                        “U.S. Study Sees China as No. 1 Economy by 2030"
                                    </p>
                                    <a href="/NYT--China_Economy_by_2030.doc" download className="contact-link">to read the article</a>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography >John Howkins, Financial Times: December 15, 2013</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p>
                                        "Take Chinese Creativity Seriously or Lose Out"
                                    </p>
                                    <a href='./FT-ChineseCreaticity.doc' download className="contact-link">to read the article</a>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>
            </div>
          );
      }
  }

  export default whyChinaPage;