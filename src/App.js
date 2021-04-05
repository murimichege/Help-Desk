import React from 'react'
import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UsersList} from './components/users'
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name ="Dashboard"/>
        <Resource name="Tickets"/>
        <Resource name="Users" list={UsersList} />
        <Resource name="Statuses"/>
        <Resource name="Analytics"/>


        
   </Admin>
);

export default App;
