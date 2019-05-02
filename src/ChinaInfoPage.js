import React, { Component } from 'react';
import {
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Button
  } from '@material-ui/core';
  import history from "./img/chinainfo/history.jpg";
  import ChinaGeography from "./img/chinainfo/ChinaGeography.jpg";
  import education from "./img/chinainfo/education.jpg";
  import art from "./img/chinainfo/art.jpg";
  import political from "./img/chinainfo/political.jpg";
  import religion from "./img/chinainfo/religion.jpg";
  import ethnic from "./img/chinainfo/ethnic.jpg";
  import zhongguo from "./img/chinainfo/zhongguo.jpg";
  import tibet from "./img/chinainfo/tibet.jpg";

class ChinaInfoPage extends Component{
    render(){
        return(
            <div>
                <h1 style={{"textAlign": "center"}}>China Infomations</h1>
                <Grid container direction="column" justify="space-around" alignItems="center">
                        <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                            <Grid item sm={3} md={3} lg={3} spacing="1">
                                <Card>
                                    <CardActions>
                                        <Button href="http://en.wikipedia.org/wiki/History_of_China" size="small" className="info-link" >
                                            History of China
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={history}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={3} md={3} lg={3} spacing="1">
                                <Card>
                                    <CardActions>
                                        <Button href="http://en.wikipedia.org/wiki/Geography_of_China" size="small" className="info-link" >
                                            China Geography
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={ChinaGeography}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={3} md={3} lg={3} className="testimonial-text" spacing="1">
                            <Card>
                                    <CardActions>
                                        <Button href="http://en.wikipedia.org/wiki/Education_in_the_People's_Republic_of_China" size="small" className="info-link" >
                                            Chinese Education
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={education}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                            <Grid item sm={3} md={3} lg={3} spacing="1">
                                <Card>
                                    <CardActions>
                                        <Button href="http://en.wikipedia.org/wiki/Religion_in_China" size="small" className="info-link" >
                                            Religion in China
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={religion}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={3} md={3} lg={3} spacing="1">
                                <Card>
                                    <CardActions>
                                        <Button href="http://en.wikipedia.org/wiki/Chinese_art" size="small" className="info-link" >
                                        Chinese Art
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={art}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={3} md={3} lg={3} className="testimonial-text" spacing="1">
                            <Card>
                                    <CardActions>
                                        <Button href=" http://en.wikipedia.org/wiki/Politics_of_the_People's_Republic_of_China" size="small" className="info-link" >
                                            Chinese Political System
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={political}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                            <Grid item sm={3} md={3} lg={3} spacing="1">
                                <Card>
                                <CardActions>
                                        <Button href="http://en.wikipedia.org/wiki/Tibet" size="small" className="info-link" >
                                            Tibet
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={tibet}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item sm={3} md={3} lg={3} spacing="1">
                                <Card>
                                    <CardActions>
                                        <Button href="http://en.wikipedia.org/wiki/List_of_ethnic_groups_in_China" size="small" className="info-link" >
                                            Ethnic Diversity in China
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={ethnic}
                                            title="Contemplative Reptile" />
                                    </CardActionArea> 
                                </Card>
                            </Grid>
                            <Grid item sm={3} md={3} lg={3} className="testimonial-text" spacing="1">
                            <Card>
                                    <CardActions>
                                        <Button href="https://en.wikipedia.org/wiki/China" size="small" className="info-link" >
                                            Too more infomation about china
                                        </Button>
                                    </CardActions>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={zhongguo}
                                            title="Contemplative Reptile" />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

export default ChinaInfoPage;