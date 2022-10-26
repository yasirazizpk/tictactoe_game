import Square from './Square';
import { useState } from 'react';
const Board =() =>{
    
    const [state, setState]= useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
   
    const announceWinner = () =>{
        const winCondition= [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6],
        ];
 
        for (let logic of winCondition){
         const [a, b, c] = logic;
         if (state[a] !== null && state[a] === state[b] && state[a] === state[c]){
             return state[a];
         }
        }
        return false;
     };
     const handleReset =() =>{
        setState (Array(9).fill(null));
     };
     const handleClick = (index)=>{
        if (state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : '0';
        setState(copyState);
        setIsXTurn(!isXTurn); 
     }
       const whoisWinner = announceWinner(); 
       return(
           <div className='board-container'>
             { whoisWinner ? <>{whoisWinner} won the game <button onClick={handleReset}>play again</button></> :
             <>
             <h4>player {isXTurn ? 'x' : '0'} please move</h4>
               <div className='board-row'>
                  <Square onClick={e=>handleClick(0)}  value={state[0]} />
                  <Square onClick={e=>handleClick(1)} value={state[1]}/>
                  <Square onClick={e=>handleClick(2)} value={state[2]}/>
               </div>
               <div className='board-row'>
               <Square onClick={e=>handleClick(3)} value={state[3]}/>
               <Square onClick={e=>handleClick(4)} value={state[4]}/>
               <Square onClick={e=>handleClick(5)} value={state[5]}/>
               </div>
               <div className='board-row'>
               <Square onClick={e=>handleClick(6)} value={state[6]}/>
               <Square onClick={e=>handleClick(7)} value={state[7]}/>
               <Square onClick={e=>handleClick(8)} value={state[8]}/>
               </div>
               </>}
            </div>
    )
 }
export default Board;