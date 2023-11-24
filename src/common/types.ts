import * as React from "react";

export interface Data {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export type Order = 'asc' | 'desc';

export interface HeadCell {
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}
