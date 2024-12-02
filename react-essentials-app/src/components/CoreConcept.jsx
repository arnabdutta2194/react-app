import CoreConcept from './CoreConcepts.jsx';
import { CORE_CONCEPTS } from '../data.js'
import Section from './Section.jsx';

export default function CoreConcepts({ListContainer = "ul"}) {
    return (        
    <Section title = 'Core Concepts' id = {"core-concepts"}>
        
        <ListContainer>
          {CORE_CONCEPTS.map((conceptItem) => 
          <CoreConcept key = {conceptItem.title} {...conceptItem} />)}
        </ListContainer>
    </Section>)
}