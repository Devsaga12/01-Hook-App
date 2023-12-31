import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import { FirstApp } from './FirstApp';
// import { App } from './App';

//import { App } from './App';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHok } from './01-useState/CounterWithCustomHok';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { ComunicacionHooks } from './03-example/ComunicacionHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layou } from './05-useLayoutEffect/Layou';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reduce'
//import { TodoApp } from './08-useReducer/TodoApp';
// import { MainApp } from './09-UseContex/MainApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>  
    <FirstApp/>
   </React.StrictMode>, 
  </BrowserRouter>
)
