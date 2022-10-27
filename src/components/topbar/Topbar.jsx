import React from "react";
import "./topbar.css";
import { NotificationsNone, Search, Settings, DashboardOutlined } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Search />
          </div>
          <img src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtMzcuNjAyIDBoNjc2LjhjMjAuNzY2IDAgMzcuNjAyIDIwLjc2NiAzNy42MDIgMzcuNjAydjY3Ni44YzAgMjAuNzY2LTE2LjgzNiAzNy42MDItMzcuNjAyIDM3LjYwMmgtNjc2LjhjLTIwLjc2NiAwLTM3LjYwMi0yMC43NjYtMzcuNjAyLTM3LjYwMnYtNjc2LjhjMC0yMC43NjYgMTYuODM2LTM3LjYwMiAzNy42MDItMzcuNjAyeiIgZmlsbD0iI2YxZjNmNiIvPgogIDxwYXRoIGQ9Im0zNTYuNTggMjUxLjEzaC05Ni4xOTVjLTUuMDg1OSAwLTkuMjUgNC4xNjQxLTkuMjUgOS4yNXY5Ni4xOTVjMCA1LjA4NTkgNC4xNjQxIDkuMjUgOS4yNSA5LjI1aDk2LjE5NWM1LjA4NTkgMCA5LjI1LTQuMTY0MSA5LjI1LTkuMjV2LTk2LjE5NWMwLTUuMDg5OC00LjE2NDEtOS4yNS05LjI1LTkuMjV6bS05LjI1IDk2LjE5NWgtNzcuNjk1di03Ny42OTVoNzcuNjk1eiIgZmlsbD0iIzQ2NDU0NSIvPgogIDxwYXRoIGQ9Im00OTEuNjIgMjUxLjEzaC05Ni4xOTVjLTUuMDg1OSAwLTkuMjUgNC4xNjQxLTkuMjUgOS4yNXY5Ni4xOTVjMCA1LjA4NTkgNC4xNjQxIDkuMjUgOS4yNSA5LjI1aDk2LjE5NWM1LjA4NTkgMCA5LjI1LTQuMTY0MSA5LjI1LTkuMjV2LTk2LjE5NWMwLTUuMDg5OC00LjE2MDItOS4yNS05LjI1LTkuMjV6bS05LjI1IDk2LjE5NWgtNzcuNjk1di03Ny42OTVoNzcuNjk1eiIgZmlsbD0iIzQ2NDU0NSIvPgogIDxwYXRoIGQ9Im0zNTYuNTggMzg2LjE4aC05Ni4xOTVjLTUuMDg1OSAwLTkuMjUgNC4xNjQxLTkuMjUgOS4yNXY5Ni4xOTVjMCA1LjA4NTkgNC4xNjQxIDkuMjUgOS4yNSA5LjI1aDk2LjE5NWM1LjA4NTkgMCA5LjI1LTQuMTY0MSA5LjI1LTkuMjV2LTk2LjE5NWMwLTUuMDg1OS00LjE2NDEtOS4yNS05LjI1LTkuMjV6bS05LjI1IDk2LjE5NWgtNzcuNjk1di03Ny42OTVoNzcuNjk1eiIgZmlsbD0iIzQ2NDU0NSIvPgogIDxwYXRoIGQ9Im00OTEuNjIgMzg2LjE4aC05Ni4xOTVjLTUuMDg1OSAwLTkuMjUgNC4xNjQxLTkuMjUgOS4yNXY5Ni4xOTVjMCA1LjA4NTkgNC4xNjQxIDkuMjUgOS4yNSA5LjI1aDk2LjE5NWM1LjA4NTkgMCA5LjI1LTQuMTY0MSA5LjI1LTkuMjV2LTk2LjE5NWMwLTUuMDg1OS00LjE2MDItOS4yNS05LjI1LTkuMjV6bS05LjI1IDk2LjE5NWgtNzcuNjk1di03Ny42OTVoNzcuNjk1eiIgZmlsbD0iIzQ2NDU0NSIvPgogPC9nPgo8L3N2Zz4K" className="icon2"/>
          <img src = "https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg" className="icon1" />
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">4</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCGcIMVi1dTFh9C7OylT9UqROc5A52yDGPA&usqp=CAU" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
