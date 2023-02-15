import { Route, Routes } from 'react-router-dom';
import Project from './components/project/project';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles['app']}>
      <Routes>
        <Route path="/" element={<Project name="niv" />}></Route>
        <Route path="/page1" element={<h1> page 1</h1>}></Route>
        <Route path="/page2" element={<h1> page 2</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
