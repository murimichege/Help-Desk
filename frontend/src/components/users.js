import React from 'react'
import { List, Datagrid, TextField, EmailField} from 'react-admin'

export const UsersList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="username"/>
            <TextField source="Title" />
            <TextField source="Status" />
            <TextField source="Priority" />
            <TextField source="Category" />
            <TextField source="Status" />

            <EmailField source="email"/>
        </Datagrid>

    </List>
)