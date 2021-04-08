import React from 'react'
import { List, Datagrid, TextField, EmailField, ReferenceField, EditButton} from 'react-admin'

export const TicketsList = props => (
    <List {...props}>
        <Datagrid>
        <TextField source="id"/>

            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="Title"/>
            <EditButton/>
        </Datagrid>

    </List>
    
)


