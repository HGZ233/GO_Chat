import React from 'react';
import InputBox from './InputBox';
import Dashboard from './ui/Dashboard';


class App extends React.Component {
  

  public  render(): JSX.Element  {
   return(  <div>
      {/* <h1>GO Chat</h1> */}
      <Dashboard />
    </div>)
  }
};

export default App;