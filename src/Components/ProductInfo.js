import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Scrollbars } from 'react-custom-scrollbars';

import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton'

const ProductInfo = (props) => {
    // layout 
    // 1 - 100vh 
    // 2 - 120vh => product show case main menu
    // 3 - 90 vh => product show case each section

    // what i need from props
    // 1 - a) prodouctShowCase: show case image for 2 (mobile + desktop iamge)
    //     b) role: 'string' description of role 

    // Mockup psd created by aleksandr_samochernyi - www.freepik.com

    const scrollbarRef = React.useRef(null);

    const matches = useMediaQuery('(min-width:600px)');

    React.useEffect(() => {
        setTimeout(() => {
            scrollbarRef.current.view.scroll({
                top: window.innerHeight * 0.25,
                left: 0,
                behavior: 'smooth'
            });
        }, 200);
    }, [])

    return (
        <Scrollbars
            autoHide
            style={{ width: "100vw", height: "100vh" }}
            ref={scrollbarRef}
        >
            <div style={{ top: "100vh", right: "0", position: "absolute", height: "150vh", background: "linear-gradient(rgb(240,242,244) 66%, #fff 60%)", width: "100%", display: "flex", justifyContent: 'center' }}>
                <div style={{ display: "flex", height: "fit-content", flexDirection: "column", alignItems: "center" }}>
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
                    <div style={{ display: 'flex', paddingTop: "4%" }}>
                        <div style={{ margin: "1.3rem", display: "flex", flexDirection: "column" }}>
                            <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                                Duties
                    </Typography>
                            {props.content.dutiesText.map(text => {
                                return (
                                    <Typography style={{ width: "max-content", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                        {text}
                                    </Typography>
                                )
                            })}
                        </div>
                        <div style={{ margin: "1.3rem", display: "flex", flexDirection: "column" }}>
                            <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                                Tech
                    </Typography>
                            {props.content.techText.map(text => {
                                return (
                                    <Typography style={{ width: "max-content", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                        {text}
                                    </Typography>
                                )
                            })}
                        </div >
                        <div style={{ margin: "1.3rem", display: "flex", flexDirection: "column" }}>
                            <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                                Date
                    </Typography>
                            <Typography style={{ width: "max-content", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                {props.content.dateText}
                            </Typography>
                        </div>
                        <div style={{ margin: "1.3rem", display: "flex", flexDirection: "column", maxWidth: "10rem" }}>
                            <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                                Overview
                    </Typography>
                            <Typography style={{ maxWidth: "12rem", width: "max-content", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                {props.content.overviewText}
                            </Typography>
                        </div>
                    </div>
                    <img src={props.content.mockOverview} style={{ marginTop: "18%", height: "auto", width: '70%', position: "absolute", borderRadius: "3px" }} />
                    <div style={{ bottom: "0", position: "absolute" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                                Details
                            </Typography>
                            <Typography style={{ marginLeft: "5rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                {props.content.detailsText}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: "relative", height: "110vh", top: "250vh", width: "100vw", overflow: "hidden", background: "white" }}>
                <img src={props.content.mockAll} style={{ marginTop: "5%", height: "auto", width: '100%', position: "absolute", borderRadius: "3px" }} />
            </div>
            <div style={{ position: "relative", height: "20vh", top: "250vh", width: "100vw", background: "white", display: "flex", justifyContent: "center" }}>
            </div>
            <div style={{ top: "240vh", width: "100vw", display: "flex", justifyContent: "center", background: "rgb(240,242,244)", position: "relative", paddingBottom: "10vh" }}>
                <div style={{ width: "77vw", display: "flex", justifyContent: "space-between" }}>
                    <img src={props.content.longpic1} style={{ marginTop: "5rem", height: "auto", width: '47%', borderRadius: "3px" }} />
                    <img src={props.content.longpic2} style={{ marginTop: "5rem", height: props.picHeight, width: '47%', borderRadius: "3px" }} />
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

export default connect(mapStateToProps)(ProductInfo);