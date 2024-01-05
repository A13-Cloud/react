import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

  function onSelectHandler (selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelectHandler("component")}>Component</TabButton>
            <TabButton onSelect={() => onSelectHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => onSelectHandler("props")}>Props</TabButton>
            <TabButton onSelect={() => onSelectHandler("state")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
