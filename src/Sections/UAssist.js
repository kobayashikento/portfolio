import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { useSpring, animated } from 'react-spring';

import Modal from '@material-ui/core/Modal';
import ProductInfo from '../Components/ProductInfo';

//Photo by AltumCode on Unsplash
import uassistPic from '../Assets/pictures/uassist_pic.png';
import uassistClearPic from '../Assets/pictures/uassist_clean.png';

import * as easings from 'd3-ease';

import uaMainPic from '../Assets/pictures/ua_main_pic.png';
import uaAllPic from '../Assets/pictures/ua_all_pic.png';

import MobileContent from '../Components/MobileContent';

import { connect } from 'react-redux';
import { setModalOpen } from '../Redux/actions/propertyAction';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const content = {
    mockOverview: uaMainPic, dutiesText: ["full-stack /", "developer"], techText: ["MongoDB", "Express", "JavaScript", "Bootstrap"],
    dateText: "Dec, 2019", overviewText: "A website that focuses on Rest API design and data management using MongoDB.",
    mockAll: uaAllPic, detailsText: "This website was built during my Web Development course at U of T with a team of 2 other students. The focus of this project was more towards the back-end implementation using MongoDB and expressJS via NodeJS. As a team we made sure that all asynchronous calls to the backend were handled appropriately. My team and I received a 95% grade on this project.",
    longpic1: null, longpic2: null, mainPicWidth: "65%",
    focusDevText: "Learned about  ExpressJS, MongoDB Schema Design, NodeJS, RestAPI in lecture to create a website that makes AJAX calls to the mongoDB to retrieve appropriate JSON files. Implemented user authentication by creating user “authentication tokens” using JWT, and created hashed passwords with additional “salt” using Bcrypt.",
    focusDesignText: "Used Bootstrap for the majority of the website and implemented modals and forms from the library to be consistent in the design."
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

const UAssist = (props) => {

    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    const [imageHover, setImageHover] = React.useState(false);
    const [uaModalOpen, setUaModalOpen] = React.useState(false);

    const springFirst = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)` },
        from: { transform: `translateX(-100%)`, zIndex: 5 },
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

    const videoSpring = useSpring({
        to: {
            transform: props.render ? "scale(1) translate(0%, -50%)" : "scale(0.6) translate(10% ,-50%)", opacity: props.render ? 1 : 0,
            height: uaModalOpen ? "100%" : "70%", width: uaModalOpen ? "66%" : "54%", right: uaModalOpen ? "0%" : "8%"
        },
        from: {
            right: "8%", top: "50%", transform: "scale(0.6) translate(10% ,-50%)", transformOrigin: "top center 20px", opacity: 0,
            height: "70%", width: "54%", zIndex: 3
        },
        config: { duration: uaModalOpen ? 600 : 1500, easing: easings.easePolyOut.exponent(2.04) },
        delay: !initialRender ? 0 : 600
    });

    const videoOverlay = useSpring({
        to: { width: props.render ? "0%" : "100%" },
        from: { position: "absolute", height: "100%", width: "100%", background: "linear-gradient(90deg, #ff4d5a 10%, #072142 20%)", zIndex: 2, right: "0" },
        config: { duration: 1000, easing: easings.easeQuadOut },
        delay: 300
    });

    const springThird = useSpring({
        to: { transform: props.render ? `translateX(0%)` : `translateX(-100%)`, opacity: props.render ? 1 : 0, right: uaModalOpen ? "3%" : "-6.6%" },
        from: { right: "-6.6%", zIndex: 5, bottom: "8%", position: "absolute", transform: `translateX(-100%)`, opacity: 0 },
        delay: !initialRender ? 0 : 800
    });

    const imageHoverSpring = useSpring({
        to: { opacity: imageHover ? 0 : 1 },
        fromt: { opacity: 1 }
    });

    const handleClick = () => {
        props.setModalOpen(true);
        setUaModalOpen(true);
    }

    React.useEffect(() => {
        if (!props.modalOpen) {
            setUaModalOpen(false);
        }
    }, [props.modalOpen])

    const handleEscape = () => {
        props.setModalOpen(false);
        setUaModalOpen(false);
    }

    return (
        <div style={{ display: "flex", height: "100vh", position: "relative", width: "100vw" }}>
            { matches ?
                <React.Fragment>
                    <animated.div style={{ overflow: "hidden", display: "flex", height: "100%", flexDirection: "column", marginLeft: "12.2vmax", justifyContent: "center", alignItems: "flex-start" }}>
                        <animated.div style={springFirst}>
                            <Typography style={{
                                color: "white", fontFamily: "FuturaM", fontSize: "5.2rem",
                                letterSpacing: "0.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.3)", fontWeight: "bold"
                            }}>
                                UAssist
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
                                width: "max-content", color: "rgba(255,255,255,0.7)", fontFamily: "'FuturaM", fontSize: "16px",
                                letterSpacing: "1.5px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                            }}>
                                MongoDB, Express, Bootstrap, JavaScript
                </Typography>
                        </animated.div>
                        <animated.div style={springSecond}>
                            <button onClick={() => handleClick()}
                                className="explore" style={{ fontFamily: "FuturaB", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>Explore<span className="icon-right"></span><span className="icon-right after"></span></button>
                        </animated.div>
                    </animated.div>
                    <animated.div
                        style={{
                            ...videoSpring, position: "absolute",
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                        }}>
                        <animated.div style={videoOverlay} />
                        <img src={uassistClearPic} style={{ height: "100%", width: "100%", borderRadius: "2px", position: "absolute" }} />
                        <animated.div style={imageHoverSpring} onMouseEnter={() => setImageHover(true)} onMouseLeave={() => setImageHover(false)}>
                            <img src={uassistPic} style={{ height: "100%", width: "100%", borderRadius: "2px", position: "absolute" }} />
                        </animated.div>
                        <animated.div style={springThird}>
                            <Typography style={{
                                width: "max-content", color: "white", fontFamily: "'Abril Fatface', cursive", fontSize: "7rem", textShadow: "0 10px 30px rgb(2 11 22 / 50%)"
                            }}>
                                03
                </Typography>
                        </animated.div>
                    </animated.div>
                </React.Fragment>
                :
                <MobileContent
                    contentModalOpen={uaModalOpen}
                    pic={uassistPic}
                    handleClick={() => handleClick()}
                    render={props.render}
                    content={{ title: "UAssist", subtitle: "website", description: "MongoDB, Express, Bootstrap, JavaScript", number: "03" }}
                />
            }

            <Modal
                open={uaModalOpen}
                onClose={handleEscape}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Slide in={uaModalOpen}>
                    <ProductInfo
                        content={content}
                        picHeight={"68%"}
                        handleEscape={() => handleEscape()}
                    />
                </Slide>
            </Modal>
        </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(UAssist);