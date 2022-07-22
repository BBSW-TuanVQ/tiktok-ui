import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";


function Button({
    to, 
    href, 
    primary=false, 
    outline=false, 
    small=false, 
    large=false, 
    text,
    disabled,
    rounded,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick, 
    ...passProps}) {

    const cx = classNames.bind(styles)

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    }

    if(disabled){
        delete props.onClick
    }

    if(to){
        props.to = to
        Comp = Link
    } else if(href){
        props.href = href
        Comp='a'
    }

    const classes = cx('wrapper', {
        [className]:className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon&&<span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon&&<span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;