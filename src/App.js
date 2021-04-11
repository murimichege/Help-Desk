import React from 'react'
import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {UsersList} from './components/users'
import {TicketsList} from './components/Tickets'
import DashBoard from './components/Dashboard'
import {Analytics} from './components/Analytics'
import {Categories} from './components/Categories'
import {Status} from './components/Statuses' 

import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import SettingsBackupRestoreSharpIcon from '@material-ui/icons/SettingsBackupRestoreSharp';
import LocalOfferSharpIcon from '@material-ui/icons/LocalOfferSharp';
import ShowChartSharpIcon from '@material-ui/icons/ShowChartSharp';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={DashBoard} dataProvider={dataProvider}>
        <Resource name="Tickets" list={TicketsList}/>
        <Resource name="Users" list={UsersList} icon={PeopleAltSharpIcon} />
        <Resource name="Statuses" list={Status} icon = {SettingsBackupRestoreSharpIcon}  />
        <Resource name="Categories" list ={Categories} icon={LocalOfferSharpIcon} />
        <Resource name="Analytics" list={Analytics} icon={ShowChartSharpIcon}/>

   </Admin>
);

export default App;
