import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { useSpring, animated } from 'react-spring'

import * as easings from 'd3-ease';

const MobileContent = (props) => {

    const [initialRender, setInitialRender] = React.useState(true);

    React.useEffect(() => {
        if (props.render) {
            setTimeout(() => {
                setInitialRender(false);
            }, 100)
        } else if (!props.render) {
            setInitialRender(true);
        }
    }, [props.render]);

    const springFirst = useSpring({
        to: { transform: props.render ? `translateX(1%)` : `translateX(-150%)` },
        from: { transform: `translateX(-150%)`, zIndex: 5 },
        config: { duration: 800, easing: easings.easeCubicOut },
        delay: 300
    });

    const springLine = useSpring({
        to: { transform: props.render ? `translateX(0rem)` : `translateX(-6.5rem)` },
        from: { width: "5.5rem", transform: `translateX(-6.5rem)`, zIndex: 5 },
        delay: 300
    });

    const springLineMove = useSpring({
        to: { transform: props.render ? `translateX(0rem)` : `translateX(-9.5rem)` },
        from: { width: "5.5rem", transform: `translateX(-9.5rem)`, zIndex: 5 },
        delay: 500
    });

    const springSecond = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-110%)` },
        from: { transform: `translateX(-110%)`, zIndex: 5 },
        delay: 600
    });

    const videoSpringMobile = useSpring({
        to: {
            transform: props.render ? "scale(1) translate(0%, 0%)" : "scale(0.6) translate(10% ,0%)", opacity: props.render ? 1 : 0,
            width: props.contentModalOpen ? "66%" : "74%"
        },
        from: { transform: "scale(0.6) translate(10% ,0%)", transformOrigin: "top center 20px", opacity: 0, width: "54%", zIndex: -1, marginLeft: "9%" },
        config: { duration: props.contentModalOpen ? 600 : 1500, easing: easings.easePolyOut.exponent(2.04) },
        delay: initialRender ? 600 : 0
    });

    const videoOverlay = useSpring({
        to: { width: props.render ? "0%" : "100%" },
        from: { height: "100%", width: "100%", background: "linear-gradient(90deg, #ff4d5a 10%, #072142 20%)", zIndex: 2, right: "0" },
        config: { duration: 1000, easing: easings.easeQuadOut },
        delay: 400
    });

    const springThird = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)`, opacity: props.render ? 1 : 0, right: props.contentModalOpen ? "3%" : "-6.6%" },
        from: { right: "-6.6%", zIndex: 5, bottom: "8%", position: "absolute", transform: `translateX(-100%)`, opacity: 0 },
        delay: props.modalOpen ? 0 : 600
    });

    return (
        <animated.div style={{ overflow: "hidden", display: "flex", flexDirection: "column", marginLeft: "15%", justifyContent: "space-around", height: "70%", alignItems: "flex-start" }}>
            <div>
                <animated.div style={springFirst}>
                    <Typography style={{
                        color: "white", fontFamily: "FuturaM", fontSize: props.content.title === 'Get In Touch' ? "calc(32px + (44 - 32) * ((100vw - 300px) / (1200 - 300)))" :  "calc(38px + (50 - 38) * ((100vw - 300px) / (1200 - 300)))",
                        letterSpacing: "0.2rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.3)", fontWeight: "bold"
                    }}>
                        {props.content.title}
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
            </div>
            <animated.div style={{ ...videoSpringMobile, boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                <animated.div style={{ ...videoOverlay, position: "absolute" }} />
                <img src={props.pic} style={{ height: "auto", width: "100%", borderRadius: "2px" }} />
                <animated.div style={springThird}>
                    <Typography style={{
                        width: "max-content", color: "white", fontFamily: "'Abril Fatface', cursive", fontSize: "calc(38px + (50 - 38) * ((100vw - 300px) / (1200 - 300)))", textShadow: "0 10px 30px rgb(2 11 22 / 50%)"
                    }}>
                        {props.content.number}
                    </Typography>
                </animated.div>
            </animated.div>
            <div>
                <animated.div style={springSecond}>
                    <Typography style={{
                        width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "calc(18px + (32 - 18) * ((100vw - 300px) / (1200 - 300)))", letterSpacing: "0.2rem",
                        marginTop: "4px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                    }}>
                        {props.content.subtitle}
                    </Typography>
                </animated.div>
                <animated.div style={springSecond}>
                    <Typography style={{
                        width: "max-content", color: "rgba(255,255,255,0.7)", fontFamily: "FuturaM", fontSize: "calc(13px + (22 - 13) * ((100vw - 300px) / (1200 - 300)))",
                        letterSpacing: "1.5px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                    }}>
                        {props.content.description}
                    </Typography>
                </animated.div>
                <animated.div style={{...springSecond, display: props.content.title === 'Get In Touch' ? "none" : ""}}>
                    <button onClick={() => props.handleClick()} className="explore"
                        style={{ fontFamily: "FuturaB", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", marginTop: "8%" }}>More
        <span className="icon-right-more"></span><span className="icon-right-more after"></span></button>
                </animated.div>
            </div>
        </animated.div>
    )
}

export default MobileContent;