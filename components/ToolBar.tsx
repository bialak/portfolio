"use client";
import React from "react";
import {
  ExplorerIcon,
  ExtensionsIcon,
  RunAndDebugIcon,
  SearchIcon,
  SourceControlIcon,
} from "@/components/icons/index";
import { useState } from "react";

export enum ToolbarIcon {
  Explorer = "explorer",
  Extensions = "extensions",
  RunAndDebug = "runAndDebug",
  Serach = "search",
  SourceControl = "SourceConstrol",
}

export default function ToolBar() {
  const [activeIcon, setActiveIcon] = useState<ToolbarIcon | null>(
    ToolbarIcon.Explorer
  );

  const toolbarIcons = [
    {
      type: ToolbarIcon.Explorer,
      icon: (
        <ExplorerIcon
          handleClick={() => changeActiveElement(ToolbarIcon.Explorer)}
          key={ToolbarIcon.Explorer}
          active={activeIcon === ToolbarIcon.Explorer}
        />
      ),
    },
    {
      type: ToolbarIcon.Extensions,
      icon: (
        <ExtensionsIcon
          handleClick={() => changeActiveElement(ToolbarIcon.Extensions)}
          key={ToolbarIcon.Extensions}
          active={activeIcon === ToolbarIcon.Extensions}
        />
      ),
    },
    {
      type: ToolbarIcon.RunAndDebug,
      icon: (
        <RunAndDebugIcon
          handleClick={() => changeActiveElement(ToolbarIcon.RunAndDebug)}
          key={ToolbarIcon.RunAndDebug}
          active={activeIcon === ToolbarIcon.RunAndDebug}
        />
      ),
    },
    {
      type: ToolbarIcon.Serach,
      icon: (
        <SearchIcon
          handleClick={() => changeActiveElement(ToolbarIcon.Serach)}
          key={ToolbarIcon.Serach}
          active={activeIcon === ToolbarIcon.Serach}
        />
      ),
    },
    {
      type: ToolbarIcon.SourceControl,
      icon: (
        <SourceControlIcon
          handleClick={() => changeActiveElement(ToolbarIcon.SourceControl)}
          key={ToolbarIcon.SourceControl}
          active={activeIcon === ToolbarIcon.SourceControl}
        />
      ),
    },
  ];

  const changeActiveElement = (clickedIcon: ToolbarIcon) => {
    setActiveIcon(clickedIcon);
    console.log(activeIcon);
  };

  return (
    <>
      <div className="leftBar">{toolbarIcons.map((icon) => icon.icon)}</div>
    </>
  );
}
