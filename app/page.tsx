'use client'
import './main.css'
import Trick from "./Trick"
import {useState} from "react";

const dogTricks = [
  {title: "Sit", category: "Basic", description: "Dog sits down on its hind legs"},
  {title: "Stay", category: "Basic", description: "Dog remains in the same spot and position until given a release command"},
  {title: "Shake Hands", category: "Basic", description: "Dog lifts a paw to shake hands with a person"},
  {title: "Fetch", category: "Basic", description: "Dog retrieves an object and brings it back to the person who threw it"},
  {title: "Play Dead", category: "Acting", description: "Dog lies down on its side and remains still as if dead"},
  {title: "Rollover", category: "Basic", description: "Dog rolls over from one side to the other"},
  {title: "Bark on Command", category: "Communication", description: "Dog barks when given a specific command"},
  {title: "Quiet", category: "Communication", description: "Dog stops barking upon command"},
  {title: "Jump", category: "Agility", description: "Dog jumps over an obstacle or in place"},
  {title: "Spin", category: "Agility", description: "Dog spins around in a circle"},
  {title: "Bow", category: "Acting", description: "Dog puts front legs down while keeping back end up"},
  {title: "Speak", category: "Communication", description: "Dog barks or makes noise on command"},
  {title: "Back Up", category: "Agility", description: "Dog walks backward"},
  {title: "Wave Goodbye", category: "Acting", description: "Dog lifts paw and moves it as if waving goodbye"},
  {title: "Catch", category: "Agility", description: "Dog catches an object in the air"},
  {title: "Crawl", category: "Agility", description: "Dog moves in a down position, crawling forward"},
  {title: "Find It", category: "Scent Work", description: "Dog locates a hidden object using its sense of smell"},
  {title: "Kiss", category: "Affection", description: "Dog gently places its mouth near a person's skin"},
  {title: "Hug", category: "Affection", description: "Dog puts its legs around a person or another dog"},
  {title: "Take a Bow", category: "Acting", description: "Dog lowers its front body while keeping its rear up"},
  {title: "Balance Treat", category: "Self-Control", description: "Dog balances a treat on its nose or head until given a command"},
  {title: "Jump Through Hoop", category: "Agility", description: "Dog jumps through a hoop held by the owner or assistant"},
  {title: "Sneeze", category: "Acting", description: "Dog mimics a sneeze on command"},
  {title: "Open Door", category: "Utility", description: "Dog opens a door with its paw or nose"},
  {title: "Turn Off Light", category: "Utility", description: "Dog pushes a button or switch to turn off a light"},
  {title: "Fetch Specific Item", category: "Utility", description: "Dog retrieves a specific item when named"},
  {title: "Hide Your Eyes", category: "Acting", description: "Dog covers its eyes with its paw"},
  {title: "Cross Paws", category: "Cute Tricks", description: "Dog crosses one paw over the other while sitting or lying down"},
  {title: "Leg Weave", category: "Agility", description: "Dog weaves in and out of the owner's legs while they walk"},
  {title: "Skateboard", category: "Agility", description: "Dog stands on a skateboard and moves forward"}
];

const allCategories = dogTricks.map(trick => trick.category)
// @ts-ignore
const uniqueCategoriesSet = ['All', ...new Set(allCategories)]
const uniqueCategories = Array.from(uniqueCategoriesSet)
console.log(uniqueCategories)

function App() {

  const handleClick= (category: string) => {
    if (category==="All") {
      setFilteredTricks(dogTricks)
    } else {
      const newTricks = dogTricks.filter(trick=>trick.category === category)
      setFilteredTricks(newTricks)
    }

  }

  const [filteredTricks, setFilteredTricks] = useState(dogTricks)
  return (
      <>
        <div className='main-nav'>
          <h1>Find Your Next Trick</h1>
          <p>The Ultimate Collection of Dog Tricks!</p>

          <div className='category-nav'>
            {/*<button onClick={()=> handleClick(null)}>All Tricks</button>*/}
            {uniqueCategories.map((category) => {
              return (
                  <button
                      onClick={
                        ()=>{
                          handleClick(category)
                        }
                      }
                      key={category}
                      className='badge'
                  >{category}</button>
              )
            })}
          </div>
        </div>

        <div className='content'>
          <div className='cards-container'>
            {filteredTricks.map((trick)=> {
              return (
                  <Trick
                      key = {trick.title}
                      title={trick.title}
                      description={trick.description}
                      category={trick.category}
                  />
              )
            })}
          </div>
        </div>
      </>
  )
}

export default App
