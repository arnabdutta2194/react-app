import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  function handleSelect() {
    console.log("Selected")
}
  return (
    <div>
      <Header></Header> 
      <main>
        <section id = "core-concepts">
          <h2>CoreConcepts</h2>
          <ul>
            <CoreConcept 
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image}
            />
            <CoreConcept
             {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
             {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
             {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>States</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
