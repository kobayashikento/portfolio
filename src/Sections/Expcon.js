import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { useSpring, animated, config, useSprings } from 'react-spring'

import expconVid from '../Assets/videos/expcondemo.mov';
import pauseVideo from '../Assets/videos/expcondemopauseedit2.png';

import HoverVideoPlayer from 'react-hover-video-player';

import '../Assets/styles/expconStyle.scss';

import * as easings from 'd3-ease';

import Modal from '@material-ui/core/Modal';
import ProductInfo from '../Components/ProductInfo';

import mockOverview from '../Assets/pictures/expcon_main_mock.png';
import mockAll from '../Assets/pictures/expcon_all_mock.png';
import longpic1 from '../Assets/pictures/expcon_long_1.png';
import longpic2 from '../Assets/pictures/expcon_long_2.png';

import { connect } from 'react-redux';
import { setModalOpen } from '../Redux/actions/propertyAction';

const content = {
    mockOverview: mockOverview, dutiesText: ["designer", "developer"], techText: ["React", "Redux", "JavaScript", "Material UI"],
    dateText: "Jan, 2021", overviewText: "A website that focuses on building an interactive online music experience.",
    mockAll: mockAll, detailsText: "This website was built using React and focuses heavily on engaging the viewers through the use of parallaxes and meaningful animations. I created functional components for sections that had similar layouts to reduce unnecessary code and used React Redux so that components would share global states to reduce client-side lags.",
    longpic1: longpic1, longpic2: longpic2, mainPicWidth: "70%", 
    focusDevText: "Learned WebGL and three.JS to build a  more interactive video transition for the landing page. In addition, I learned GSAP (GreenSock) to implement scrollTo() handlers on the react-smooth-scrollbar library instead of creating a separate onScroll Listneter to time the animations which significantly reduce the lag.",
    focusDesignText: "Implemented a parallax effect through CSS properties and onScroll Listeners to make the website feel longer and wider with the purpose of further engaging the user. Took advantage of the contrast between bright and dark colors to create an “interactive” experience."
}

const Slide = React.forwardRef(function Slide(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { transform: "translateY(0%)" },
        to: { transform: open ? "translateY(0%)" : "translateY(100%)" },
        config: { duration: 400 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

const Expcon = (props) => {

    const [expModalOpen, setExpModalOpen] = React.useState(false);
    const [initialRender, setInitialRender] = React.useState(true);

    const springFirst = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-150%)` },
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

    React.useEffect(() => {
        if (props.render) {
            setTimeout(() => {
                setInitialRender(false);
            }, 100)
        } else if (!props.render) {
            setInitialRender(true);
        }
    }, [props.render]);

    const videoSpring = useSpring({
        to: {
            transform: props.render ? "scale(1) translate(0%, -50%)" : "scale(0.6) translate(10% ,-50%)", opacity: props.render ? 1 : 0,
            height: expModalOpen ? "100%" : "70%", width: expModalOpen ? "66%" : "54%", right: expModalOpen ? "0%" : "8%"
        },
        from: {
            right: "8%", top: "50%", transform: "scale(0.6) translate(10% ,-50%)", transformOrigin: "top center 20px", opacity: 0,
            height: "70%", width: "54%", zIndex: 3
        },
        config: { duration: expModalOpen ? 600 : 1500, easing: easings.easePolyOut.exponent(2.04) },
        delay: initialRender ? 600 : 0
    });

    const videoOverlay = useSpring({
        to: { width: props.render ? "0%" : "100%" },
        from: { position: "absolute", height: "100%", width: "100%", background: "linear-gradient(90deg, #ff4d5a 10%, #072142 20%)", zIndex: 2, right: "0" },
        config: { duration: 1000, easing: easings.easeQuadOut },
        delay: 300
    });

    const springThird = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)`, opacity: props.render ? 1 : 0, right: expModalOpen ? "3%" : "-6.6%" },
        from: { right: "-6.6%", zIndex: 5, bottom: "8%", position: "absolute", transform: `translateX(-100%)`, opacity: 0 },
        delay: props.modalOpen ? 0 : 600
    });

    const handleClick = () => {
        props.setModalOpen(true);
        setExpModalOpen(true);
    }

    React.useEffect(() => {
        if (!props.modalOpen) {
            setExpModalOpen(false);
        }
    }, [props.modalOpen])

    const handleEscape = () => {
        props.setModalOpen(false);
        setExpModalOpen(false);
    }

    return (
        <React.Fragment>
            <div style={{ display: "flex", height: "100vh", position: "relative", width: "100vw" }}>
                <animated.div style={{ overflow: "hidden", display: "flex", height: "100%", flexDirection: "column", marginLeft: "12.2vmax", justifyContent: "center", alignItems: "flex-start" }}>
                    <animated.div style={springFirst}>
                        <Typography style={{
                            color: "white", fontFamily: "FuturaM", fontSize: "5.2rem",
                            letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.3)", fontWeight: "bold"
                        }}>
                            EXP|CON
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
                            width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "1.8rem", letterSpacing: "0.2rem",
                            marginTop: "4px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                        }}>
                            website
                    </Typography>
                    </animated.div>
                    <animated.div style={springSecond}>
                        <Typography style={{
                            width: "max-content", color: "rgba(255,255,255,0.7)", fontFamily: "FuturaM", fontSize: "16px",
                            letterSpacing: "1.5px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                        }}>
                            React, Firebase, Redux, JavaScript
                    </Typography>
                    </animated.div>
                    <animated.div style={springSecond}>
                        <button class="explore" onClick={() => handleClick()} style={{ fontFamily: "FuturaB", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
                            Explore
                            <span class="icon-right"></span>
                            <span class="icon-right after"></span>
                        </button>
                    </animated.div>
                </animated.div>
                <animated.div style={{
                    ...videoSpring, position: "absolute",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                }}>
                    <animated.div style={videoOverlay} />
                    <HoverVideoPlayer
                        videoSrc={expconVid}
                        sizingMode="container"
                        style={{ width: "100%", height: "100%" }}
                        pausedOverlay={<img src={pauseVideo} alt="" style={{ width: "100%", height: "100%", borderRadius: "2px" }} />}
                    />
                    <animated.div style={springThird}>
                        <Typography style={{
                            width: "max-content", color: "white", fontFamily: "'Abril Fatface', cursive", fontSize: "7rem", textShadow: "0 10px 30px rgb(2 11 22 / 50%)"
                        }}>
                            02
                    </Typography>
                    </animated.div>
                </animated.div>
            </div >
            <Modal
                open={expModalOpen}
                onClose={handleEscape}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Slide in={expModalOpen}>
                    <ProductInfo
                        content={content}
                        picHeight={"68%"}
                    />
                </Slide>
            </Modal>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.propertyReducer.modalOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setModalOpen: (boolean) => dispatch(setModalOpen(boolean))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expcon);