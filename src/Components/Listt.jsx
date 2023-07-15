import React from "react";
import { List } from "@react95/core";
import {
  FolderExe2,
  FolderExe,
  MicrosoftExchange,
  MicrosoftNetwork,
  WindowsExplorer,
  Settings,
  HelpBook,
  LoaderBat,
  FolderSettings,
  FolderPrint,
  FileFind,
  Computer3,
} from "@react95/icons";
import "@react95/icons/icons.css";

const Listt = () => {
  return (
  <List>
    <List.Item icon={<FolderExe2 variant="32x32_4" />}>
      <List>
        <List.Item icon={<FolderExe variant="16x16_4" />}>
          Natural Language Processing Api
        </List.Item>
        <List.Item icon={<FolderExe variant="16x16_4" />}>Kanban Board</List.Item>
        <List.Item icon={<MicrosoftExchange variant="16x16_4" />}>
          Translation App
        </List.Item>
        <List.Item icon={<MicrosoftNetwork variant="16x16_4" />}>
          Fitness App
        </List.Item>
        <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
          Rest API
        </List.Item>
      </List>
      Programs
    </List.Item>
    <List.Item icon={<Settings variant="32x32_4" />}>
      <List>
        <List.Item icon={<FolderSettings variant="16x16_4" />}>
          GitHub
        </List.Item>
        <List.Item icon={<FolderPrint variant="16x16_4" />}>Blog</List.Item>
        <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
          Email
        </List.Item>
      </List>
      Contact
    </List.Item>
    <List.Item icon={<FileFind variant="32x32_4" />}>Find</List.Item>
    <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>
    <List.Item icon={<LoaderBat variant="32x32_4" />}>Run...</List.Item>
    <List.Divider />
    <List.Item icon={<Computer3 variant="32x32_4" />}>Shut Down...</List.Item>
  </List>
  )
};

export default Listt;
