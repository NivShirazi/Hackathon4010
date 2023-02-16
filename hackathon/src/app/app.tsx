import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import ResponsiveAppBar from './components/appBar/appBar';
import FollowingScreen from './screens/Following/followingScreen';
import HomeScreen from './screens/Home/HomeScreen';
import Album from './screens/MyProjects/MyProj';
import ProfileScreen from './screens/Profile/profilePage';
import RegisterScreen from './screens/Register/registerScreen';
import UploadScreen from './screens/Upload/uploadScreen';
import ImgMediaCard from './screens/Home/components/welcome';

export function App() {
  return (
    <div className={styles['app']}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<ImgMediaCard />}></Route>
        <Route path="/home" element={<HomeScreen />}></Route>
        <Route path="/myProjects" element={<Album />}></Route>
        <Route path="/following" element={<FollowingScreen />}></Route>
        <Route path="/register" element={<RegisterScreen />}></Route>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/upload" element={<UploadScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
