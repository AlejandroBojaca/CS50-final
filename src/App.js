import MainPage from './layout/components/MainPage/MainPage'
import Nav from './layout/components/Nav/Nav'
import { TypeProvider } from './contexts/type.context';
import { StatsProvider } from './contexts/stats.context';
import { CounterProvider } from './contexts/counter.context';

function App() {
  return (
    <div className="App">
      <StatsProvider>
        <CounterProvider>
          <TypeProvider>
            <Nav/>
            <MainPage/>
          </TypeProvider>
        </CounterProvider>
      </StatsProvider>
    </div>
  );
}

export default App;
