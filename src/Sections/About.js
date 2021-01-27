import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useSpring, animated } from 'react-spring'

const About = (props) => {

    const springFirst = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)` },
        from: { transform: `translateX(-100%)` },
    })

    const springSecond = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)` },
        from: { transform: `translateX(-100%)` },
        delay: 400
    })

    return (
        <React.Fragment>
            <animated.div style={{ overflow: "hidden", display: "flex", height: "100%", flexDirection: "column", marginLeft: "12.2vmax", justifyContent: "center", alignItems: "flex-start" }}>
                <animated.div style={springFirst}>
                    <Typography style={{ color: "white", fontFamily: "FuturaM", fontSize: "5.5rem", letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        About Me
                </Typography>
                </animated.div>
                <animated.div style={springSecond}>
                    <Typography style={{ width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "1.5rem", letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        I find beauty in algorithms,
                    </Typography>
                </animated.div>
                <animated.div style={springSecond}>
                    <Typography style={{ width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "1.5rem", letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        design, and simplicity.
                    </Typography>
                </animated.div>
            </animated.div>
        </React.Fragment>
    )
}

export default React.memo(About);