import styles from './Button.module.css'
import ButtonProps from "./Button.props";
import cn from 'classnames';
import ArrowIcon from './Arrow.svg'

const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary', 
            [styles.ghost]: appearance == 'ghost',
        })}
        {...props}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
                [styles.right]: arrow == 'right'
            })}>
            <ArrowIcon/>
            </span>}
        </button>
    )
}

export default Button;