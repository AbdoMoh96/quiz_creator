import React from 'react';
import Router from "@/Routes/Router.tsx";
import {Provider} from "react-redux";
import Store from "@/Redux/Store.ts";
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Provider store={Store}>
       <Router/>
   </Provider>
  </React.StrictMode>,
);
