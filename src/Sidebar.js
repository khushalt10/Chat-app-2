import React from 'react'
import './Sidebar.css'

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Khushal's Server</h3>
                <ExpandMoreRoundedIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreRoundedIcon />
                        <h4>Text Channels</h4>
                    </div>

                <AddIcon className="sidebar__addChannel" />
                </div>

            <div className="sidebar__channelsList">
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src="data:image/jpeg;base64,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" />
                <div className="sidebar__profileInfo">
                    <h3>@_khussshal_</h3>
                    <p>#3371</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
