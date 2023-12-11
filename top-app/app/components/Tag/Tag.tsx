import TagProps from "./Tag.props";
import styles from './Tag.module.css'
import cn from 'classnames'

const Tag = ({children, height = 'm', color = 'ghost', href, className, ...props }:TagProps):JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.m]: height == 'm',
            [styles.l]: height == 'l',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.green]: color == 'green',
            [styles.grey]: color == 'grey',
            [styles.primary]: color == 'primary',
        })}
            {...props}>
            {href ? 
                <a href={href}>{children}</a> :
                <>{children}</>}         
        </div>
 )    
}

export default Tag;