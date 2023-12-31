import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    appearance: 'primary' | 'ghost';
    arrow?: 'right'| 'down'| 'none'
}

export default ButtonProps