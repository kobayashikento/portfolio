import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Vivus from 'vivus';

import { useSpring, animated } from 'react-spring'

import browser_coding_svg from '../Assets/resources/browser_coding.svg';
import coding_curly_svg from '../Assets/resources/coding_curly.svg';
import coding_curly_blink_svg from '../Assets/resources/coding_curly_blink.svg';
import application_dev_code_svg from '../Assets/resources/application_dev_code.svg';
import application_development from '../Assets/resources/application_dev.svg';

import '../Assets/styles/landingStyle.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 130}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 20}px,${y / 6 - 90}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5 + 10}px,${y / 3.5 - 10}px,0)`
const trans5 = (x, y) => `translate3d(${x / 2.5 - 10}px,${y / 2.5 + 10}px,0)`
const trans6 = (x, y) => `translate3d(${x / 8 + 10}px,${y / 8 - 10}px,0)`
const trans7 = (x, y) => `translate3d(${x / 6 - 10}px,${y / 6 - 10}px,0)`

const Landing = (props) => {

    let browser_coding_ref = React.useRef(null);
    let coding_curly_ref = React.useRef(null);
    let coding_curly_blink_ref = React.useRef(null);
    let application_dev_ref = React.useRef(null);
    let application_dev_code_ref = React.useRef(null);

    const [prop, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const [startBlink, setBlink] = React.useState(false);

    const [browserVivus, setBrowswerVivus] = React.useState();
    const [coderCurlyVivus, setCoderCurlyVivus] = React.useState();
    const [coderCurlyBlinkVivus, setCoderCurlyBlinkVivus] = React.useState();
    const [appliactionDev, setAppliactionDev] = React.useState();
    const [appliactionDevCode, setAppliactionDevCode] = React.useState();

    React.useEffect(() => {
        if (props.render) {
            setBrowswerVivus(new Vivus(browser_coding_ref.current, { file: browser_coding_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
            setCoderCurlyVivus(new Vivus(coding_curly_ref.current, { file: coding_curly_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
            setCoderCurlyBlinkVivus(new Vivus(coding_curly_blink_ref.current, { file: coding_curly_blink_svg, type: `delayed`, start: `manual`, delay: 50, animTimingFunction: Vivus.EASE_IN }, () => { setBlink(true) }));
            setAppliactionDev(new Vivus(application_dev_ref.current, { file: application_development, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
            setAppliactionDevCode(new Vivus(application_dev_code_ref.current, { file: application_dev_code_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        }
    }, []);

    const handlePlay = () => {
        if (props.svgRender && browserVivus !== undefined) {
            browserVivus.play(1.5);
            coderCurlyVivus.play();
            coderCurlyBlinkVivus.play();
            appliactionDev.play(1.5);
            appliactionDevCode.play();
        }
    }

    const springFirst = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)` },
        from: { transform: `translateX(-100%)` },
        duration: 400,
        onRest: () => handlePlay()
    })

    const springLine = useSpring({
        to: { width: props.render ? `5.5rem` : `0rem`, transform: props.render ? `translateX(0rem)` : `translateX(-6.5rem)`  },
        from: { width: "0rem",  transform: `translateX(-6.5rem)` },
        delay: 100
    })

    const springLineMove = useSpring({
        to: { transform: props.render ? `translateX(3.5rem)` : `translateX(-6.5rem)` },
        from: { width: "5.5rem", transform: `translateX(-6.5rem)` },
        delay: 300
    })

    const springSecond = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)` },
        from: { transform: `translateX(-100%)` },
        duration: 400,
        delay: 500
    })

    React.useEffect(() => {
        if (!props.svgRender && browserVivus !== undefined) {
            coderCurlyVivus.play(-2);
            coderCurlyBlinkVivus.play(-2);
            browserVivus.play(-2);
            appliactionDev.play(-2);
            appliactionDevCode.play(-2);
        }
    }, [props.svgRender])



    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw" }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={{ overflow: "hidden", display: "flex", height: "100%", flexDirection: "column", marginLeft: "12.2vmax", justifyContent: "center", alignItems: "flex-start" }}>
                <animated.div style={springFirst}>
                    <Typography style={{ color: "white", fontFamily: "FuturaM", fontSize: "5.5rem", letterSpacing: "0.7rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        KENTO
                    </Typography>
                </animated.div>
                <animated.div style={springFirst}>
                    <Typography style={{ color: "white", fontFamily: "FuturaM", fontSize: "5.5rem", letterSpacing: "0.7rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        KOBAYASHI
                    </Typography>
                </animated.div>
                <animated.div style={springLine}>
                    <Divider style={{ height: "5px", background: "#ff4d5a", borderRadius: "4px", marginBottom: "0.5rem", marginTop: "0.7rem" }} />
                </animated.div>
                <animated.div style={springLineMove}>
                    <Divider style={{ height: "5px", background: "#ff4d5a", borderRadius: "4px", marginBottom: "1.2rem", marginTop: "0.7rem" }} />
                </animated.div>
                <animated.div style={springSecond}>
                    <Typography style={{ width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "1.5rem", letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        web developer /
                    </Typography>
                </animated.div>
                <animated.div style={springSecond}>
                    <Typography style={{ color: "white", fontFamily: "FuturaB", fontSize: "1.5rem", letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        designer
                    </Typography>
                </animated.div>
            </animated.div>
            <div style={{ display: "flex", width: "56vw", height: "100vh", justifyContent: "center", alignItems: "center", position: "absolute", right: "0px" }}>
                <div style={{ width: "50%", height: "0%", transform: "translateY(100px)" }}>
                    <animated.div style={{ transform: prop.xy.interpolate(trans2), position: "absolute", filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4))" }} ref={browser_coding_ref}>
                    </animated.div>
                    <animated.div style={{ transform: prop.xy.interpolate(trans3), position: "absolute" }} ref={coding_curly_ref}>
                    </animated.div>
                    <animated.div class={startBlink ? "blink" : ""} style={{ transform: prop.xy.interpolate(trans3), position: "absolute" }} ref={coding_curly_blink_ref}>
                    </animated.div>
                </div>
                <div style={{ width: "35%", height: "50%", transform: `translateX(-35%)` }}>
                    <animated.div style={{ transform: prop.xy.interpolate(trans7), position: "absolute" }} ref={application_dev_ref} >
                    </animated.div>
                    <animated.div style={{ transform: prop.xy.interpolate(trans6), position: "absolute" }} ref={application_dev_code_ref}>
                    </animated.div>
                </div>
            </div>
        </div >
    )
}

export default React.memo(Landing);