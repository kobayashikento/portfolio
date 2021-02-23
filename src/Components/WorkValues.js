import React from 'react';

import Typography from '@material-ui/core/Typography';

const WorkValues = (props) => {

    return (
        <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
            {props.content.icon}
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "1.1vmax", marginTop: "1.1vmax" }}>
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
            </div>
        </div>
    )
}

export default React.memo(WorkValues);