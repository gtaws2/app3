import profileImage from './img/pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
      <h2>Author: Martin</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
