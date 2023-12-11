import PtagProps from "./Ptag.props";
import styles from './Ptag.module.css'
import cn from 'classnames'

const Ptag = ({children, height = 'm', className, ...props }:PtagProps):JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.m]: height == 'm',
            [styles.l]: height == 'l',
            [styles.xl]: height == 'xl'
        })}
        {...props}>
        {children}
        </p>
 )    
}

export default Ptag;