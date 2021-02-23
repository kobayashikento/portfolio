import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Scrollbars } from 'react-custom-scrollbars';

import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Divider from '@material-ui/core/Divider';

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
            <div style={{ height: "100vh" }} />
            <div style={{ background: "linear-gradient(rgb(240,242,244) 66%, #fff 60%)", width: "100%", display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                <div style={{ top: "105%", left: "4%", zIndex: 5, cursor: "pointer", position: "absolute" }}>
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
                <div style={{ display: 'flex', paddingTop: "3%" }}>
                    <div style={{ margin: "1.4rem", display: "flex", flexDirection: "column" }}>
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
                    <div style={{ margin: "1.4rem", display: "flex", flexDirection: "column" }}>
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
                    <div style={{ margin: "1.4rem", display: "flex", flexDirection: "column" }}>
                        <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                            Date
                    </Typography>
                        <Typography style={{ width: "max-content", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                            {props.content.dateText}
                        </Typography>
                    </div>
                    <div style={{ margin: "1.4rem", display: "flex", flexDirection: "column", maxWidth: "10rem" }}>
                        <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                            Overview
                    </Typography>
                        <Typography style={{ maxWidth: "12rem", width: "max-content", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                            {props.content.overviewText}
                        </Typography>
                    </div>
                </div>
                <img src={props.content.mockOverview} style={{ marginTop: "4%", height: "auto", width: props.content.mainPicWidth, borderRadius: "3px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }} />
                <div style={{ marginTop: "5%", paddingBottom: "5%" }}>
                    <div style={{ position: "absolute", left: "0%", display: "flex", alignItems: "center", marginBottom: "10%" }}>
                        <Divider style={{ height: "4px", background: "rgba(7, 33, 66, 0.9)", borderRadius: "4px", width: "1.5rem", marginRight: "1rem" }} />
                        <Typography style={{
                            width: "max-content", color: "#ff4d5a", fontFamily: "'Abril Fatface', cursive", fontSize: "2.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)"
                        }}>
                            01
                    </Typography>
                    </div>
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
            <img src={props.content.mockAll} style={{ width: '100%', borderRadius: "3px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }} />
            {props.content.longpic1 !== null ?
                <div style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(#fff 33%, rgb(240,242,244) 33%)", paddingBottom: "4%" }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "4%" }}>
                        <div style={{ position: "absolute", left: "0%", display: "flex", alignItems: "center", marginBottom: "9%" }}>
                            <Divider style={{ height: "4px", background: "rgba(7, 33, 66, 0.9)", borderRadius: "4px", width: "1.5rem", marginRight: "1rem" }} />
                            <Typography style={{
                                width: "max-content", color: "#ff4d5a", fontFamily: "'Abril Fatface', cursive", fontSize: "2.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)"
                            }}>
                                02
                    </Typography>
                        </div>
                        <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                            Focuses
                            </Typography>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex" }}>
                                <Typography style={{ marginLeft: "4rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.8)", fontFamily: "FuturaM", fontSize: "18px", letterSpacing: "1px" }}>
                                    Development
                        </Typography>
                                <Typography style={{ marginLeft: "2rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                    {props.content.focusDevText}
                                </Typography>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3rem" }}>
                                <Typography style={{ marginLeft: "4rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.8)", fontFamily: "FuturaM", fontSize: "18px", letterSpacing: "1px" }}>
                                    Design
                        </Typography>
                                <Typography style={{ marginLeft: "2rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                    {props.content.focusDesignText}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "77vw", display: "flex", justifyContent: "space-between", marginTop: "4%" }}>
                        <img src={props.content.longpic1} style={{ height: "auto", width: '47%', borderRadius: "3px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }} />
                        <img src={props.content.longpic2} style={{ height: props.picHeight, width: '47%', borderRadius: "3px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }} />
                    </div>
                </div>
                :
                <div style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "white", transform: "translateY(-2%)" }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "4%", paddingBottom: "4%" }}>
                        <div style={{ position: "absolute", left: "0%", display: "flex", alignItems: "center", marginBottom: "9%" }}>
                            <Divider style={{ height: "4px", background: "rgba(7, 33, 66, 0.9)", borderRadius: "4px", width: "1.5rem", marginRight: "1rem" }} />
                            <Typography style={{
                                width: "max-content", color: "#ff4d5a", fontFamily: "'Abril Fatface', cursive", fontSize: "2.5rem", textShadow: "0 10px 30px rgba(2, 11, 22, 0.25)"
                            }}>
                                02
                    </Typography>
                        </div>
                        <Typography style={{ width: "max-content", color: "black", fontFamily: "FuturaB", fontSize: "2rem", fontWeight: "bold", letterSpacing: "3px", marginBottom: "6px" }}>
                            Focuses
                        </Typography>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex" }}>
                                <Typography style={{ marginLeft: "4rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.8)", fontFamily: "FuturaM", fontSize: "18px", letterSpacing: "1px" }}>
                                    Development
                    </Typography>
                                <Typography style={{ marginLeft: "2rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                    {props.content.focusDevText}
                                </Typography>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3rem" }}>
                                <Typography style={{ marginLeft: "4rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.8)", fontFamily: "FuturaM", fontSize: "18px", letterSpacing: "1px" }}>
                                    Design
                    </Typography>
                                <Typography style={{ marginLeft: "2rem", maxWidth: "30rem", color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaM", fontSize: "14px", letterSpacing: "1px" }}>
                                    {props.content.focusDesignText}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "10vh", width: "100%", background: "rgb(240,242,244)" }} />
                </div>
            }
        </Scrollbars >
    )
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.propertyReducer.modalOpen,
    }
}

export default connect(mapStateToProps)(ProductInfo);