import { CameraIcon } from '@heroicons/react/24/solid'
import {Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React from 'react'
import data from '../data.json'

const TableBase = () => {
  //console.log(data)  
  return (
    <Card>
        <Title>List of data</Title>

        <Table marginTop='mt-5'>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Position</TableHeaderCell>
                    <TableHeaderCell>Departament</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { data.map( (item) => (
                    <TableRow>
                        <TableCell> {item.Role} </TableCell>
                        <TableCell> {item.departement} </TableCell>
                        <TableCell> {item.name} </TableCell>
                        <TableCell> <Badge text={item.status} color="teal" icon={CameraIcon} /> </TableCell>
                    </TableRow>    
                )) }
            </TableBody>
        </Table>

    </Card>
  )
}

export default TableBase