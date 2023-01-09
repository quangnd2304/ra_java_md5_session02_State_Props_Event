import './App.css';
import ChildrenClassComp from './components/ChildrenClassComp';
import ChildrenFuncComp from './components/ChildrenFuncComp';
import EventDemo from './components/EventDemo';

function App() {
  return (
    <div className="App">
      <ChildrenClassComp companyName="Rikkei Academy">Java-8</ChildrenClassComp>
      <ChildrenFuncComp class="Java-8">Rikkei Academy</ChildrenFuncComp>
      <EventDemo></EventDemo>
    </div>
  );
}

export default App;
