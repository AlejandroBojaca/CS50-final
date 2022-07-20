import MainPage from './layout/components/MainPage/MainPage'
import Nav from './layout/components/Nav/Nav'
import ConfigurationBasic from './configuration/components/ConfigurationBasic'

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainPage/>
      <ConfigurationBasic/>
    </div>
  );
}

export default App;
