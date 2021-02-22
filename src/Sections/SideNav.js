import React from 'react';

import { useSpring, animated } from 'react-spring'
import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';
import { setModalOpen } from '../Redux/actions/propertyAction';

const SideNav = (props) => {

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
        to: { opacity: props.modalOpen ? 1 : 0, transform: props.modalOpen ? "rotate(135deg)" : "rotate(0deg)" },
        from: { opacity: 0, transform: "rotate(0deg)" },
        config: { duration: 500 },
    })

    const springCancel2 = useSpring({
        to: { opacity: props.modalOpen ? 1 : 0, transform: props.modalOpen ? "rotate(225deg)" : "rotate(0deg)" },
        from: { opacity: 0, transform: "rotate(0deg)" },
        config: { duration: 500 },
    })

    const handleClick = (index) => {
        if (!props.modalOpen) {
            props.handleNavClick(index);
        }
    }

    const sideBarAni = useSpring({
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0%)" }
    })

    const handleCancel = () => {
        props.setModalOpen(false);
    }

    return (
        <animated.div style={{ ...sideBarAni, position: "fixed", paddingLeft: "40px", height: "fit-content", width: "10vw", left: "0px", top: "45%", display: "flex", justifyContent: "center", flexDirection: "column", zIndex: 2000 }}>
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
            <div style={{ position: 'absolute', cursor: "pointer" }} onClick={() => handleCancel()}>
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
        </animated.div>
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