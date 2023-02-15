import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import PrimarySearchAppBar from './components/appBar/appBar';
import HomeScreen from './screens/HomeScreen';

export function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <div className={styles['app']}>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/page1" element={<h1> page 1</h1>}></Route>
          <Route path="/page2" element={<h1> page 2</h1>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
