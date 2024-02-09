
import { useState } from 'react';
import './App.css';

function App() {

const[count,setCount]=useState(0);
  function decreaseHandler(){
setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
      }

      function resetHandler(){
        setCount(0);
          }
  
  return (
    <div className="w-[218vh] h-[100vh] flex justify-center items-center bg-[#344151] colmun gap-10 flex-col" >
      <div className="text-[#0398d4] font-medium text-2xl">INCREMENT & DECREMENT</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
         <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf]  text-5xl">-</button>
      <div className="font-bold gap-12 text-5xl">  {count}  </div>
       <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf]  text-5xl">+</button></div>
      <div> <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" >RESET</button></div>
     
    </div>
  );
}

export default App;
