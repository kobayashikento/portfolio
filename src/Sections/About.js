import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { useSpring, animated } from 'react-spring'

//Photo by AltumCode on Unsplash
import aboutPic from '../Assets/pictures/about_pic.png';

import * as easings from 'd3-ease';

const About = (props) => {

    const springFirst = useSpring({
        to: { transform: props.render ? `translateX(1%)` : `translateX(-150%)` },
        from: { transform: `translateX(-150%)`, zIndex: 5 },
        config: { duration: 800, easing: easings.easeCubicOut },
        delay: 300
    })

    const springLine = useSpring({
        to: { transform: props.render ? `translateX(0rem)` : `translateX(-6.5rem)` },
        from: { width: "5.5rem", transform: `translateX(-6.5rem)`, zIndex: 5 },
        delay: 300
    })

    const springLineMove = useSpring({
        to: { transform: props.render ? `translateX(0rem)` : `translateX(-9.5rem)` },
        from: { width: "5.5rem", transform: `translateX(-9.5rem)`, zIndex: 5 },
        delay: 500
    })

    const springSecond = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-110%)` },
        from: { transform: `translateX(-110%)`, zIndex: 5 },
        delay: 600
    })

    const videoSpring = useSpring({
        to: { transform: props.render ? "scale(1) translate(0%, -50%)" : "scale(0.7) translate(10% ,-50%)", opacity: props.render ? 1 : 0 },
        from: { right: "8%", top: "50%", transform: "scale(0.6) translate(10% ,-50%)", transformOrigin: "top center 20px", opacity: 0 },
        config: { duration: 1200, easing: easings.easeQuadOut },
        delay: 600
    })

    const videoOverlay = useSpring({
        to: { width: props.render ? "0%" : "100%" },
        from: { position: "absolute", height: "100%", width: "100%", background: "linear-gradient(90deg, #ff4d5a 10%, #072142 20%)", zIndex: 2, right: "0" },
        config: { duration: 1000, easing: easings.easeQuadOut },
        delay: 700
    })

    const springThird = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)`, opacity: props.render ? 1 : 0 },
        from: { right: "-6.6%", zIndex: 5, bottom: "8%", position: "absolute", transform: `translateX(-100%)`, opacity: 0 },
        delay: 800
    })

    return (
        <div style={{ display: "flex", height: "100vh", position: "relative", width: "100vw" }}>
            <animated.div style={{ overflow: "hidden", display: "flex", height: "100%", flexDirection: "column", marginLeft: "12.2vmax", justifyContent: "center", alignItems: "flex-start" }}>
                <animated.div style={springFirst}>
                    <Typography style={{
                        color: "white", fontFamily: "FuturaM", fontSize: "5.2rem",
                        letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.3)", fontWeight: "bold"
                    }}>
                        About
                </Typography>
                </animated.div>
                <div style={{ overflow: "hidden", marginTop: "1%" }}>
                    <animated.div style={springLine}>
                        <Divider style={{ height: "5px", background: "#ff4d5a", borderRadius: "4px", marginBottom: "0.5rem", marginTop: "0.7rem" }} />
                    </animated.div>
                    <animated.div style={{ ...springLineMove, marginLeft: "3.3rem" }}>
                        <Divider style={{ height: "5px", background: "#ff4d5a", borderRadius: "4px", marginBottom: "1.2rem", marginTop: "0.7rem" }} />
                    </animated.div>
                </div>
                <animated.div style={springSecond}>
                    <Typography style={{
                        width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "1.5rem", letterSpacing: "0.2rem",
                        marginTop: "4px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                    }}>
                        Front-End Developer
                    </Typography>
                </animated.div>
                <animated.div style={springSecond}>
                    <Typography style={{
                        width: "max-content", color: "rgba(255,255,255,0.7)", fontFamily: "'Rajdhani', sans-serif", fontSize: "16px",
                        letterSpacing: "1px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                    }}>
                        U of T Grad: Mathematics and Statistics
                    </Typography>
                </animated.div>
                <animated.div style={springSecond}>
                    <button class="explore" style={{ fontFamily: "FuturaB", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>More<span class="icon-right"></span><span class="icon-right after"></span></button>
                </animated.div>
            </animated.div>
            <animated.div style={{ ...videoSpring, height: "70%", width: "54%", position: "absolute", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                <animated.div style={videoOverlay} />
                <img src={aboutPic} style={{height: "100%", width: "100%", borderRadius: "2px"}} /> 
                <animated.div style={springThird}>
                    <Typography style={{
                        width: "max-content", color: "white", fontFamily: "'Abril Fatface', cursive", fontSize: "7rem", textShadow: "0 10px 30px rgb(2 11 22 / 50%)"
                    }}>
                        02
                    </Typography>
                </animated.div>
            </animated.div>
        </div >
    )
}

export default React.memo(About);