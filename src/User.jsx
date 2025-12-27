import React, { useCallback, useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);     // store users
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error message

  // async function to fetch users
  async function fetchUsers() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // ❌ handle HTTP errors
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // call API when component loads
  useEffect(() => {
    fetchUsers();
  },[]);

  // 🔄 loading state
  if (loading) {
    return <h2>Loading users...</h2>;
  }

  // ❌ error state
  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }
const handleClick = useCallback(() => {
    function (){
    // simulating heavy logic
    let sum=0
    for(let i=0;i<1e8;i++){
      sum+=i
    }
    return sum      
  }
},[])


  

  // ✅ success state
  return (
    <div>
      <h1>Users List</h1>
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
