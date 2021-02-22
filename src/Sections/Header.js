import React from 'react';

import Typography from '@material-ui/core/Typography';

import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import mail from 'react-useanimations/lib/mail';
import menu2 from 'react-useanimations/lib/menu2';

const Header = (props) => {

    return (
        <div style={{ position: "fixed", padding: "40px", zIndex: 2000, display: "flex", width: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
            <div onClick={() => { window.location.reload(false) }}>
                <Typography
                    style={{
                        width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "14px", letterSpacing: "3px",
                        marginTop: "2px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)", cursor: "pointer"
                    }}>
                    Kento Kobayashi
                    </Typography>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ cursor: "pointer", marginRight: "1.1rem" }} onClick={() => { window.open("https://github.com/kobayashikento") }}>
                    <UseAnimations animation={github} loop={true} strokeColor="white" size={28} />
                </div>
                <div style={{ cursor: "pointer", marginRight: "1.1rem" }} onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }}>
                    <UseAnimations animation={linkedin} loop={true} strokeColor="white" size={28} />
                </div>
                <div style={{ cursor: "pointer", marginRight: "2.2rem" }} onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                    <UseAnimations animation={mail} autplay="true" strokeColor="white" size={28} />
                </div>
                <div style={{ cursor: "pointer", marginRight: "1.1rem", transform: "translateY(-9px)" }}  >
                    <UseAnimations animation={menu2} autplay="true" strokeColor="white" size={45} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Header)