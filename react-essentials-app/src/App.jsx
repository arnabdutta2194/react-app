import {useState} from 'react';
import { CORE_CONCEPTS } from './data'
import { EXAMPLES } from './data'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [selectedTopic , setSelectedTopic]=useState() ;
  function handleSelect(selectedButton) {
    //Selected Button is used to check, which button will be clicked ==> JSX,Components,Props,State
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
    }

  let tabContent = <p>Please select a topic</p> 
  if (selectedTopic) {
    tabContent = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div> )
  }
  
  return (
    <div>
      <Header></Header> 
      <main>
        <section id = "core-concepts">
          <h2>CoreConcepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
            <CoreConcept key = {conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>   
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>States</TabButton>
          </menu>
          {tabContent}
        </section>       
      </main>
    </div>
  );
}

export default App;
