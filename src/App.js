import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpences from './components/IncomeExpences';
import TranscationList from './components/TranscationList';
import AddTranscation from './components/AddTranscation';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpences />
        <TranscationList />
        <AddTranscation />
      </div>
    </GlobalProvider>
  );
}

export default App;
