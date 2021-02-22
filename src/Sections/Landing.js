import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Vivus from 'vivus';

import { useSpring, animated } from 'react-spring';

import browser_coding_svg from '../Assets/resources/browser_coding.svg';
import coding_curly_svg from '../Assets/resources/coding_curly.svg';
import coding_curly_blink_svg from '../Assets/resources/coding_curly_blink.svg';
import application_dev_code_svg from '../Assets/resources/application_dev_code.svg';
import application_development from '../Assets/resources/application_dev.svg';
import web_design_svg from '../Assets/resources/web_design.svg';
import web_design_txt_svg from '../Assets/resources/web_design_txt.svg';
import web_design_sun_svg from '../Assets/resources/web_design_sun.svg';
import web_design_sun_container_svg from '../Assets/resources/web_design_sun_container.svg';
import web_design_arrow_svg from '../Assets/resources/web_design_arrow.svg';

import '../Assets/styles/landingStyle.css';
import '../Assets/styles/landingStyle.scss';

import * as easings from 'd3-ease';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 130}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 20}px,${y / 6 - 90}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5 + 10}px,${y / 3.5 - 10}px,0)`
const trans5 = (x, y) => `translate3d(${x / 8 - 5}px,${y / 8 - 10}px,0)`
const trans6 = (x, y) => `translate3d(${x / 8 + 10}px,${y / 8 - 10}px,0)`
const trans7 = (x, y) => `translate3d(${x / 6 - 10}px,${y / 6 - 10}px,0)`

const Landing = (props) => {

    let browser_coding_ref = React.useRef(null);
    let coding_curly_ref = React.useRef(null);
    let coding_curly_blink_ref = React.useRef(null);
    let application_dev_ref = React.useRef(null);
    let application_dev_code_ref = React.useRef(null);
    let web_design_ref = React.useRef(null);
    let web_design_txt_ref = React.useRef(null);
    let web_design_sun_ref = React.useRef(null);
    let web_design_sun_container_ref = React.useRef(null);
    let web_design_arrow_ref = React.useRef(null);

    const [prop, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const [startBlink, setBlink] = React.useState(false);

    const [browserVivus, setBrowswerVivus] = React.useState();
    const [coderCurlyVivus, setCoderCurlyVivus] = React.useState();
    const [coderCurlyBlinkVivus, setCoderCurlyBlinkVivus] = React.useState();
    const [appliactionDev, setAppliactionDev] = React.useState();
    const [appliactionDevCode, setAppliactionDevCode] = React.useState();
    const [webDesignVivus, setWebDesignVivus] = React.useState();
    const [webDesignTxtVivus, setWebDesignTxtVivus] = React.useState();
    const [webDesignSunVivus, setWebDesignSunVivus] = React.useState();
    const [webDesignSunContainerVivus, setWebDesignSunContainerVivus] = React.useState();
    const [webDesignArrowVivus, setWebDesignArrowVivus] = React.useState();

    const [hover, onHover] = React.useState(false);

    React.useEffect(() => {
        setBrowswerVivus(new Vivus(browser_coding_ref.current, { file: browser_coding_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setCoderCurlyVivus(new Vivus(coding_curly_ref.current, { file: coding_curly_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setCoderCurlyBlinkVivus(new Vivus(coding_curly_blink_ref.current, { file: coding_curly_blink_svg, type: `delayed`, start: `manual`, delay: 50, animTimingFunction: Vivus.EASE_IN }, () => { setBlink(true) }));
        setAppliactionDev(new Vivus(application_dev_ref.current, { file: application_development, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setAppliactionDevCode(new Vivus(application_dev_code_ref.current, { file: application_dev_code_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setWebDesignVivus(new Vivus(web_design_ref.current, { file: web_design_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setWebDesignTxtVivus(new Vivus(web_design_txt_ref.current, { file: web_design_txt_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setWebDesignSunVivus(new Vivus(web_design_sun_ref.current, { file: web_design_sun_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setWebDesignSunContainerVivus(new Vivus(web_design_sun_container_ref.current, { file: web_design_sun_container_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
        setWebDesignArrowVivus(new Vivus(web_design_arrow_ref.current, { file: web_design_arrow_svg, type: `delayed`, start: `manual`, animTimingFunction: Vivus.EASE_IN }));
    }, [])

    const handlePlay = () => {
        if (props.svgRender && browserVivus !== undefined) {
            browserVivus.play(3.5);
            coderCurlyVivus.play(2);
            webDesignVivus.play(2);
            webDesignTxtVivus.play(2);
            webDesignSunVivus.play(2);
            webDesignArrowVivus.play(2);
            coderCurlyBlinkVivus.play(2);
            appliactionDev.play(3.5);
            appliactionDevCode.play(2);
            webDesignSunContainerVivus.play(2);
        }
    }

    const springFirstText = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)` },
        from: { transform: `translateX(-100%)` },
        delay: 200,
        config: { duration: 1000, easing: easings.easeCubicOut },
    })

    const springSecondText = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)` },
        from: { transform: `translateX(-100%)` },
        config: { duration: 500 },
        delay: 400,
        onRest: () => handlePlay()
    })

    const springLine = useSpring({
        to: { transform: props.render ? `translateX(0rem)` : `translateX(-6.5rem)` },
        from: { width: "5.5rem", transform: `translateX(-6.5rem)` },
        delay: 100
    })

    const springLineMove = useSpring({
        to: { transform: props.render ? `translateX(0rem)` : `translateX(-9.5rem)` },
        from: { width: "5.5rem", transform: `translateX(-9.5rem)` },
        delay: 300
    })

    const springHorizontalLineMove = useSpring({
        to: {
            transform: props.render ? `rotate(90deg) translate(0,0)`
                : `rotate(90deg) translate(-6.5rem,0)`, opacity: props.render ? 1 : 0
        },
        from: { width: "2.2rem", transform: `rotate(90deg) translate(-6.5rem,0)`, opacity: 0 },
        delay: 300
    })

    const springSecond = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)` },
        from: { transform: `translateY(100%)` },
        config: { duration: 400 },
        delay: 500
    })

    React.useEffect(() => {
        if (!props.svgRender && browserVivus !== undefined) {
            coderCurlyVivus.play(-2);
            coderCurlyBlinkVivus.play(-2);
            browserVivus.play(-2);
            appliactionDev.play(-2);
            appliactionDevCode.play(-2);
            webDesignVivus.play(-2);
            webDesignTxtVivus.play(-2);
            webDesignSunVivus.play(-2);
            webDesignArrowVivus.play(-2);
            webDesignSunContainerVivus.play(-2);
        }
    }, [props.svgRender])

    const carouselCodeSprings = useSpring({
        to: {
            width: props.carouselIndex === 0 ? "45%" : "26%", zIndex: props.carouselIndex === 0 ? 10 : -1,
            transform: props.carouselIndex === 0 ? "translateX(40%)" : props.carouselIndex === 1 ? "translateX(200%)" : "translateX(0%)",
            height: props.carouselIndex === 0 ? "0%" : "57%"
        },
        from: { width: "45%", zIndex: 10, height: "0%", transform: "translateX(40%)", position: "absolute" }
    });

    const carouselDesignSprings = useSpring({
        to: {
            width: props.carouselIndex === 1 ? "45%" : "26%", zIndex: props.carouselIndex === 1 ? 10 : -1,
            transform: props.carouselIndex === 1 ? "translateX(50%)" : props.carouselIndex === 2 ? "translateX(200%)" : "translateX(30%)",
            height: props.carouselIndex === 1 ? "30%" : "90%"
        },
        from: { width: "45%", height: "90%", zIndex: -1, transform: "translateX(-100%)", position: "absolute" }
    });

    const carouselMobileSprings = useSpring({
        to: {
            width: props.carouselIndex === 2 ? "45%" : "26%", zIndex: props.carouselIndex === 2 ? 10 : -1,
            transform: props.carouselIndex === 2 ? "translateX(50%)" : props.carouselIndex === 1 ? "translateX(30%)" : "translateX(200%)",
            height: props.carouselIndex == 2 ? "30%" : "90%"
        },
        from: { width: "45%", zIndex: -1, transform: "translateX(100%)", height: "90%", position: "absolute" }
    });

    const barSpring = useSpring({
        to: { transform: hover ? "scaleY(2)" : "scaleY(1)" },
        from: { transform: "scaleY(1)" }
    })

    const aniSpring = useSpring({
        to: { transform: hover ? "rotate(-90deg) translate(22px, -3px)" : "rotate(-90deg) translate(-12px, -3px)" },
        from: { transform: "rotate(-90deg) translate(-12px, -3px)", position: "absolute" }
    })

    const springThird = useSpring({
        to: { transform: props.render ? ` translateY(0px)` : ` translateY(-110%)`, opacity: props.render ? 1 : 0 },
        from: { transform: ` translateY(110%)`, opacity: 0 },
        config: {
            duration: 600, mass: 1, tension: 280, friction: 60
        },
        delay: 950
    })

    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", position: "relative", justifyContent: "center" }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={{
                overflow: "hidden", display: "flex", height: "100%",
                flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "flex-start", marginLeft: "11%"
            }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 100 }}>
                    <animated.div style={{ overflow: "hidden", transform: prop.xy.interpolate(trans1) }}>
                        <animated.div style={springFirstText}>
                            <Typography style={{
                                color: "white", fontFamily: "FuturaM", fontSize: "calc(80px + (88 - 80) * ((100vw - 300px) / (1600 - 300)))",
                                letterSpacing: "0.7rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)", fontWeight: "bold"
                            }}>
                                KENTO
                    </Typography>
                        </animated.div>
                    </animated.div>
                    <animated.div style={{ overflow: "hidden", transform: prop.xy.interpolate(trans1) }}>
                        <animated.div style={springSecondText}>
                            <Typography style={{
                                color: "white", fontFamily: "FuturaM", fontSize: "calc(80px + (88 - 80) * ((100vw - 300px) / (1600 - 300)))",
                                letterSpacing: "0.7rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)", fontWeight: "bold"
                            }}>
                                KOBAYASHI
                    </Typography>
                        </animated.div>
                    </animated.div>
                </div>
                <div style={{ overflow: "hidden", marginTop: "1%" }}>
                    <animated.div style={springLine}>
                        <Divider style={{ height: "5px", background: "#ff4d5a", borderRadius: "4px", marginBottom: "0.5rem", marginTop: "0.7rem" }} />
                    </animated.div>
                    <animated.div style={{ ...springLineMove, marginLeft: "3.3rem" }}>
                        <Divider style={{ height: "5px", background: "#ff4d5a", borderRadius: "4px", marginBottom: "1.2rem", marginTop: "0.7rem" }} />
                    </animated.div>
                </div>
                <div style={{ display: "flex", marginTop: "1%", overflow: "hidden" }}>
                    <div style={{ overflow: "hidden" }}>
                        <animated.div style={springSecond}>
                            <Typography style={{ color: "white", fontFamily: "'Rajdhani', sans-serif", fontWeight: "500", fontSize: "1.5rem", letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                                developer
                    </Typography>
                        </animated.div>
                    </div>
                    <animated.div style={{ ...springHorizontalLineMove }}>
                        <Divider style={{ height: "5px", background: "#ff4d5a", borderRadius: "4px", marginBottom: "0.5rem", marginTop: "0.7rem" }} />
                    </animated.div>
                    <div style={{ overflow: "hidden" }}>
                        <animated.div style={{ ...springSecond, marginLeft: "1.1rem" }}>
                            <Typography style={{ width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "1.5rem", letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                                designer
                    </Typography>
                        </animated.div>
                    </div>
                </div>
            </animated.div>
            <div style={{
                display: "flex", width: "40vw", height: "100vh", alignItems: "center", position: "absolute",
                right: "0%", zIndex: -1, marginTop: "10%"
            }}>
                <animated.div style={{ ...carouselCodeSprings, zIndex: 2 }}>
                    <animated.div style={{ transform: prop.xy.interpolate(trans2), position: "absolute", zIndex: 10 }} ref={browser_coding_ref}>
                    </animated.div>
                    <animated.div style={{ transform: prop.xy.interpolate(trans3), position: "absolute", zIndex: 10 }} ref={coding_curly_ref}>
                    </animated.div>
                    <animated.div className={startBlink ? "blink" : ""} style={{ transform: prop.xy.interpolate(trans3), position: "absolute", zIndex: 10 }} ref={coding_curly_blink_ref}>
                    </animated.div>
                </animated.div>
                <animated.div style={{ ...carouselDesignSprings, zIndex: 2 }}>
                    <animated.div style={{ transform: prop.xy.interpolate(trans7), position: "absolute", zIndex: 10 }} ref={web_design_ref} >
                    </animated.div>
                    <animated.div style={{ transform: prop.xy.interpolate(trans7), position: "absolute", overflow: "hidden", zIndex: 10 }} ref={web_design_sun_container_ref}>
                        <animated.div className="rotate" style={{ transform: prop.xy.interpolate(trans6), position: "absolute", zIndex: 10 }}
                            ref={web_design_sun_ref} >
                        </animated.div>
                    </animated.div>
                    <animated.div style={{ transform: prop.xy.interpolate(trans5), position: "absolute", overflow: "hidden", zIndex: 10 }} ref={web_design_txt_ref}>
                    </animated.div>
                    <animated.div className={props.carouselIndex === 1 ? "" : ""} style={{ transform: prop.xy.interpolate(trans6), position: "absolute", zIndex: 10 }} ref={web_design_arrow_ref} >
                    </animated.div>
                </animated.div>
                <animated.div style={{ ...carouselMobileSprings, zIndex: 2 }}>
                    <animated.div style={{ transform: prop.xy.interpolate(trans7), position: "absolute", zIndex: 10 }} ref={application_dev_ref} >
                    </animated.div>
                    <animated.div style={{ transform: prop.xy.interpolate(trans5), position: "absolute", zIndex: 10 }} ref={application_dev_code_ref}>
                    </animated.div>
                </animated.div>
            </div>
            <animated.div onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} onClick={() => props.setHeroLeave(true)}
                style={{ position: 'absolute', bottom: "0px", left: "3%", zIndex: 5, ...springThird, cursor: "pointer" }}>
                <animated.div style={aniSpring}>
                    <Typography style={{
                        textAlign: "left", fontSize: `16px`, fontStyle: "normal",
                        ontFamily: "FuturaM", color: "white", transformOrigin: "bottom",
                    }}>
                        scroll
</Typography>
                </animated.div>
                <animated.div style={barSpring}>
                    <div className="loading_line_wrapper" >
                        <div className="loading_line">
                            <div className="loading_line_inner loading_line_inner--1"></div>
                            <div className="loading_line_inner loading_line_inner--2"></div>
                        </div>
                    </div>
                    <div style={{ height: "65px", background: "#333", width: "2px" }} />
                </animated.div>
            </animated.div>
        </div >
    )
}

export default React.memo(Landing);