import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function onSelectHandler (selectedButton) {
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
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
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
        </section>
      </main>
    </div>
  );
}

export default App;
