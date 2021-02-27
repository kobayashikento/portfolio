import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '@material-ui/core/Typography';

const WorkValues = (props) => {
    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    return (
        <React.Fragment>
            {
                matches ?
                    <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }
                    } >
                        {props.content.icon}
                        < div style={{ display: "flex", flexDirection: "column", marginLeft: "1.1vmax", marginTop: "1.1vmax" }
                        }>
                            <Typography style={{
                                width: "max-content", color: "black", fontWeight: "bold", fontFamily: "FuturaB", fontSize: "24px", lineHeight: "36px", letterSpacing: "2px"
                            }}>
                                {props.content.value}
                            </Typography>
                            <Typography align="left" style={{
                                color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaB", maxWidth: "13rem", fontWeight: "400", fontSize: "16px",
                            }}>
                                {props.content.info}
                            </Typography>
                        </div >
                    </div >
                    :
                    <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
                        {props.content.icon}
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "1.1vmax", marginTop: "1.1vmax" }}>
                            <Typography style={{
                                width: "max-content", color: "black", fontWeight: "bold", fontFamily: "FuturaB", fontSize: "17px", lineHeight: "22px", letterSpacing: "2px"
                            }}>
                                {props.content.value}
                            </Typography>
                            <Typography align="left" style={{
                                color: "rgba(0,0,0, 0.5)", fontFamily: "FuturaB", maxWidth: "13rem", fontWeight: "400", fontSize: "14px",
                            }}>
                                {props.content.info}
                            </Typography>
                        </div>
                    </div>
            }
        </React.Fragment>
    )
}

export default React.memo(WorkValues);