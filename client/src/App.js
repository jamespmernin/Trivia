import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Landing from './screens/Landing/Landing';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Home from './screens/Home/Home';
import MakeQuiz from './screens/MakeQuiz/MakeQuiz';
import MakeQuestion from './screens/MakeQuestion/MakeQuestion';
import MakeAnswer from './screens/MakeAnswer/MakeAnswer';
import TakeQuiz from './screens/TakeQuiz/TakeQuiz';
import FinalScore from './screens/FinalScore/FinalScore';
import EditAccount from './screens/EditAccount/EditAccount';
// import Leaderboard from './screens/Leaderboard/Leaderboard';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  return (
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <Switch>

        <Route path='/login'>
          {/* login */}
          <Login handleLogin={handleLogin} />
        </Route>

        <Route path='/signup'>
          {/* register */}
          <Signup handleRegister={handleRegister} />
        </Route>

        <Route path='/home'>
          <Home currentUser={currentUser} />
        </Route>

        <Route path='/makequestion/:id'>
          <MakeAnswer currentUser={currentUser} />
        </Route>

        <Route path='/makequiz/:id'>
          <MakeQuestion currentUser={currentUser} />
        </Route>

        <Route path='/makequiz'>
          <MakeQuiz currentUser={currentUser} />
        </Route>

        <Route path='/takequiz'>
          <TakeQuiz currentUser={currentUser} />
        </Route>

        <Route path='/finalscore'>
          <FinalScore currentUser={currentUser} />
        </Route>

        {/* <Route path='/leaderboard'>
          <Leaderboard currentUser={currentUser} />
        </Route> */}

        <Route path='/accountdetails'>
          <EditAccount currentUser={currentUser} />
        </Route>

        <Route path='/'>
          <Landing />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
