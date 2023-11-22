import * as React from "react";

export interface IData {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export interface HeadCell {
    disablePadding: boolean;
    id: keyof IData;
    label: string;
    numeric: boolean;
}

export interface EnhancedTableToolbarProps {
    numSelected: number;
}