import React from 'react';

import Typography from '@material-ui/core/Typography';

import { animated, useSpring } from 'react-spring';

import { connect } from 'react-redux';

import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import mail from 'react-useanimations/lib/mail';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = (props) => {

    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    return (
        <React.Fragment>
            {matches ?
                <div style={{ position: "fixed", padding: "40px", zIndex: 2000, display: "flex", width: "100%", boxSizing: "border-box", justifyContent: "space-between" }
                } >
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
                    </div>
                </div >
                :
                <div style={{ position: "fixed", zIndex: 2000, display: props.modalOpen ? "none" : "flex", width: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
                    <div onClick={() => { window.location.reload(false) }}>
                        <Typography
                            style={{
                                width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "14px", letterSpacing: "3px", marginLeft: "3.3vmax",
                                marginTop: "5.5vmax", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)", cursor: "pointer"
                            }}>
                            Kento Kobayashi
                </Typography>
                    </div>
                </div>
            }
        </React.Fragment >
    )
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.propertyReducer.modalOpen,
    }
}

export default connect(mapStateToProps)(Header)