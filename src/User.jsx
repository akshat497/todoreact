import React, { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";

function User() {
  const [users, setUsers] = useState([]);     // store users
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error message


  function getUsersManually() {
  return new Promise((resolve, reject) => {

    const users = [
      { id: 1, name: "Akshat" },
      { id: 2, name: "Rahul" },
      { id: 3, name: "Neha" }
    ];

    const success = true; 

    setTimeout(() => {
      if (success) {
        resolve(users);        // ✅ data returned
      } else {
        reject("Something went wrong ❌");
      }
    }, 1000);
  });
}
 const handleClick = useCallback(() => {
  console.log("Click");
}, []);

  // async function to fetch users
  async function fetchUsers() {
  try {
    

    const data = await getUsersManually(); // ⏳ waits here
    setUsers(data);       // ✅ success

  } catch (error) {
    setError(error);      // ❌ failure

  } finally {
    setLoading(false);    // 🧹 always runs
  }
}


  // call API when component loads
  useEffect(() => {
    fetchUsers();
  },[]);

  // 🔄 loading state
  if (loading) {
    return <Loader/>;
  }

  // ❌ error state
  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }
  

   return (
    <div>
      <h1 >Users List</h1>
      <button onClick={handleClick}>click me </button>
      
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
