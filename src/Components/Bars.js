import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useSpring, useChain, useTrail, animated, useTransition, config } from 'react-spring';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const ExpereinceBar = (props) => {
    // props i need, 1. theme  2. name 3. experience in %
    // specs 531x28 total and 110x28 for name field, adjust accordingly 
    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    const show = props.render;
    const delay = props.delay;
    const barLength = matches ? (props.percentage) / 10 * 42 : (props.percentage) / 100 * (window.innerWidth * 0.45);
    const perc = props.percentage;

    const transitions = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0, minWidth: "0px" },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, delay));
            await next({ opacity: 1, minWidth: `${barLength}px` })
        },
        leave: { opacity: 0, minWidth: "0px" },
        config: { mass: 1, tension: 170, friction: 26 }
    })

    const transPerc = useTransition(show, null, {
        from: { position: 'absolute', },
        enter: { opacity: 1, },
        leave: { opacity: 0, },
    })

    return (
        <React.Fragment>
            {matches ?
                <div style={{ minWidth: "565px", height: "28px", display: "flex", marginBottom: "1rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                    <div style={{ minWidth: "110px", height: "28px", backgroundColor: "rgba(7, 33, 66, 0.9)", borderRadius: "2px" }}>
                        <Typography align="center" style={{ fontFamily: "FuturaM", letterSpacing: "1px", paddingTop: "3px", color: "white", fontWeight: "500" }} >
                            {props.name}
                        </Typography>
                    </div>
                    {transitions.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={{ ...props, backgroundColor: "rgba(7, 73, 115,0.7)", height: "28px", marginLeft: "110px", zIndex: "1", borderRadius: "2px" }}></animated.div>
                    )}
                    {transPerc.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={{ ...props, backgroundColor: "rgb(235,235,235)", height: "28px", marginLeft: "110px", minWidth: "451px", paddingRight: "8px", borderRadius: "2px" }}>
                            <Typography variant="body1" align="right" style={{ fontFamily: "FuturaM", paddingTop: "3px", fontWeight: "500", letterSpacing: "1px" }} >
                                {perc === 90 ? "Expert" : perc === 67.5 ? "Advanced" : perc === 45 ? "Intermediate" : "Novice"}
                            </Typography>
                        </animated.div>
                    )}
                </div>
                :
                <div style={{
                    minWidth: "85vw", height: "28px", display: "flex", marginBottom: "1rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    backgroundColor: "rgb(235,235,235)"
                }}>
                    <div style={{ minWidth: "110px", height: "28px", backgroundColor: "rgba(7, 33, 66, 0.9)", borderRadius: "2px" }}>
                        <Typography align="center" style={{ fontFamily: "FuturaM", letterSpacing: "1px", paddingTop: "3px", color: "white", fontWeight: "500" }} >
                            {props.name}
                        </Typography>
                    </div>
                    {transitions.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={{ ...props, backgroundColor: "rgba(7, 73, 115,0.7)", height: "28px", marginLeft: "110px", zIndex: "1", borderRadius: "2px" }}></animated.div>
                    )}
                    {transPerc.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={{ ...props, backgroundColor: "rgb(235,235,235)", height: "28px", marginLeft: "110px", minWidth: "calc(85vw - 110px)", paddingRight: "8px", borderRadius: "2px" }}>
                            <Typography variant="body1" align="right" style={{ fontFamily: "FuturaM", paddingTop: "3px", fontWeight: "500", letterSpacing: "1px" }} >
                                {perc === 90 ? "Expert" : perc === 67.5 ? "Advanced" : perc === 45 ? "Intermediate" : "Novice"}
                            </Typography>
                        </animated.div>
                    )}
                </div>
            }
        </React.Fragment>
    )
}

export default React.memo(ExpereinceBar)