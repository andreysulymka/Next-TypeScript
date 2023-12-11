import {HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    height?: 'm' | 'l';
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: 'string'
}

export default TagProps;