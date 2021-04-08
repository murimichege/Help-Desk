import React from 'react'
import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UsersList} from './components/users'
import {TicketsList} from './components/Tickets'
import DashBoard from './components/Dashboard'
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={DashBoard} dataProvider={dataProvider}>
        <Resource name="Tickets" list={TicketsList}/>
        <Resource name="Users" list={UsersList} />
        <Resource name="Statuses" />
        <Resource name="Analytics"/>

   </Admin>
);

export default App;
