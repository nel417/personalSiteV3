import React from "react";
import { ThemeProvider, List, Video, Modal, Frame, Tree } from "@react95/core";
import { Computer } from "@react95/icons";
import { treeNodes } from "./treeNodes";
import Taskbarr from "./Components/Taskbarr";
import "@react95/icons/icons.css";
import "./App.css";
import HomePrograms from "./Components/HomePrograms";

function App() {
  const [showModal, toggleShowModal] = React.useState(false);
  // const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);

  return (
    <div className="mainContain">
      <ThemeProvider theme="storm">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <HomePrograms />
          </div>
          <div style = {{padding: ' 34px'}}>
            <Tree {...treeNodes} />
          </div>
        </div>
        <Modal
          width="400"
          height="300"
          icon={<Computer variant="32x32_4" />}
          title="Bio"
          defaultPosition={{
            x: 500,
            y: 200,
          }}
          closeModal={handleCloseModal}
          buttons={[
            {
              value: "Cancel",
              onClick: handleCloseModal,
            },
          ]}
          menu={[
            {
              name: "File",
              list: (
                <List>
                  <List.Item onClick={handleCloseModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: "Edit",
              list: (
                <List>
                  <List.Item>Copy</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame bg="white" boxShadow="in" h="100%" w="100%" padding="0px 5px">
            <p>
              Bonjour je m'appelle Nick. Je habite St Louis MO. I am a software
              engineer specilizing in growth. I enjoy creating data driven
              features, experiments, and rapid prototyping. I primarily work in
              the front end, but I was an SRE in a previous life. I have an
              affinity for open source, web accessibility, and trying to build
              projects in esoteric tech stacks (one day i will make my website
              in cobol) to view my projects, websites, links, social media
              stuff, click the start button below. Thanks for stopping by! (you
              can drag this window)
            </p>
          </Frame>
        </Modal>

        <Taskbarr />
      </ThemeProvider>
    </div>
  );
}

export default App;
