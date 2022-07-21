import MainPage from './layout/components/MainPage/MainPage'
import Nav from './layout/components/Nav/Nav'
import { TypeProvider } from './contexts/type.context';

function App() {
  return (
    <div className="App">
      <TypeProvider>
          <Nav/>
          <MainPage/>
      </TypeProvider>
    </div>
  );
}

export default App;
