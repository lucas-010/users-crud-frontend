import React, { useEffect, useState } from "react";
import { StyledApp, StyledContainerCards } from "./AppStyles";
import { Header } from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "./components/Card";
import { User } from "./types";
import { getUsers } from "./api";
import Create from "./pages/Create";

function App() {
  const [users, setUsers] = useState<User[]>();
  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <BrowserRouter>
      <StyledApp>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <StyledContainerCards>
                {users?.map((user) => {
                  return (
                    <Card
                      key={user.id}
                      email={user.email}
                      name={user.name}
                      id={user.id}
                      fetchUsers={fetchUsers}
                    />
                  );
                })}
              </StyledContainerCards>
            }
          />
          <Route
            path="/criar-usuario"
            element={<Create fetchUsers={fetchUsers} />}
          />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
