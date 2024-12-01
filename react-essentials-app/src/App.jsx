import {useState} from 'react';
import { CORE_CONCEPTS } from './data'
import { EXAMPLES } from './data'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [selectedTopic , setSelectedTopic]=useState('components') ;
  function handleSelect(selectedButton) {
    //Selected Button is used to check, which button will be clicked ==> JSX,Components,Props,State
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)

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
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>States</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
