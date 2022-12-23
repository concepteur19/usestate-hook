// import React, { useState } from "react";

// function App() {
//   const imgs = [
//     "https://www.camerounactuonline.com/wp-content/uploads/2022/09/Teodoro-Obiang-Nguema-Mbasogo.jpg",
//     "https://gdb.voanews.com/37b0ef24-c929-4c4b-810c-7d60fdf95366_w1200_r1.jpg",
//     "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzMjQ3MDY4NDg5/wwi_leaders_winston-churchill_3281879_getty-2.jpg",
//     "http://www.noovomoi.ca/content/dam/style-de-vie/migrated/images/2015/07/17/steven-spielberg.jpg",
//   ];

//   const [count, setCount] = useState("https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzMjQ3MDY4NDg5/wwi_leaders_winston-churchill_3281879_getty-2.jpg");

//   function increase() {
//     const randomNumber = Math.floor(Math.random() * 4);
//     const randomImage = imgs[randomNumber];
//     setCount((randomImage));
//   }

//   function decrease() {
//     setCount(count);
//   }

//   return (
//     <div className="container">
//       <h1> </h1>
//       <img width={300} height={300} src={count} alt="personnality "/>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString(); 
  
  const [ time, setState ] = useState(now);

  function getCurrentTime() {
    setState(new Date().toLocaleTimeString() )
  }
  
  setInterval(getCurrentTime, 1000)

  return (
    <div>
      <h1> {time} </h1>
      <button onClick={getCurrentTime}> Get Time </button>
    </div>
  );
}

export default App;
