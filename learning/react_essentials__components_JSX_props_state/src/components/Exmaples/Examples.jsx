import {useState} from "react";

import Tabs from "../Tabs";
import TabButton from "../TabButton";

import {EXAMPLES} from "../../data";
import Section from "../Section/Section";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function onSelectHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please click a tab button</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelectedTab={selectedTopic === "components"}
              onClick={() => onSelectHandler("components")}
            >Components</TabButton>
            <TabButton
              isSelectedTab={selectedTopic === "jsx"}
              onClick={() => onSelectHandler("jsx")}
            >JSX</TabButton>
            <TabButton
              isSelectedTab={selectedTopic === "props"}
              onClick={() => onSelectHandler("props")}
            >Props</TabButton>
            <TabButton
              isSelectedTab={selectedTopic === "state"}
              onClick={() => onSelectHandler("state")}
            >State</TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;