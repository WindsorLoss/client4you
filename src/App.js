import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ClientList } from './components/ClientList';
import { CreateClient } from './components/CreateClient';


import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Route path="/" exact component={ClientList}/>
        <Route path="/create" component={CreateClient}/>
      </Router>

      <GlobalStyle />
      
    </>
  );
}
