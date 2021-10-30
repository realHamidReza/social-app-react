import React from "react";
import "./sidebar.css";
import { Users } from "../../dummyData";
import {
    RssFeed,
    Chat,
    PlayCircleFilled,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <RssFeed className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Feed</span>
                    </li>
                    <li className="sidebarItem">
                        <Chat className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Chats</span>
                    </li>
                    <li className="sidebarItem">
                        <PlayCircleFilled className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Videos</span>
                    </li>
                    <li className="sidebarItem">
                        <Group className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Groups</span>
                    </li>
                    <li className="sidebarItem">
                        <Bookmark className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Bookmarks</span>
                    </li>
                    <li className="sidebarItem">
                        <HelpOutline className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Questions</span>
                    </li>
                    <li className="sidebarItem">
                        <WorkOutline className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Jobs</span>
                    </li>
                    <li className="sidebarItem">
                        <Event className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Events</span>
                    </li>
                    <li className="sidebarItem">
                        <School className="sidebarItemIcon" />
                        <span className="sidebarItemTxt">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
