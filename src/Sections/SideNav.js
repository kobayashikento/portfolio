import React from 'react';

import { useSpring, animated, useTrail } from 'react-spring'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import { connect } from 'react-redux';
import { setModalOpen } from '../Redux/actions/propertyAction';

import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const Trail = ({ open, delay, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: open ? 1 : 0,
        x: open ? 0 : 35,
        from: { opacity: 0, x: 35 },
        delay: (100 * delay)
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", marginLeft: "4rem" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography className="text" style={{
                            textAlign: "left", fontSize: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Slide = React.forwardRef(function Slide(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { transform: "translateY(100%)", opacity: 0 },
        to: { transform: open ? "translateY(0%)" : "translateY(100%)", opacity: open ? 1 : 0 },
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

const SideNav = (props) => {

    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    const springFirst = useSpring({
        to: { width: props.index === 0 ? `4rem` : props.index === 1 ? `2rem` : "1.5rem", transform: props.modalOpen ? "translateY(54px)" : "translateY(0px)", opacity: props.modalOpen ? 0 : 1 },
        from: { width: `1.5rem`, transform: "translateY(0px)", opacity: 1 },
        duration: 400,
    });

    const springSecond = useSpring({
        to: { width: props.index === 1 ? `4rem` : props.index === 0 ? "2rem" : props.index === 2 ? "2rem" : `1.5rem`, transform: props.modalOpen ? "translateY(27px)" : "translateY(0px)", opacity: props.modalOpen ? 0 : 1 },
        from: { width: `1.5rem`, transform: "translateY(0px)", opacity: 1 },
        duration: 400,
    });

    const springThird = useSpring({
        to: { width: props.index === 2 ? `4rem` : props.index === 1 ? `2rem` : props.index === 3 ? "2rem" : `1.5rem`, opacity: props.modalOpen ? 0 : 1 },
        from: { width: `1.5rem`, opacity: 1 },
        duration: 400,
    });

    const springForth = useSpring({
        to: { width: props.index === 3 ? `4rem` : props.index === 2 ? "2rem" : props.index === 4 ? "2rem" : `1.5rem`, transform: props.modalOpen ? "translateY(-27px)" : "translateY(0px)", opacity: props.modalOpen ? 0 : 1 },
        from: { width: `1.5rem`, transform: "translateY(0px)", opacity: 1 },
        duration: 400,
    });

    const springFifth = useSpring({
        to: { width: props.index === 4 ? `4rem` : props.index === 3 ? "2rem" : `1.5rem`, transform: props.modalOpen ? "translateY(-54px)" : "translateY(0px)", opacity: props.modalOpen ? 0 : 1 },
        from: { width: `1.5rem`, transform: "translateY(0px)", opacity: 1 },
        duration: 400,
    });

    const springCancel1 = useSpring({
        to: { opacity: props.modalOpen ? 1 : 0, transform: props.modalOpen ? "translateY(16px) rotate(135deg)" : "translateY(16px) rotate(0deg)", zIndex: props.modalOpen ? 2000 : -1 },
        from: { opacity: 0, transform: "translateY(16px) rotate(0deg)", zIndex: -1 },
        config: { duration: 500 },
    })

    const springCancel2 = useSpring({
        to: { opacity: props.modalOpen ? 1 : 0, transform: props.modalOpen ? "translateY(16px) rotate(225deg)" : "translateY(16px) rotate(0deg)", zIndex: props.modalOpen ? 2000 : -1 },
        from: { opacity: 0, transform: "translateY(16px) rotate(0deg)", zIndex: -1 },
        config: { duration: 500 },
    })

    const handleClick = (index) => {
        if (!props.modalOpen) {
            props.handleNavClick(index);
        } else if (!matches) {
            props.handleNavClick(index);
            handleModalOpen();
        }
    }

    const sideBarAni = useSpring({
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0%)" }
    })

    const handleCancel = () => {
        props.setModalOpen(false);
    }

    const [openModal, setOpenModal] = React.useState(false);

    const springScrollBar = useSpring({
        to: { transform: true ? ` translateY(0px)` : ` translateY(-110%)`, opacity: true ? 1 : 0 },
        from: { transform: ` translateY(110%)`, opacity: 0 },
        config: {
            duration: 600, mass: 1, tension: 280, friction: 60
        },
        delay: 950
    })

    const handleModalOpen = () => {
        props.setModalOpen(!props.modalOpen);
        setOpenModal(!openModal)
    }

    return (
        <React.Fragment>
            { matches ?
                <animated.div style={{
                    ...sideBarAni, position: "fixed", paddingLeft: "40px", height: "fit-content", width: "10vw", left: "0px", top: "45%", display: "flex",
                    justifyContent: "center", flexDirection: "column", zIndex: 2000
                }} >
                    <animated.div style={{ ...springFirst, cursor: "pointer" }} onClick={() => handleClick(0)} >
                        <Divider style={{
                            height: "3px", background: "white", borderRadius: "4px", marginBottom: "16px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                        }} />
                    </animated.div>
                    <animated.div style={{ ...springSecond, cursor: "pointer" }} onClick={() => handleClick(1)} >
                        <Divider style={{
                            height: "3px", background: "white", borderRadius: "4px", marginBottom: "16px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                        }} />
                    </animated.div>
                    <animated.div style={{ ...springThird, cursor: "pointer" }} onClick={() => handleClick(2)}>
                        <Divider style={{
                            height: "3px", background: "white", borderRadius: "4px", marginBottom: "16px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                        }} />
                    </animated.div>
                    <animated.div style={{ ...springForth, cursor: "pointer" }} onClick={() => handleClick(3)}>
                        <Divider style={{
                            height: "3px", background: "white", borderRadius: "4px", marginBottom: "16px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                        }} />
                    </animated.div>
                    <animated.div style={{ ...springFifth, cursor: "pointer" }} onClick={() => handleClick(4)}>
                        <Divider style={{
                            height: "3px", background: "white", borderRadius: "4px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                        }} />
                    </animated.div>
                    <div style={{ position: 'absolute', cursor: "pointer", width: "32px", height: "32px", zIndex: props.modalOpen ? 2000 : -1 }} onClick={() => handleCancel()}>
                        <animated.div style={{ ...springCancel1, position: 'absolute' }} onClick={() => handleCancel()}>
                            <Divider style={{
                                height: "3px", background: "rgb(255, 77, 90)", borderRadius: "4px", width: "2rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                            }} />
                        </animated.div>
                        <animated.div style={{ ...springCancel2, position: 'absolute' }} onClick={() => handleCancel()}>
                            <Divider style={{
                                height: "3px", background: "rgb(255, 77, 90)", borderRadius: "4px", width: "2rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                            }} />
                        </animated.div>
                    </div>
                </animated.div >
                :
                <animated.div style={{ justifyContent: "space-between", display: props.modalOpen ? "none" : "flex", position: "fixed", right: `3.3vmax`, top: `5%`, cursor: "pointer", zIndex: 3000 }}>
                    <div onClick={() => handleModalOpen()}>
                        <UseAnimations animation={menu2} reverse={openModal} speed={2} strokeColor="white" size={45} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={{
                            textAlign: "left", fontSize: `16px`, fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium", color: "white",
                        }}>
                            {props.index + 1}
                        </Typography>
                        <div style={{ width: "15px", height: "2px", background: "rgba(182, 188, 206, 0.7)" }} />
                        <Typography style={{
                            textAlign: "left", fontSize: `16px`, fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium", color: "rgba(182, 188, 206, 0.7)",
                        }}>
                            5
            </Typography>
                    </div>
                    <animated.div style={{ position: 'fixed', bottom: "0px", left: "50%", zIndex: 5, ...springScrollBar, cursor: "pointer", display: openModal || props.modalOpen || props.index === 4 ? "none" : "" }} >
                        <animated.div style={{ transform: "rotate(-90deg) translate(-26px, 0px)" }}>
                            <Typography style={{
                                textAlign: "left", fontSize: `16px`, fontStyle: "normal",
                                ontFamily: "FuturaM", color: "white", transformOrigin: "bottom",
                            }}>
                                scroll
</Typography>
                        </animated.div>
                        <animated.div>
                            <div className="loading_line_wrapper" style={{ width: "40px", transform: "rotate(90deg) translate(20px, 19px)" }}>
                                <div className="loading_line" style={{ width: "40px", transform: "rotate(90deg) translate(20px, 19px)" }}>
                                    <div className="loading_line_inner loading_line_inner--1"></div>
                                    <div className="loading_line_inner loading_line_inner--2"></div>
                                </div>
                            </div>
                            <div style={{ height: "40px", background: "#333", width: "2px" }} />
                        </animated.div>
                    </animated.div>
                    <Modal
                        open={openModal}
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Slide in={openModal}>
                            <animated.div style={{ height: "100vh", backgroundColor: "rgba(25,25,25, 0.9)", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div style={{ height: "60vh", display: "flex", flexDirection: "column", boxSizing: "border-box", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", cursor: "pointer" }} onClick={() => handleClick(0)} >
                                        <Typography style={{
                                            textAlign: "left", fontSize: "calc(16px + (18 - 12) * ((100vw - 300px) / (1000 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: props.index === 0 ? "white" : "#5F5E66"
                                        }} >.01</Typography>
                                        <Trail open={true} delay={0}>
                                            <span style={{ color: props.index === 0 ? "white" : "#5F5E66" }}>Landing</span>
                                            <span>{'\u00A0'}</span>
                                            <span style={{ color: props.index === 0 ? "white" : "#5F5E66" }}>Page</span>
                                        </Trail>
                                    </div>
                                    <div style={{ display: "flex", cursor: "pointer" }} onClick={() => handleClick(1)}>
                                        <Typography style={{
                                            textAlign: "left", fontSize: "calc(16px + (18 - 12) * ((100vw - 300px) / (1000 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: props.index === 1 ? "white" : "#5F5E66"
                                        }} >.02</Typography>
                                        <Trail open={true} delay={1}>
                                            <span style={{ color: props.index === 1 ? "white" : "#5F5E66" }}>About</span>
                                            <span>{'\u00A0'}</span>
                                            <span style={{ color: props.index === 1 ? "white" : "#5F5E66" }}>Me</span>
                                        </Trail>
                                    </div>
                                    <div style={{ display: "flex", cursor: "pointer" }} onClick={() => handleClick(2)}>
                                        <Typography style={{
                                            textAlign: "left", fontSize: "calc(12px + (18 - 12) * ((100vw - 300px) / (1000 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: props.index === 2 ? "white" : "#5F5E66"
                                        }} >.03</Typography>
                                        <Trail open={true} delay={2}>
                                            <span style={{ color: props.index === 2 ? "white" : "#5F5E66" }}>Project:</span>
                                            <span>{'\u00A0'}</span>
                                            <span style={{ color: props.index === 2 ? "white" : "#5F5E66" }}>EXP|CON</span>
                                        </Trail>
                                    </div>
                                    <div style={{ display: "flex", cursor: "pointer" }} onClick={() => handleClick(3)}>
                                        <Typography style={{
                                            textAlign: "left", fontSize: "calc(16px + (18 - 12) * ((100vw - 300px) / (1000 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: props.index === 3 ? "white" : "#5F5E66"
                                        }} >.04</Typography>
                                        <Trail open={true} delay={3}>
                                            <span style={{ color: props.index === 3 ? "white" : "#5F5E66" }}>Project:</span>
                                            <span>{'\u00A0'}</span>
                                            <span style={{ color: props.index === 3 ? "white" : "#5F5E66" }}>UAssist</span>
                                        </Trail>
                                    </div>
                                    <div style={{ display: "flex", cursor: "pointer" }} onClick={() => handleClick(4)}>
                                        <Typography style={{
                                            textAlign: "left", fontSize: "calc(16px + (18 - 12) * ((100vw - 300px) / (1000 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: props.index === 4 ? "white" : "#5F5E66"
                                        }} >.05</Typography>
                                        <Trail open={true} delay={4}>
                                            <span style={{ color: props.index === 4 ? "white" : "#5F5E66" }}>Contact</span>
                                            <span>{'\u00A0'}</span>
                                            <span style={{ color: props.index === 4 ? "white" : "#5F5E66" }}>Me</span>
                                        </Trail>
                                    </div>
                                </div>
                            </animated.div>
                        </Slide>
                    </Modal>
                </animated.div>
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);