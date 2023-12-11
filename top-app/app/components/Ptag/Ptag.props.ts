import {HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    height?: 'm' | 'l' | 'xl';
}

export default PtagProps;