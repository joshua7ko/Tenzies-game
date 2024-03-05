import React from "react";
import ReactDOM from "react-dom/client";
import Die from "./component/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";



export default function App(){

   const  [dice, setDice] = React.useState(allNewDice())
   const [tenzies, setTenzies] = React.useState(false)

   React.useEffect(
      
      () => {
        const allHeld = dice.every(die => die.isHeld === true)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if(allHeld && allSameValue){
         setTenzies(true)
         // console.log("You Won!")
        } else {
             
        }
      // console.log("Dice State Changed")
      }, [dice])


  

   function holdDice(id){
      setDice(oldDice => oldDice.map(die => {
         return die.id === id ? 
          {...die, isHeld: !die.isHeld } : die
      }))
   }
   
   
    
    function allNewDice(){
       const newDice = []
       for(let i=0; i<10; i++){
        newDice.push({
               value: Math.ceil(Math.random() * 6), 
               isHeld: false,
               id: nanoid()
               
            })
       }
       return newDice
    }

    function generateNewDie() {
      return {
         value: Math.ceil(Math.random() * 6), 
         isHeld: false,
         id: nanoid()
         
         
      }
    }
     

    function rollDice(){
      if(!tenzies) {
         setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
            die : generateNewDie() 
       }))
      } else {
         setTenzies(false)
         setDice(allNewDice)
      }
   
    
   }


     const diceElements = dice.map(die => ( 
     <Die key={die.id} value={die.value}  isHeld={die.isHeld}
       id={die.id} holdDice={() => holdDice(die.id)}
     /> ))

   return(
    <main>
      {tenzies && <Confetti /> }
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.</p>
    <h2>{tenzies ? "YOU WON !" : ""}</h2>
    <div className="dice-container">
        {diceElements}

      </div>
      <button className="roll-dice" onClick={rollDice}> {tenzies ? "New Game" : "Roll Dice" }</button>
   </main>
   )
}



/**
 * Challenge 2:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 */

/**
 * Challenge 3:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

/**
 * Challenge 4: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */


/**
 * Challenge 5 : Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */


/**
 * Challenge 6 : Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */


/**
 * Challenge 7 : Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */


/**
 * Challenge 8 : Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */



/**
 * Challenge 9 :
 * 1. Add new state called `tenzies`, default to false. It
 *    represents whether the user has won the game yet or not.
 * 2. Add an effect that runs every time the `dice` state array 
 *    changes. For now, just console.log("Dice state changed").
 */


/**
 * Challenge 10 : Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */


/**
 * Challenge 11 : Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */



































// export default function App() {
//    const [dice, setDice] = React.useState(allNewDice())
   
//    function allNewDice() {
//        const newDice = []
//        for (let i = 0; i < 10; i++) {
//            newDice.push(Math.ceil(Math.random() * 6))
//        }
//        return newDice
//    }
   
//    const diceElements = dice.map(die => <Die value={die} />)
   
//    return (
//        <main>
//            <div className="dice-container">
//                {diceElements}
//            </div>
//        </main>
//    )
// }