import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<h1> home page</h1>}></Route>
      <Route path="/page1" element={<h1> page 1</h1>}></Route>
      <Route path="/page2" element={<h1> page 2</h1>}></Route>
    </Routes>
  );
}

export default App;
