import { useState } from 'react';

let initialHeros = [
  { id: 0, name: 'Hulk' },
  { id: 1, name: 'Superman'},
  { id: 2, name: 'Spiderman'},
  { id: 3, name: 'Ironman'},
];

export default function App() {

  // This array variable is used to track all
  // the hero objects created so far
  const [heroes, setHeroes] = useState(initialHeros);

  function LatestHeroList() {
    
    // Create an array of <li></li> items from the array of hero objects
    let listItems = heroes.map(hero => (
      <li key={hero.id}>{hero.name}{ ' '}
        <button onClick={() => {
          // The event handler for the button on each list item
          // creates a new array of hero objects that excludes
          // the current hero object that this button is associated
          // with. In other words, deleting that particular hero
          setHeroes(heroes.filter(x => x.id !== hero.id));
        
        }}>
          Delete
        </button>      
      </li>
    ));
    return <ul>{listItems}</ul>;
  }

  return (
    <>
      <h3>Cool superheros:</h3>
      <LatestHeroList/>
    </>
  );
}
