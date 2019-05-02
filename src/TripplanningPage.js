import React, { Component } from 'react';
import {
    Grid,
    Paper
  } from '@material-ui/core';
import arrow from "./img/tripplanning/arrow.jpg";
import tripfinish from "./img/tripplanning/tripfinish.jpg";

class TripplanningPage extends Component{
    render(){
        return(
                <div>
                    <h1 style={{"textAlign": "center"}}>Trip Planning</h1>
                    <Grid container direction="column" justify="space-around" alignItems="center">
                        <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                            <Grid item sm={4} md={4} lg={4} className="testimonial-text">
                                <Paper>
                                    <h1>Trip Preparations</h1>
                                    <p>
                                    Detailed information about pre-departure preparations, baggage, clothes, arrival procedures, money exchange, making phone calls, internet, electrical adapters (including plugs and outlets), etc., will be given to the tour participants about one month before departure.
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item sm={2} md={2} lg={2}>
                                    <img src={arrow} className="arrow-size" />
                            </Grid>
                            <Grid item sm={4} md={4} lg={4} className="testimonial-text">
                                <Paper>
                                    <h1>Arrival in China</h1>
                                    <p>
                                        When your flight lands in China, a USCEC trip leader and the local English-speaking tour guide will greet you and pick you up at the airport - they will hold a noticeable sign that you cannot miss. After you have cleared the Customs, the tour guide will take you to the chartered bus and transfer you and your baggage to the hotel for you to rest.
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item sm={2} md={2} lg={2}>
                                    <img src={arrow} className="arrow-size" />
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                            <Grid item sm={2} md={2} lg={2}>
                                    <img src={arrow} className="arrow-size" />
                            </Grid>
                            <Grid item sm={4} md={4} lg={4} className="testimonial-text">
                                <Paper>
                                    <h1>Meals</h1>
                                    <p>
                                        All meals in China are included as specified in your tour itinerary. Breakfasts, with many familiar American-style dishes and Chinese specialties, are always served in the hotel where you stay. Lunches and dinners, which feature a variety of China's regional/local flavors, are usually in set menu in restaurants outside the hotel (in large cities such as Beijing or Shanghai, after leaving the hotel in the morning for the itinerary of the day, the group does not return to the hotel until in the evening). In the past, we also let the participants try one local meal on their own in some cities and they all loved this arrangement.
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item sm={2} md={2} lg={2}>
                                    <img src={arrow} className="arrow-size" />
                            </Grid>
                            <Grid item sm={4} md={4} lg={4} className="testimonial-text">
                                <Paper>
                                    <h1>Climate</h1>
                                    <p>
                                        The climate in the Chinese cites we visit is very similar to what we can expect in the New York City and many other parts of the U.S. year round. However, China is a huge country with varying climates. Tibet, for example, is in the southwest. With an altitude of 3650 meters (11,975 feet), Lhasa is one of the highest cities in the world. Still, the climate there is quite pleasant year round (during winter and early spring, it is sunny and pleasant during the day but chilly at night. However, there will be heat in the bus and in the hotel where we stay).
                                    </p>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                            <Grid item sm={4} md={4} lg={4} className="testimonial-text">
                                <Paper>
                                    <h1>Shopping</h1>
                                    <p>
                                        Besides those important must-see cultural and historical sites and beautiful sceneries, China is also known as a shopper's paradise, giving you a marvelous selection of arts and artifacts (such as cloisonné, pearls, jade, silk, embroidery, tea, rugs and more). Purchasing an item in the city where "it is famous for" can add meaning and value to your trip. Shopping is part of the China tour experience to be enjoyed. <br />We schedule shopping stops very carefully and recommend them for good reasons. Such stops are always brief and often happen during meal times. More information regarding this will be given to the tour participants prior to departure. Please be advised that a purchase is between buyer and seller; the trip operators can give advice but are not involved in, and not responsible for, purchases you make during your China tour.
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item sm={2} md={2} lg={2}>
                                    <img src={arrow} className="arrow-size" />
                            </Grid>
                            <Grid item sm={4} md={4} lg={4} className="testimonial-text">
                                <Paper>
                                    <h1>Jet Lag</h1>
                                    <p>
                                        When you travel to the other side of the globe, it is normal to have jet lag. Past participants did not have problems with jet lag after they arrived in China, as they started to be active with the trip itinerary the day after they landed.<br />
                                        However, we still recommend that travelers to China try to minimize effects of jet lag by doing the following: <br />
                                        <ol>
                                            <li>Rest well 3-4 days before departure</li>
                                            <li>Try your best to sleep on the flight</li>
                                            <li>Drink plenty of liquid (e.g., water and juice), before the trip, while on the flight and upon arrival, but try to stay away from alcoholic or caffeinated beverages</li>
                                        </ol>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item sm={2} md={2} lg={2} >
                                <img src={tripfinish} className="arrow-size" />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
        );
    }
}

export default TripplanningPage;