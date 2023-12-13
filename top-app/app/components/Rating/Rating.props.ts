import {HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void
}

export default RatingProps;