import React from 'react';

import { useSpring, animated } from 'react-spring'
import Divider from '@material-ui/core/Divider';

const SideNav = (props) => {

    const springFirst = useSpring({
        to: { width: props.index === 0 ? `3rem` : `1.5rem` },
        from: { transform: `1.5rem` },
        duration: 400,
    })

    const springSecond = useSpring({
        to: { width: props.index === 1 ? `3rem` : `1.5rem` },
        from: { transform: `1.5rem` },
        duration: 400,
    })

    const handleClick = (index) => {
        props.handleNavClick(index);
    }

    return (
        <div style={{ position: "fixed", paddingLeft: "40px", height: "100vh", left: "0px", top: "0px", display: "flex", justifyContent: "center", flexDirection: "column", zIndex: 3 }}>
            <animated.div style={{ ...springFirst }}>
                <Divider style={{
                    height: "5px", background: "white", borderRadius: "4px", marginBottom: "0.7rem", marginBottom: "36px", cursor: "pointer",
                    textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                }} onClick={() => handleClick(0)} />
            </animated.div>
            <animated.div style={{ ...springSecond }}>
                <Divider style={{
                    height: "5px", background: "white", borderRadius: "4px", marginBottom: "0.7rem", cursor: "pointer",
                    textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                }} onClick={() => handleClick(1)} />
            </animated.div>
        </div>
    )
}

export default React.memo(SideNav);