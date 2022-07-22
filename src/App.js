import MainPage from './layout/components/MainPage/MainPage'
import Nav from './layout/components/Nav/Nav'
import { TypeProvider } from './contexts/type.context';
import { StatsProvider } from './contexts/stats.context';

function App() {
  return (
    <div className="App">
      <TypeProvider>
        <StatsProvider>
          <Nav/>
          <MainPage/>
        </StatsProvider>
      </TypeProvider>
    </div>
  );
}

export default App;
