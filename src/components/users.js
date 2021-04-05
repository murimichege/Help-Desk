import React from 'react'
import { List, Datagrid, TextField, EmailField} from 'react-admin'

export const UsersList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="username"/>
            <TextField source="department" />
            <TextField source="phone number" />
            <EmailField source="email"/>

        </Datagrid>

    </List>
)