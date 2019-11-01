import React from 'react';
import Layout from '../components/Layout';

export default (props) => {
    console.log(props);
    return (<Layout><h1>{props.location.userId}</h1></Layout>);
}