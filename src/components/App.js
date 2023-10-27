
import React, { useState} from "react";
import './../styles/App.css';





import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const API_URL = "https://reqres.in/api/users";

  const getUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={getUsers}>
        Get User List
      </button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt={`${user.first_name} Avatar`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
