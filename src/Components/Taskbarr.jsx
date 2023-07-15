import React from "react";
import { TaskBar, List, Modal } from "@react95/core";
import "@react95/icons/icons.css";

import {
  ReaderClosed,
  WindowsExplorer,
  FolderExe2,
  FolderExe,
  MicrosoftExchange,
  MicrosoftNetwork,
  Settings,
  HelpBook,
  LoaderBat,
  FolderSettings,
  FolderPrint,
  FileFind,
  Computer3,
} from "@react95/icons";

const Taskbarr = () => {
  const [first, toggleFirst] = React.useState(false);
  const [second, toggleSecond] = React.useState(false);
  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);
  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          closeModal={closeFirst}
          width="300"
          height="200"
        />
      )}

      {second && (
        <Modal
          defaultPosition={{
            x: 50,
            y: 50,
          }}
          width="300"
          height="200"
          icon={<ReaderClosed variant="16x16_4" />}
          title="Local Disk (C:)"
          closeModal={closeSecond}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item icon={<FolderExe2 variant="32x32_4" />}>
              <List>
                <List.Item icon={<FolderExe variant="16x16_4" />}>
                  <a href="https://github.com/nel417/NLP_API" target="_blank">
                    Natural Language Processing Api
                  </a>
                </List.Item>
                <List.Item icon={<FolderExe variant="16x16_4" />}>
                  <a
                    href="https://nel417.github.io/KanbanBoard/"
                    target="_blank"
                  >
                    Kanban Board
                  </a>
                </List.Item>
                <List.Item icon={<MicrosoftExchange variant="16x16_4" />}>
                  <a
                    href="https://medium.com/@xnel417x/simple-english-to-french-translation-app-using-python-streamlit-and-helsinki-nlp-opus-mt-e94bec8b2883"
                    target="_blank"
                  >
                    English to French translation app
                  </a>
                </List.Item>
                <List.Item icon={<MicrosoftNetwork variant="16x16_4" />}>
                  <a
                    href="https://nel417.github.io/workout_bank_alpine/"
                    target="_blank"
                  >
                    Fitness App
                  </a>
                </List.Item>
                <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
                  <a href="https://medium.com/@xnel417x/create-a-pomodoro-timer-using-golang-5ede5286e089" target='_blank'>Pomodoro Timer</a>
                </List.Item>
              </List>
              Projects
            </List.Item>
            <List.Item icon={<Settings variant="32x32_4" />}>
              <List>
                <List.Item icon={<FolderSettings variant="16x16_4" />}>
                  Grafana
                </List.Item>
                <List.Item icon={<FolderPrint variant="16x16_4" />}>
                  NodeJS
                </List.Item>
                <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
                  RawCMS
                </List.Item>
              </List>
              Open Source Contributions
            </List.Item>
            <List.Item icon={<LoaderBat variant="32x32_4" />}>
              {" "}
              <a href="https://github.com/nel417" target="_blank">
                GitHub
              </a>
            </List.Item>
            <List.Item icon={<HelpBook variant="32x32_4" />}>
              <a href="https://medium.com/@xnel417x" target="_blank">
                Blog
              </a>
            </List.Item>
            <List.Item icon={<FileFind variant="32x32_4" />}>
              <a href="https://www.youtube.com/watch?v=Ek7rbkipHs0" target="_blank">Open Source Presentation</a>
            </List.Item>
            <List.Divider />
            <List.Item icon={<Computer3 variant="32x32_4" />}>
              Shut Down...
            </List.Item>
          </List>
        }
      />
    </>
  );
};

export default Taskbarr;
