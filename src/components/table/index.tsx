import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useQuery} from "@tanstack/react-query";
import {LeadsService} from "../../services/leads.service.ts";
import {useEffect, useState} from "react";


const EnhancedTable = () => {
    const [localData, setLocalData] = useState([]);

    const {isLoading, isError, data, isSuccess, error} = useQuery({
        queryKey: ['leads'],
        queryFn: () => LeadsService.getAll(),
        select: ({data}) => data
    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    setLocalData(data)

    console.log(localData);
    const sortToSort = (x, y) => {
        return x.firstName.localeCompare(y.firstName, "en");
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">id</TableCell>
                        <TableCell
                            onClick={() => {
                                setLocalData((prevState) => [...prevState.sort(sortToSort)])
                            }}
                        >firstName</TableCell>
                        <TableCell>lastName</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.phone}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell component="th" scope="row">{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EnhancedTable;