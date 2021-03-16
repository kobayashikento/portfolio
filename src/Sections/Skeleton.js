import React from 'react'

import Header from './Header';
import SideNav from './SideNav';
import Landing from './Landing';
import Expcon from './Expcon';
import About from './About';
import UAssist from './UAssist';
import Contact from './Contact';
import MyHealthy from './MyHealthy';

import { useSpring, animated } from 'react-spring';

import { useGesture } from 'react-use-gesture';

import { Lethargy } from 'lethargy'

import '../Assets/styles/skeletonCSS.css';

import { connect } from 'react-redux';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// import typing animation
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import { preaboutcode, precode, code, preexpcode, expcode, aboutCode, codeSections } from '../Assets/constants';

const lethargy = new Lethargy()
const slides = [0, 1, 2, 3, 4, 5]
const clamp = (value, min, max) => Math.max(Math.min(max, value), min)

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 40}px,${-y / 40}px,0)`

const Skeleton = (props) => {

    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    //states
    const [clear, setClear] = React.useState(false);
    const [landingSVG, setLandingSVG] = React.useState(true);

    // index for the scroller using lethargy
    const [index, setIndex] = React.useState(0)

    // active index = render, 0: landing, 1: aboutme, ...
    const [render, setRender] = React.useState(0);

    // states to check if background typing is done
    const [stateTypeDone, setStateTypeDone] = React.useState(false);
    const [xyTypeDone, setXYTypeDone] = React.useState(false);

    // landingPage svg carousel
    const [carouselIndex, setCarouselIndex] = React.useState(0);

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
        onDrag: ({ swipe }) => {
            if (props.modalOpen) { return }
            else { setIndex(p => Math.min(Math.max(0, p - swipe[1]), 4)); }
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
                    // render landing - index 0
                    setRender(0);
                }, 0);
                break;
            case 1:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    // render 1
                    setRender(1);
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
                    setRender(2);
                }, 0);
                break;
            case 3:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setRender(3);
                }, 0);
                break;
            case 4:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setRender(4);
                }, 0);
                break;
            case 5:
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 0);
                setTimeout(() => {
                    setRender(5);
                }, 0);
                break;
            default:
        }
    }, [index])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCarouselIndex((carouselIndex + 1) % 3)
        }, 4000);
        return () => clearTimeout(timer);
    }, [carouselIndex, setCarouselIndex]);

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
                            {currIndex === 1 ? `aboutPic` : currIndex === 2 ? `myhealthyPic` : currIndex === 4 ? `uAssistPic` : `torontoPic`}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {` from '../Assets/pictures/`}
                        </span>
                        <span style={{ color: "rgb(255, 77, 90)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                            {currIndex === 1 ? `about_pic` : currIndex === 2 ? `myhealthy_pic` : currIndex === 4 ? `uAssist_pic` : `toronto_pic`}
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
                            {currIndex === 1 ? `About` : currIndex === 2 ? `MyHealthyFamily` : currIndex === 4 ? `UAssist` : `Get In Touch`}
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
                                {currIndex === 1 ? `Front-End Developer` : currIndex === 2 ? `e-commerce website` : currIndex === 4 ? `website` : `Leave a message`}
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
                                    {currIndex === 1 ? `U of T Grad: Mathematics and Statistics` :
                                        currIndex === 2 ? `Shopify, React, Storefront API` : currIndex === 4 ? `MangoDB, Express, Bootstrap, JavaScript` : `Based in Toronto, Fueled by coffee :)`}
                                </span>
                                <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "pre" }}>
                                    {`</Typography>`}
                                </span>
                            </Typist> : snippet.content === `02` ?
                                <Typist avgTypingDelay={5} startDelay={100 * index} cursor={{ show: false }}>
                                    <span style={{ color: "rgb(255, 77, 90)", marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}>
                                        {currIndex === 1 ? `01` : currIndex === 2 ? `02` : currIndex === 4 ? `04` : `05`}
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
            { matches ?
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
                    {clear ? null : index === 3 ? makeExconPreCodeAni() : index === 0 ? makeLandingPreCodeAni() : makeAboutPreCodeAni(index)}
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
                    {clear ? null : index === 3 ? makeExconCodeAni() : index === 0 ? makeLandingCodeAni() : makeAboutCodeAni(index)}
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
                :
                null
            }
            <div className="slider" style={{ transform: `translateY(${-index * 100}vh)` }}>
                <Landing
                    render={render === 0}
                    svgRender={landingSVG}
                    carouselIndex={carouselIndex}
                />
                <About
                    render={render === 1}
                />
                <MyHealthy
                    render={render === 2}
                />
                <Expcon
                    render={render === 3}
                />
                <UAssist
                    render={render === 4}
                />
                <Contact
                    render={render === 5}
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