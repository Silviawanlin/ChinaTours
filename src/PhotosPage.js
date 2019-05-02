import React, { Component } from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Button,
    Grid
} from '@material-ui/core';
import bingmy from "./img/citygrid/bingmy.jpg";
import dayanta from "./img/imagecarousel/dayanta.jpg";
import peace from "./img/photo/peace.jpg";
import suzhou from "./img/photo/suzhou.jpg";
import gongfu from "./img/photo/gongfu.jpg";

class PhotosPage extends Component{
    render(){
        return(
            <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                    <Grid item sm={5} md={5} lg={5} className="photos-text">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={bingmy}
                                        title="Contemplative Reptile" />
                                </CardActionArea>
                                <CardActions>
                                    <Button href="https://www.facebook.com/" size="small" className="contact-link">
                                    Share
                                    </Button>
                                    <Button href="https://july2009chinapics.shutterfly.com/619?size=All&startIndex=0?size=All&startIndex=0" size="small" className="contact-link">
                                    See More
                                    </Button>
                                </CardActions>
                            </Card>
                    </Grid>
                    <Grid item sm={5} md={5} lg={5} className="photos-text">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={dayanta}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button href="https://www.facebook.com/" size="small" className="contact-link">
                                    Share
                                    </Button>
                                    <Button href="http://www.flickr.com/photos/exploringchina" size="small" className="contact-link">
                                    See More
                                    </Button>
                                </CardActions>
                            </Card>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={12} lg={12} container direction="row" alignItems="center" justify="space-around">
                    <Grid item sm={4} md={4} lg={4} className="photos-text">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={gongfu}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button href="https://www.facebook.com/" size="small" className="contact-link">
                                    Share
                                    </Button>
                                    <Button href="http://community.webshots.com/user/anvill1228" size="small" className="contact-link">
                                    See More
                                    </Button>
                                </CardActions>
                            </Card>
                    </Grid>
                    <Grid item sm={3} md={3} lg={3} className="photos-text">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={peace}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button href="https://www.facebook.com/" size="small" className="contact-link">
                                    Share
                                    </Button>
                                    <Button href="http://www.kodakgallery.com/I.jsp?c=pfob4de.7lh8ksvy&x=0&y=-t2q2qu" size="small" className="contact-link">
                                    See More
                                    </Button>
                                </CardActions>
                                </Card>
                            </Grid>
                            <Grid item sm={4} md={4} lg={4} className="photos-text">
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={suzhou}
                                            title="Contemplative Reptile"
                                        />
                                    </CardActionArea>
                                    <CardActions>
                                        <Button href="https://www.facebook.com/" size="small" className="contact-link">
                                        Share
                                        </Button>
                                        <Button href="http://gallery.me.com/dmatthewbi#100061" size="small" className="contact-link">
                                        See More
                                        </Button>
                                    </CardActions>
                                </Card>
                        </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default PhotosPage;