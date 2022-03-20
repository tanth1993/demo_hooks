import './App.css';
import UseStateComponent from './components/CompareUseState/UseStateComponent'
import UseStateCaseComponentA from './components/UseStateCases/ComponentA';
import UseEffectComponentA from './components/UseEffectCases/ComponentA';
import UseEffectComponentC from './components/UseEffectCases/ComponentC';
import UseEffectComponentM from './components/UseEffectCases/ComponentM';
import UseEffectComponentPokemon from './components/UseEffectCases/ComponentPokemon';
function App() {
  return (
    <div className="App">
      <div className="app-content">
        {/* <UseStateComponent /> */}
        {/* <UseStateCaseComponentA /> */}
        {/* <UseEffectComponentA /> */}
        {/* <UseEffectComponentC /> */}
        {/* <UseEffectComponentM /> */}
        <UseEffectComponentPokemon />
      </div>
    </div>
  );
}

export default App;
