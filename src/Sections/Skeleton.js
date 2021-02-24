import React from 'react'

import Header from './Header';
import SideNav from './SideNav';
import Landing from './Landing';
import Expcon from './Expcon';
import About from './About';
import UAssist from './UAssist';
import Contact from './Contact';

import { useGesture, useWheel } from 'react-use-gesture';

import { Lethargy } from 'lethargy'

import '../Assets/styles/skeletonCSS.css';

import { useSpring, animated } from 'react-spring';

import { connect } from 'react-redux';

// import typing animation
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const lethargy = new Lethargy()
const slides = [0, 1, 2, 3, 4]
const clamp = (value, min, max) => Math.max(Math.min(max, value), min)

const precode = [
    { indent: 0, content: ` ` },
    { indent: 0, content: "const trans1 = (x, y) => translate3d(${x / 50}px,${y / 50}px,0);" },
    { indent: 0, content: "const trans2 = (x, y) => translate3d(${x / 8 + 35}px,${y / 8 - 130}px,0);" },
    { indent: 0, content: "const trans3 = (x, y) => translate3d(${x / 6 - 20}px,${y / 6 - 90}px,0);" },
    { indent: 0, content: ` ` },
]
const code = [
    { indent: 0, content: ` ` },
    { indent: 2, content: `carouselState` },
    { indent: 2, content: `const [prop, set] = useSpring(() => (` },
    { indent: 3, content: `xyConfig` },
    { indent: 2, content: `);` },
    { indent: 0, content: ` ` },
    { indent: 2, content: `React.useEffect(() => {` },
    { indent: 3, content: `const timer = setTimeout(() => {` },
    { indent: 4, content: `setCarouselIndex` },
    { indent: 3, content: `}, 4000);` },
    { indent: 3, content: `return () => clearTimeout(timer);` },
    { indent: 2, content: `}, [carouselIndex, setCarouselIndex]);` },
    { indent: 0, content: ` ` },
    { indent: 2, content: `return ( ` },
    { indent: 3, content: `<div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>` },
    { indent: 4, content: `<animated.div style={carouselSprings}>` },
    { indent: 5, content: `trans1` },
    { indent: 4, content: `</animated.div>` },
    { indent: 4, content: `<animated.div style={carouselSprings}>` },
    { indent: 5, content: `trans2` },
    { indent: 4, content: `</animated.div>` },
    { indent: 4, content: `<animated.div style={carouselSprings}>` },
    { indent: 5, content: `trans3` },
    { indent: 4, content: `</animated.div>` },
    { indent: 3, content: `</div>` },
    { indent: 2, content: `)` },
    { indent: 1, content: `}` },
    { indent: 0, content: ` ` },
]
const preexpcode = [
    { indent: 0, content: `import HoverVideoPlayer from 'react-hover-video-player';` },
    { indent: 0, content: ` ` },
    { indent: 0, content: `import expconVid from '../Assets/videos/expcon_demo.mov';` },
    { indent: 0, content: `import pauseVideo from '../Assets/videos/expcon_demo_edit.png;` },
    { indent: 0, content: ` ` },
]
const expcode = [
    { indent: 0, content: ` ` },
    { indent: 2, content: `const videoSpring = useSpring({` },
    { indent: 3, content: `to: { transform: props.render ? "scale(1) translate(0%, -50%)" :` },
    { indent: 4, content: `"scale(0.7) translate(10% ,-50%)", opacity: props.render ? 1 : 0 },` },
    { indent: 3, content: `from: { right: "8%", top: "50%", transform: "scale(0.6) translate(10% ,-50%)",` },
    { indent: 4, content: `transformOrigin: "top center 20px", opacity: 0 },` },
    { indent: 3, content: `config: { duration: 1200, easing: easings.easeQuadOut },` },
    { indent: 3, content: `delay: 400` },
    { indent: 2, content: `})` },
    { indent: 0, content: ` ` },
    { indent: 2, content: `return (` },
    { indent: 0, content: ` ` },
    { indent: 3, content: `<animated.div style={{ overflow: "hidden", display: "flex", height: "100%">` },
    { indent: 4, content: `expcon` },
    { indent: 4, content: `website` },
    { indent: 4, content: `skills` },
    { indent: 4, content: `<button className="exploreBtn">Explore</button>` },
    { indent: 3, content: `</aniamted.div>` },
    { indent: 0, content: ` ` },
    { indent: 3, content: `<animated.div style={videoSpring}>` },
    { indent: 4, content: `<animated.div style={videoOverlay} />` },
    { indent: 4, content: `<HoverVideoPlayer` },
    { indent: 5, content: `videoSrc={expconVid}` },
    { indent: 5, content: `pausedOverlay={<img src={pauseVideo}` },
    { indent: 4, content: `/>` },
    { indent: 3, content: `</aniamted.div>` },
    { indent: 0, content: ` ` },
    { indent: 2, content: `)` },
    { indent: 1, content: `}` },
]
const aboutCode = [
    { indent: 0, content: ` ` },
    { indent: 2, content: `const imageSpring = useSpring({` },
    { indent: 3, content: `to: { transform: props.render ? "scale(1) translate(0%, -50%)" :` },
    { indent: 4, content: `"scale(0.7) translate(10% ,-50%)", opacity: props.render ? 1 : 0 },` },
    { indent: 3, content: `from: { right: "8%", top: "50%", transform: "scale(0.6) translate(10% ,-50%)",` },
    { indent: 4, content: `transformOrigin: "top center 20px", opacity: 0 },` },
    { indent: 3, content: `config: { duration: 1200, easing: easings.easeQuadOut },` },
    { indent: 3, content: `delay: 400` },
    { indent: 2, content: `})` },
    { indent: 0, content: ` ` },
    { indent: 2, content: `return (` },
    { indent: 0, content: ` ` },
    { indent: 3, content: `<animated.div style={{ overflow: "hidden", display: "flex", height: "100%">` },
    { indent: 4, content: `about` },
    { indent: 4, content: `developer` },
    { indent: 4, content: `uoft` },
    { indent: 4, content: `<button className="moreBtn">More</button>` },
    { indent: 3, content: `</aniamted.div>` },
    { indent: 0, content: ` ` },
    { indent: 3, content: `<animated.div style={imageSpring}>` },
    { indent: 4, content: `<animated.div style={videoOverlay} />` },
    { indent: 4, content: `<img src={aboutPic} style={{height: "100%", width: "100%", borderRadius: "2px"}} />` },
    { indent: 4, content: `<Typography style={{ fontFamily: "'Abril Fatface', cursive", fontSize: "7rem" }}>` },
    { indent: 5, content: `02` },
    { indent: 4, content: `</Typography>` },
    { indent: 4, content: `/>` },
    { indent: 3, content: `</aniamted.div>` },
    { indent: 0, content: ` ` },
    { indent: 2, content: `)` },
    { indent: 1, content: `}` },
]
const codeSections = [
    { content: `PortfolioLandingPage` },
    { content: `AboutSection` },
    { content: `ExpconSection` },
    { content: `UAssistSection` },
    { content: `ContactSection` },
]

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 40}px,${-y / 40}px,0)`

const Skeleton = (props) => {

    const [clear, setClear] = React.useState(false);
    const [landingRender, setLandingRender] = React.useState(true);
    const [expconRender, setExpconRender] = React.useState(true);
    const [landingSVG, setLandingSVG] = React.useState(true);
    const [aboutRender, setAboutRender] = React.useState(false);
    const [uassistRender, setUassistRender] = React.useState(false);
    const [contactRender, setContactRender] = React.useState(false);

    const [index, setIndex] = React.useState(0)

    const [stateTypeDone, setStateTypeDone] = React.useState(false);
    const [xyTypeDone, setXYTypeDone] = React.useState(false);

    const bind = useGesture({
        onWheel: ({ event, last, memo: wait = false, direction }) => {
            if (props.modalOpen) { }
            else if (!last) {
                const s = lethargy.check(event)
                if (s) {
                    if (!wait) {
                        if ((i) => clamp(i - s, 0, slides.length - 1) === 1) {
                            if (direction[1] === 1) {
                                setLandingSVG(false);
                            }
                        }
                        setTimeout(() => {
                            setIndex((i) => clamp(i - s, 0, slides.length - 1))
                        }, 0)
                        return true
                    }
                } else return false
            } else {
                return false
            }
        },
        onMove: ({ xy }) => {
            if (!props.modalOpen) {
                setXYPos({ x: xy[0].toFixed(0), y: xy[1].toFixed(0) });
                set({ xy: calc(xy[0], xy[1]) });
            }
        }
    })

    const handleNavClick = (index) => {
        setIndex(index);
    }

    React.useEffect(() => {
        switch (index) {
            case 0:
                setLandingSVG(true);
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setLandingRender(true);
                    setAboutRender(false);
                }, 0);
                break;
            case 1:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setAboutRender(true);
                    setExpconRender(false);
                    setLandingRender(false);
                    setLandingSVG(false);
                    setXYTypeDone(false);
                    setStateTypeDone(false);
                }, 0);
                break;
            case 2:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setExpconRender(true);
                    setAboutRender(false);
                    setUassistRender(false);
                }, 0);
                break;
            case 3:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setExpconRender(false);
                    setUassistRender(true);
                    setContactRender(false);
                }, 0);
                break;
            case 4:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setUassistRender(false);
                    setContactRender(true);
                }, 0);
                break;
        }
    }, [index])

    const [carouselIndex, setCarouselIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCarouselIndex((carouselIndex + 1) % 3)
        }, 4000);
        return () => clearTimeout(timer);
    }, [carouselIndex, setCarouselIndex]);

    const preaboutcode = [
        { indent: 0, content: ` ` },
        { indent: 0, content: `importPic` },
        { indent: 0, content: `import * as easings from 'd3-ease';` },
        { indent: 0, content: ` ` },
    ]

    const makeLandingCodeAni = () => {
        return code.map((snippet, index) => {
            return (
                snippet.content === 'carouselState' ?
                    <div style={{ display: "flex" }}>
                        <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }} onTypingDone={() => setStateTypeDone(true)}>
                            <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, }}>
                                {`const [carouselIndex, setCarouselIndex] = React.useState(`}
                            </span>
                        </Typist>
                        <span style={{ display: stateTypeDone ? "" : "none", color: "rgb(255, 77, 90)" }}>
                            {carouselIndex}
                        </span>
                        <span style={{ display: stateTypeDone ? "" : "none", color: "rgba(255,255,255,0.4)" }}>
                            {`);`}
                        </span>
                    </div>
                    : snippet.content === 'xyConfig' ?
                        <div style={{ display: "flex" }}>
                            <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }} onTypingDone={() => setXYTypeDone(true)}>
                                <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, }}>
                                    {`{ xy: [`}
                                </span>
                            </Typist>
                            <span style={{ display: xyTypeDone ? "" : "none", color: "rgb(255, 77, 90)" }}>
                                {`${xyPos.x}, ${xyPos.y}`}
                            </span>
                            <span style={{ display: xyTypeDone ? "" : "none", color: "rgba(255,255,255,0.4)" }}>
                                {`], config: { mass: 10, tension: 550, friction: 140 } })`}
                            </span>
                        </div>
                        : snippet.content === 'setCarouselIndex' ?
                            <div style={{ color: "rgba(255,255,255,0.4)" }}>
                                <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                    <span style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                        {`setCarouselIndex((carouselIndex + 1) % 3);`}
                                    </span>
                                </Typist>
                            </div>
                            : snippet.content === 'trans1' ?
                                <div style={{ color: carouselIndex === 0 ? "rgb(255, 77, 90)" : "rgba(255,255,255,0.4)" }}>
                                    <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                        <span style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                            {`<animated.div style={{ transform: prop.xy.interpolate(trans1)} />`}
                                        </span>
                                    </Typist>
                                </div> :
                                snippet.content === 'trans2' ?
                                    <div style={{ color: carouselIndex === 1 ? "rgb(255, 77, 90)" : "rgba(255,255,255,0.4)" }}>
                                        <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                            <span style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                                {`<animated.div style={{ transform: prop.xy.interpolate(trans2)} />`}
                                            </span>
                                        </Typist>
                                    </div> :
                                    snippet.content === 'trans3' ?
                                        <div style={{ color: carouselIndex === 2 ? "rgb(255, 77, 90)" : "rgba(255,255,255,0.4)" }}>
                                            <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                                <span style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                                    {`<animated.div style={{ transform: prop.xy.interpolate(trans3)} />`}
                                                </span>
                                            </Typist>
                                        </div>
                                        : <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                            <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                                {snippet.content}
                                            </span>
                                        </Typist>
            )
        })
    }
    const makeLandingPreCodeAni = () => {
        return precode.map((snippet, index) => {
            return (
                <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                        {snippet.content}
                    </span>
                </Typist>
            )
        })
    }
    const makeExconPreCodeAni = () => {
        return preexpcode.map((snippet, index) => {
            return (
                <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                        {snippet.content}
                    </span>
                </Typist>
            )
        })
    }
    const makeExconCodeAni = () => {
        return expcode.map((snippet, index) => {
            return (
                snippet.content === `expcon` ?
                    <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                        <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {`<Typography style={{ fontFamily: "FuturaM", fontSize: "5.2rem" }}>`}
                        </span>
                        <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
                            {`EXP|CON`}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "pre" }}>
                            {`</Typography>`}
                        </span>
                    </Typist> : snippet.content === `website` ?
                        <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                            <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                {`<Typography style={{ fontFamily: "FuturaB", fontSize: "1.5rem" }}>`}
                            </span>
                            <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
                                {`website`}
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "pre" }}>
                                {`</Typography>`}
                            </span>
                        </Typist> : snippet.content === `skills` ?
                            <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                    {`<Typography>`}
                                </span>
                                <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
                                    {`React, Firebase, Redux, JavaScript`}
                                </span>
                                <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "pre" }}>
                                    {`</Typography>`}
                                </span>
                            </Typist>
                            : <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                    {snippet.content}
                                </span>
                            </Typist>
            )
        })
    }
    const makeAboutPreCodeAni = (currIndex) => {
        return preaboutcode.map((snippet, index) => {
            return (
                snippet.content === 'importPic' ?
                    <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                        <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {`import `}
                        </span>
                        <span style={{ color: "rgb(255, 77, 90)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {currIndex === 1 ? `aboutPic` : currIndex === 3 ? `uAssistPic` : `torontoPic`}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {` from '../Assets/pictures/`}
                        </span>
                        <span style={{ color: "rgb(255, 77, 90)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {currIndex === 1 ? `about_pic` : currIndex === 3 ? `uAssist_pic` : `toronto_pic`}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {`.png';`}
                        </span>
                    </Typist>
                    : <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                        <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {snippet.content}
                        </span>
                    </Typist>
            )
        })
    }
    const makeAboutCodeAni = (currIndex) => {
        return aboutCode.map((snippet, index) => {
            return (
                snippet.content === `about` ?
                    <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                        <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {`<Typography style={{ fontFamily: "FuturaM", fontSize: "5.2rem" }}>`}
                        </span>
                        <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
                            {currIndex === 1 ? `About` : currIndex === 3 ? `UAssist` : `Get In Touch`}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "pre" }}>
                            {`</Typography>`}
                        </span>
                    </Typist> : snippet.content === `developer` ?
                        <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                            <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                {`<Typography style={{ fontFamily: "FuturaB", fontSize: "1.5rem" }}>`}
                            </span>
                            <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
                                {currIndex === 1 ? `Front-End Developer` : currIndex === 3 ? `website` : `Leave a message`}
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "pre" }}>
                                {`</Typography>`}
                            </span>
                        </Typist> : snippet.content === `uoft` ?
                            <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                    {`<Typography>`}
                                </span>
                                <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
                                    {``}
                                    {currIndex === 1 ? `U of T Grad: Mathematics and Statistics` : currIndex === 3 ? `MangoDB, Express, Bootstrap, JavaScript` : `Based in Toronto, Fueled by coffee :)`}
                                </span>
                                <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "pre" }}>
                                    {`</Typography>`}
                                </span>
                            </Typist> : snippet.content === `02` ?
                                <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                    <span style={{ color: "rgb(255, 77, 90)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                        {currIndex === 1 ? `01` : currIndex === 3 ? `03` : `04`}
                                    </span>
                                </Typist>
                                : <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                    <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                        {snippet.content}
                                    </span>
                                </Typist>
            )
        })
    }

    const [prop, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const [xyPos, setXYPos] = React.useState({ x: 0, y: 0 });
    // onMouseMove={({ clientX: x, clientY: y }) => setXYPos({ xy: calc(x, y) })}

    return (
        <div className="app" {...bind()} style={{ backgroundImage: "linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)" }} >
            <Header />
            <SideNav
                index={index}
                handleNavClick={(index) => handleNavClick(index)}
            />
            <animated.div style={{
                position: "fixed", height: "100%", fontSize: "13px", width: "100%", display: "flex", justifyContent: "center", left: "36%", flexDirection: "column", overflow: "hidden",
                fontFamily: "'Rajdhani', sans-serif", letterSpacing: "1.5px", fontWeight: "500", transform: prop.xy.interpolate(trans1)
            }}>
                <Typist avgTypingDelay={5} startDelay={0} cursor={{ show: false }} >
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>
                        {`import React from 'react';`}
                    </span>
                </Typist>
                <Typist avgTypingDelay={5} startDelay={50} cursor={{ show: false }} >
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>
                        {`import { useSpring, animated } from 'react-spring';`}
                    </span>
                </Typist>
                {clear ? null : index === 2 ? makeExconPreCodeAni() : index === 0 ? makeLandingPreCodeAni() : makeAboutPreCodeAni(index)}
                <div style={{ display: "flex" }}>
                    <Typist avgTypingDelay={5} startDelay={500} cursor={{ show: false }}>
                        <span style={{ marginLeft: `${1}rem`, whiteSpace: "pre", color: "rgba(255,255,255,0.4)" }}>
                            {`const `}
                        </span>
                    </Typist>
                    {clear ? null : <Typist avgTypingDelay={5} startDelay={520} cursor={{ show: false }}>
                        <span style={{ whiteSpace: "pre", color: "rgb(255, 77, 90)" }}>
                            {codeSections[index].content}
                        </span>
                    </Typist>}
                    <Typist avgTypingDelay={5} startDelay={550} cursor={{ show: false }}>
                        <span style={{ whiteSpace: "pre", color: "rgba(255,255,255,0.4)" }}>
                            {` = (props) => {`}
                        </span>
                    </Typist>
                </div>
                {clear ? null : index === 2 ? makeExconCodeAni() : index === 0 ? makeLandingCodeAni() : makeAboutCodeAni(index)}
                <div style={{ display: "flex" }}>
                    <Typist avgTypingDelay={5} startDelay={2500} cursor={{ show: false }}>
                        <span style={{ marginLeft: `${0}rem`, whiteSpace: "pre", color: "rgba(255,255,255,0.4)" }}>
                            {`export default React.memo(`}
                        </span>
                    </Typist>
                    {clear ? null : <Typist avgTypingDelay={5} startDelay={2520} cursor={{ show: false }}>
                        <span style={{ whiteSpace: "pre", color: "rgb(255, 77, 90)" }}>
                            {codeSections[index].content}
                        </span>
                    </Typist>}
                    <Typist avgTypingDelay={5} startDelay={2550} cursor={{ show: true }}>
                        <span style={{ whiteSpace: "pre", color: "rgba(255,255,255,0.4)" }}>
                            {`);`}
                        </span>
                    </Typist>
                </div>
            </animated.div>
            <div className="slider" style={{ transform: `translateY(${-index * 100}vh)` }}>
                <Landing
                    render={landingRender}
                    svgRender={landingSVG}
                    carouselIndex={carouselIndex}
                />
                <About
                    render={aboutRender}
                />
                <Expcon
                    render={expconRender}
                />
                <UAssist
                    render={uassistRender}
                />
                <Contact
                    render={contactRender}
                />
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.propertyReducer.modalOpen,
    }
}

export default connect(mapStateToProps)(Skeleton);