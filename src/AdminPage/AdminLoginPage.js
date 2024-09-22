import React, { useState } from 'react';
import css from './AdminLoginPage.module.css';

const AdminLoginPage = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Admin ID:", adminId);
    console.log("Password:", password);
  };

  return (
    <div className={css.loginPage}>
      <div className={css.loginBox}>
        <h1>University of Rajshahi</h1>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className={css.inputGroup}>
            <label htmlFor="adminId">Admin ID</label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
            />
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={css.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
