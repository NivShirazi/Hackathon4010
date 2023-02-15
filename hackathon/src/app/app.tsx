import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import ResponsiveAppBar from './components/appBar/appBar';
import SimpleProject from './components/simpleProject/simpleProject';

export function App() {
  return (
    <div className={styles['app']}>
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/"
          element={
            <SimpleProject
              authorName="ניב שיראזי"
              projName="פרויקט חדשני"
              date="15/02/23"
              description='לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד.
               מדובר במלל ארוך במיוחד שניתן לבדוק עמו גופנים,
               וכן התאמת המלל לעמודים המעוצבים ובדיקת סוגי וגודלי גופן והתאמתם למוצר הסופי.'
            />
          }
        ></Route>
        <Route path="/page1" element={<h1> page 1</h1>}></Route>
        <Route path="/page2" element={<h1> page 2</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
