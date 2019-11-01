import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default () => {
    const userID = 'Luis';
    return (
        <Layout>
            <h1>Homepage</h1>
            <Link to={{ pathname: `/user/${userID}`, id: userID }}>Goto {userID}</Link>
        </Layout>
    );
}
