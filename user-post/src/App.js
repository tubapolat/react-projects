import './App.css';
import { useEffect, useState } from 'react'
import { getUserById } from './service/userService';
import { User } from './components/user';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserById(1).then(response => {
      console.log(response);
      const user = response.data;
      setUser(user)
    })
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <User user={user} />
      </header>
    </div>
  );
}

export default App;
