import './App.css';
import UseStateComponent from './components/CompareUseState/UseStateComponent'
import UseStateCaseComponentA from './components/UseStateCases/ComponentA';
import UseEffectComponentA from './components/UseEffectCases/ComponentA';
import UseEffectComponentC from './components/UseEffectCases/ComponentC';
import UseEffectComponentM from './components/UseEffectCases/ComponentM';
import UseEffectComponentPokemon from './components/UseEffectCases/ComponentPokemon';
import UseRefComponentA from './components/UseRefCases/ComponentA';
import UseRefComponentB from './components/UseRefCases/ComponentB';
import UseContextComponentA from './components/UseContext/ComponentA';
import UseCallbackComponentA from './components/UseCallback/ComponentA';
import UseMemoComponentA from './components/UseMemo/ComponentA';
import CustomHookComponent from './components/CustomHooks';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        {/* <UseStateComponent /> */}
        {/* <UseStateCaseComponentA /> */}

        {/* <UseEffectComponentA /> */}
        {/* <UseEffectComponentC /> */}
        {/* <UseEffectComponentM /> */}
        {/* <UseEffectComponentPokemon /> */}

        {/* <UseRefComponentA /> */}
        {/* <UseRefComponentB /> */}

        {/* <UseContextComponentA /> */}

        {/* <UseCallbackComponentA /> */}

        {/* <UseMemoComponentA /> */}

        <CustomHookComponent />
      </div>
    </div>
  );
}

export default App;
