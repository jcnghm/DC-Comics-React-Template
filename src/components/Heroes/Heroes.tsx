import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo_image from '../../assets/images/dclogo3.png'
import { AuthCheck } from 'reactfire'; 
import { Suspense } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import batman from '../../assets/images/batman.jpg'
import green_arrow from '../../assets/images/Green-arrow.jpg'
import theFlash from '../../assets/images/flash.jpeg'
import background_image from '../../assets/images/background2.jpg'



interface Props{
    hero_title: string;
}

const useStyles = makeStyles({
    
    root: {
        padding: '0',
        margin: '0',
        backgroundColor: 'black'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'centered',
    },
    logo: {
        margin: '0, 0, 0, 0.45rem'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransformation: 'uppercase',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: 'black',
    },
    navigation: {
        display: 'flex',
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'white',
        backgroundColor: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        color: 'white',

    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        color: 'white',
        justifyContent: 'center',

    },
    hero_image: {
        borderRadius: '25px',
        padding: '15px',
        '&:hover': {
            filter: 'brightness(80%)',}
    },
})

export const Heroes = ( props:Props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* Nav Bar */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <img src= {logo_image}  alt="logo"/>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>DC Comics Universe React Template</a>
                        
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <Suspense fallback={'loading...'}>
                            <AuthCheck fallback={
                                <li>
                                    <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                                </li>
                                }>
                                <li>
                                    <Link to="/heroes" className={classes.nav_a}>Heroes</Link>
                                </li>
                            
                                <li>
                                    <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className={classes.nav_a}>Sign Out</Link>
                                </li>
                            </AuthCheck>
						</Suspense>
                    </ul>
                </div>
            </nav>

            {/* Hero list section */}

            <main className ={classes.main}>
            <h1>{ props.hero_title }</h1>
                <div className={classes.main_text}>
                    <div className={classes.hero_image}>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <h2>Batman</h2>
                                    <Image src={batman} className= {classes.hero_image} alt='batman'  />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={classes.hero_image}>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <h2>Green Arrow</h2>
                                    <Image src={green_arrow} className= {classes.hero_image} alt='batman'  />
                                </Col>
                                </Row>
                        </Container>
                    </div>
                    <div className={classes.hero_image}>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <h2>The Flash</h2>
                                    <Image src={theFlash} className= {classes.hero_image} alt='batman'  />
                                </Col>
                                </Row>
                        </Container>
                    </div>
                    
                </div>
            </main>

        </div>
    )
}