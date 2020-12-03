import React from 'react';
import { NavLink } from "react-router-dom";
import Layout from '../../components/shared/Layout/Layout';
import './EditAccount.css';

const EditAccount = () => {
  return (
    <Layout>
      <h1>Edit Account</h1>
      {/* Put user account preferences here to change username, change password, delete account entirely, this needs to be full CRUD */}
    </Layout>
  );
}

export default EditAccount;