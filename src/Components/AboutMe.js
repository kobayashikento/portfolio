import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Scrollbars } from 'react-custom-scrollbars';

import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DevicesIcon from '@material-ui/icons/Devices';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import BuildIcon from '@material-ui/icons/Build';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Chip from '@material-ui/core/Chip';

import WorkValues from './WorkValues';
import ExperienceBar from './Bars';

import { animated, useTrail, useSpring } from 'react-spring';

import mePic from '../Assets/pictures/montrealme.png';

import { Transition } from 'react-spring/renderprops';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import '../Assets/styles/aboutMe.css';

import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import WebIcon from '@material-ui/icons/Web';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

const jobValues = [
    {
        value: "Fast",
        info: "Websites loads fast and has lag free interactions.",
        icon: <ScheduleIcon fontSize="large" style={{ color: "#072142" }} />,
        key: 0
    },
    {
        value: "Responsive",
        info: "Layouts will work on any screen size, small or big.",
        icon: <DevicesIcon fontSize="large" style={{ color: "#072142" }} />,
        key: 1
    },
    {
        value: "Useable",
        info: "Strong preference for easy to use, intuitive UX/UI.",
        icon: <BuildIcon fontSize="large" style={{ color: "#072142" }} />,
        key: 2
    },
    {
        value: "Appealing",
        info: "Websites build to be aesthetically pleasing.",
        icon: <ColorLensIcon fontSize="large" style={{ color: "#072142" }} />,
        key: 3
    }
]

const AboutMe = (props) => {
    const scrollbarRef = React.useRef(null);

    const [barsOpen, setBarsOpen] = React.useState(false);

    const matches = useMediaQuery('(min-width:600px)');

    const trail = useTrail(jobValues.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: true ? 1 : 0,
        x: true ? 0 : -50,
        from: { opacity: 0, x: -50, height: 50 },
        delay: 500
    });

    React.useEffect(() => {
        setTimeout(() => {
            scrollbarRef.current.view.scroll({
                top: window.innerHeight * 0.25,
                left: 0,
                behavior: 'smooth'
            });
        }, 200);
    }, []);

    const handleScroll = (e) => {
        if (e.scrollTop > window.innerHeight * 1.4) {
            setBarsOpen(true);
        } else {
            setBarsOpen(false);
        }
    }

    const springBars = useSpring({
        opacity: barsOpen ? 1 : 0,
        transform: barsOpen ? "translate3d(0px, 0, 0)" : "translate3d(100px, 0, 0)",
    });

    return (
        <Scrollbars
            autoHide
            style={{ width: "100vw", height: "100vh" }}
            ref={scrollbarRef}
            onScrollFrame={handleScroll}
        >
            <div style={{ top: "100vh", right: "0", position: "absolute", background: "linear-gradient(rgb(240,242,244) 30%, #fff 30%)", width: "100%", display: "flex", justifyContent: 'center' }}>
                <div style={{ display: "flex", height: "fit-content", flexDirection: "column", alignItems: "center", width: '100%' }}>
                    <div style={{ position: 'absolute', top: "2%", left: "3%", zIndex: 5, cursor: "pointer" }}>
                        <div style={{ transform: "rotate(270deg) translate(-22px, -8px)" }}>
                            <Typography style={{
                                textAlign: "left", fontSize: `16px`, fontStyle: "normal",
                                ontFamily: "FuturaM", color: "black", transformOrigin: "bottom",
                            }}>
                                scroll
</Typography>
                        </div>
                        <div>
                            <div className="loading_line_wrapper" >
                                <div className="loading_line">
                                    <div className="loading_line_inner loading_line_inner--1"></div>
                                    <div className="loading_line_inner loading_line_inner--2"></div>
                                </div>
                            </div>
                            <div style={{ height: "65px", background: "#333", width: "2px" }} />
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", maxWidth: "70%", transform: "scale(0.95)", marginTop: "4%", }} >
                        {trail.map(({ x, height, ...rest }, index) => (
                            <animated.div
                                key={jobValues[index].key}
                                className="trails-text"
                                style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`), marginLeft: "1.3rem" }}>
                                <animated.div style={{ height }}>
                                    <WorkValues
                                        content={jobValues[index]}
                                    />
                                </animated.div>
                            </animated.div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', paddingTop: "7%" }}>
                        <div style={{ margin: "1.3rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography style={{ width: "max-content", color: "#072142", fontFamily: "FuturaB", fontSize: "4rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                                Kento Kobayashi
                    </Typography>
                            <Typography style={{ width: "max-content", color: "rgba(0,0,0, 0.4)", fontFamily: "DINNextLTPro-Medium", fontSize: "1.5rem", fontWeight: "400", letterSpacing: "3px", marginBottom: "6px" }}>
                                Web Developer
                    </Typography>
                            {/* <Typography style={{ width: "max-content", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "12px", fontWeight: "400", letterSpacing: "2px", marginBottom: "6px" }}>
                                Made in Japan, Shipped to Toronto
                    </Typography> */}
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "6%", flexDirection: "column", width: "50%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ position: "absolute", left: "0%", display: "flex", alignItems: "center", marginBottom: "15%" }}>
                                <Divider style={{ height: "4px", background: "rgba(7, 33, 66, 0.9)", borderRadius: "4px", width: "1.5rem", marginRight: "1rem" }} />
                                <Typography style={{
                                    width: "max-content", color: "#ff4d5a", fontFamily: "'Abril Fatface', cursive", fontSize: "2.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)"
                                }}>
                                    01
                    </Typography>
                            </div>
                            <div style={{}}>
                                <Typography style={{ width: "max-content", color: "#072142", fontFamily: "FuturaM", fontSize: "2.3rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)" }}>
                                    About Me
                    </Typography>
                                <Typography style={{
                                    fontSize: "18px", width: "300px", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaB", fontWeight: "400", padding: "1rem"
                                }}>
                                    Experienced Front-End Web and App Developer with a Bachelors of Science in Mathematics and Statistics from the University of Toronto.
          </Typography>
                            </div>
                            <img src={mePic} style={{ marginLeft: "4%", width: "60%", height: "auto", borderRadius: "3px", transform: "translateX(20%)", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20%", flexDirection: "column", width: "100%" }}>
                            <div style={{ position: "absolute", left: "0%", display: "flex", alignItems: "center", marginBottom: "15%" }}>
                                <Divider style={{ height: "4px", background: "rgba(7, 33, 66, 0.9)", borderRadius: "4px", width: "1.5rem", marginRight: "1rem" }} />
                                <Typography style={{
                                    width: "max-content", color: "#ff4d5a", fontFamily: "'Abril Fatface', cursive", fontSize: "2.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)"
                                }}>
                                    02
                    </Typography>
                            </div>
                            <Typography style={{ width: "max-content", color: "#072142", fontFamily: "FuturaM", fontSize: "2.3rem", fontWeight: "bold", letterSpacing: "5px", marginBottom: "6px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)" }}>
                                Skills
                    </Typography>
                            <Typography style={{
                                fontSize: "18px", width: "600px", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaB", fontWeight: "400", padding: "1rem"
                            }}>
                                Confidence in abstract languages, knowledge of algorithms, self-analyzing computational thinking, and ability to accurately model real-world solutions from my undergraduate studies in Mathematics and Statistics.
                            </Typography>
                            <Transition
                                items={true}
                                from={{ width: "0px" }}
                                enter={{ width: `${window.innerWidth / 2}px` }}
                                leave={{ width: "0px" }}
                            >
                                {show => show && (prop => <div style={{
                                    ...prop, right: "0px", display: "flex", justifyContent: "around", alignItems: "center", overflow: "hidden", marginLeft: "6%",
                                    marginTop: "5%", transform: "scale(1.1)", justifyContent: "center"
                                }}>
                                    <animated.div style={{ ...springBars, zoom: matches ? "1" : "0.9" }}>
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"Algorithms"}
                                            percentage={90}
                                            delay={700}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"HTML/CSS"}
                                            percentage={90}
                                            delay={800}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"JavaScript"}
                                            percentage={90}
                                            delay={900}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"React"}
                                            percentage={67.5}
                                            delay={1000}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"Design"}
                                            percentage={67.5}
                                            delay={1100}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"Swift"}
                                            percentage={67.5}
                                            delay={1200}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"Node.js"}
                                            percentage={45}
                                            delay={1300}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"MongoDB"}
                                            percentage={45}
                                            delay={1400}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"Liquid"}
                                            percentage={45}
                                            delay={1500}
                                        />
                                        <ExperienceBar
                                            render={barsOpen}
                                            name={"Vue JS"}
                                            percentage={22.5}
                                            delay={1600}
                                        />
                                    </animated.div>
                                </div>)}
                            </Transition>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "19%", flexDirection: "column", width: "100%" }}>
                            <div style={{}}>
                                <Typography style={{ width: "max-content", color: "#072142", fontFamily: "FuturaM", fontSize: "2.3rem", fontWeight: "bold", letterSpacing: "5px", marginBottom: "6px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)" }}>
                                    Timeline
                    </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "70%", marginTop: "2%", marginLeft: "5%", paddingBottom: "5%" }}>
                        <div style={{ position: "absolute", left: "0%", display: "flex", alignItems: "center", marginBottom: "15%" }}>
                            <Divider style={{ height: "4px", background: "rgba(7, 33, 66, 0.9)", borderRadius: "4px", width: "1.5rem", marginRight: "1rem" }} />
                            <Typography style={{
                                width: "max-content", color: "#ff4d5a", fontFamily: "'Abril Fatface', cursive", fontSize: "2.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)"
                            }}>
                                03
                    </Typography>
                        </div>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgba(7, 33, 66, 0.9)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgba(7, 33, 66, 0.9)' }}
                                date="2019 - Present"
                                iconStyle={{ background: "white", color: 'rgba(7, 33, 66, 0.9)' }}
                                icon={<WorkIcon />}
                            >
                                {/* <div>
                                    <Chip label="Liquid" style={{ marginBottom: "1rem", marginRight: "1rem", background: "rgba(255,255,255,0.9)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }} />
                                    <Chip label="Shopify" style={{ marginBottom: "1rem", background: "rgba(255,255,255,0.9)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }} />
                                </div> */}
                                <h3 className="vertical-timeline-element-title">MyHealthyFamily</h3>
                                <h4 className="vertical-timeline-element-subtitle">Shopify Developer | Toronto, ON</h4>
                                <p>
                                    Liquid Developer, Theme Customization
                                </p>
                                <div style={{ marginTop: "1rem" }}>
                                    <Tooltip title="Visit myHealthyFamily">
                                        <OpenInNewIcon style={{ color: "#ff4d5a", cursor: "pointer" }} onClick={() => { window.open("https://myhealthy.family/") }} />
                                    </Tooltip>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Jan, 2020 - Jan, 2020"
                                iconStyle={{ background: 'rgba(7, 33, 66, 1', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgba(7, 33, 66, 0.1)' }}
                                icon={<WorkIcon />}
                            >
                                {/* <Chip label="ReactJs" style={{ marginBottom: "1rem", marginRight: "1rem", background: "rgba(255,255,255,0.9)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }} /> */}
                                <h3 className="vertical-timeline-element-title">EXP|CON</h3>
                                <h4 className="vertical-timeline-element-subtitle">Front-End Developer | Toronto, ON</h4>
                                <p>
                                    React Developer, Visual Design, User Expereince
    </p>
                                <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
                                    <Tooltip title="To Github" onClick={() => { window.open("https://github.com/kobayashikento/FrontEndAssessment-1") }} >
                                        <div style={{ cursor: "pointer" }} >
                                            <UseAnimations animation={github} strokeColor="#ff4d5a" size={28} />
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="Visit EXP|CON">
                                        <OpenInNewIcon style={{ color: "#ff4d5a", cursor: "pointer", marginLeft: "1rem" }} onClick={() => { window.open("https://expcon.web.app/") }} />
                                    </Tooltip>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgba(7, 33, 66, 0.9)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgba(7, 33, 66, 0.9)' }}
                                date="Nov, 2020 - Dec, 2020"
                                iconStyle={{ background: "white", color: 'rgba(7, 33, 66, 0.9)' }}
                                icon={<WebIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Portfolio-v1</h3>
                                <h4 className="vertical-timeline-element-subtitle">React Project | Toronto, ON</h4>
                                <p>
                                    React Developer, Visual Design, User Expereince
                                </p>
                                <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
                                    <Tooltip title="To Github" onClick={() => { window.open("https://github.com/kobayashikento/About-Me") }} >
                                        <div style={{ cursor: "pointer" }} >
                                            <UseAnimations animation={github} strokeColor="#ff4d5a" size={28} />
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="Visit Previous Portfolio">
                                        <OpenInNewIcon style={{ color: "#ff4d5a", cursor: "pointer", marginLeft: "1rem" }} onClick={() => { window.open("https://kento-kobayashi-v1.web.app/") }} />
                                    </Tooltip>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="~ May, 2019"
                                iconStyle={{ background: 'rgba(7, 33, 66, 1', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgba(7, 33, 66, 0.1)' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Honors Bachelors of Science</h3>
                                <h4 className="vertical-timeline-element-subtitle">University of Toronto | Toronto, ON</h4>
                                <p>
                                    Bachelors of Science in Mathematics and Statistics
    </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgba(7, 33, 66, 0.9)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgba(7, 33, 66, 0.9)' }}
                                date="Jan, 2018 - April, 2019"
                                iconStyle={{ background: "white", color: 'rgba(7, 33, 66, 0.9)' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Kroger</h3>
                                <h4 className="vertical-timeline-element-subtitle">App Developer | Chicago, IL</h4>
                                <p>
                                    Swift Developer, User Expereince, CloudKit
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                    <div style={{ background: "rgb(240,242,244)", height: "10vh", width: "100%" }}>
                    </div>
                </div>
            </div>
        </Scrollbars >
    )
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.propertyReducer.modalOpen,
    }
}

export default connect(mapStateToProps)(AboutMe);