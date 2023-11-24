import {Data, EnhancedTableProps, HeadCell} from "../../common/types.ts";
import * as React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import {Box} from "@mui/material";
import {visuallyHidden} from "@mui/utils";

const headCells: readonly HeadCell[] = [
    {
        id: 'id',
        numeric: false,
        label: 'id',
    },
    {
        id: 'firstName',
        numeric: true,
        label: 'firstName',
    },
    {
        id: 'lastName',
        numeric: true,
        label: 'lastName',
    },
    {
        id: 'email',
        numeric: true,
        label: 'email',
    },
    {
        id: 'phone',
        numeric: true,
        label: 'phone',
    },
];

export function EnhancedTableHead(props: EnhancedTableProps) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}