import { CORE_CONCEPTS } from "../../data/data";
import CoreConceptItem from "./CoreConceptItem/CoreConceptItem";

import "./CoreConcept.css";

function CoreConcept () {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map(conceptItem => <CoreConceptItem key={conceptItem.title} {...conceptItem}/>)}
      </ul>
    </section>
  )
}

export default CoreConcept;