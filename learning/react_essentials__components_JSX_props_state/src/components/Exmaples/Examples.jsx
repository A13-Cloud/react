import {useState} from "react";

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
    <Section title="Examples">
      <menu>
        <TabButton
          selectedTab={selectedTopic === "components"}
          onSelect={() => onSelectHandler("components")}
        >Components</TabButton>
        <TabButton
          selectedTab={selectedTopic === "jsx"}
          onSelect={() => onSelectHandler("jsx")}
        >JSX</TabButton>
        <TabButton
          selectedTab={selectedTopic === "props"}
          onSelect={() => onSelectHandler("props")}
        >Props</TabButton>
        <TabButton
          selectedTab={selectedTopic === "state"}
          onSelect={() => onSelectHandler("state")}
        >State</TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}

export default Examples;