import './App.css';
import Grid from './components/Grid';
require('react-grid-layout/css/styles.css')
require('react-resizable/css/styles.css')

function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
