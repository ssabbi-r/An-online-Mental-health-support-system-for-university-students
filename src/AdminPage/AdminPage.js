import React from 'react';
import css from './AdminPage.module.css'; // Assuming you have your styles in this file

const AdminPage = () => {
  return (
    <div className={css.adminpage}>
      <header className={css.header}>
        <h1>Admin Dashboard</h1>
      </header>
      <div className={css.adminbody}>
        <div className={css.approvaloption}>
          <h2>Teacher Account Approval</h2>
          <div className={css.buttonGroup}>
            <button className={css.approvalbutton}>Accept Teacher Accounts</button>
            <button className={css.rejectionbutton}>Reject Teacher Accounts</button>
          </div>
        </div>
        <div className={css.approvaloption}>
          <h2>Student Account Approval</h2>
          <div className={css.buttonGroup}>
            <button className={css.approvalbutton}>Accept Student Accounts</button>
            <button className={css.rejectionbutton}>Reject Student Accounts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
