import PtagProps from "./Ptag.props";
import styles from './Ptag.module.css'
import cn from 'classnames'

const Ptag = ({children, height = 'm' }:PtagProps):JSX.Element => {
    return (
        <p className={cn(styles.p, {
            [styles.m]: height == 'm',
            [styles.l]: height == 'l',
            [styles.xl]: height == 'xl'
        })}>
        {children}
        </p>
 )    
}

export default Ptag;