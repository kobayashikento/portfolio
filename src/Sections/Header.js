import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton, Tooltip } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = (props) => {
    return (
        <div style={{ position: "fixed", padding: "40px", top: "0px", left: "0px", zIndex: 2, display: "flex", width: "100%", boxSizing: "border-box", justifyContent: "space-between" }}>
            <Tooltip title="Reload Website">
                <Button onClick={() => { window.location.reload(false) }} style={{ background: "transparent", padding: "0px" }}>
                    <Typography style={{ width: "max-content", color: "white", fontFamily: "FuturaB", fontSize: "14px", letterSpacing: "4px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                        Kento Kobayashi
                    </Typography>
                </Button>
            </Tooltip>
            <div style={{ right: "0px", top: "0px" }}>
                <Tooltip title="To Github">
                    <IconButton style={{ color: "white", marginRight: "2.3rem", padding: "0px" }} onClick={() => { window.open("https://github.com/kobayashikento") }}>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="To LinkedIn">
                    <IconButton style={{ color: "white", marginRight: "1.1rem",  padding: "0px"}} onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }}>
                        <LinkedInIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default React.memo(Header)