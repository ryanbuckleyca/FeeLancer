import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import callAPI from './scripts/callAPI';
import Devs from './pages/devs.tsx';

const Dev = () => {
  // callAPI('/api/devs/:id').then(data => {
  //   console.log({data})
  // })
  return "coming soon :)"
}

const App = () => {
  return (
    <div className='wrapper'>
      <Switch>
        <Route exact path="/" component={Devs} />
        <Route exact path="/devs" component={Devs} />
        <Route exact path="/devs/:id" component={Dev} />
      </Switch>
    </div>
  );
}

export default App;
