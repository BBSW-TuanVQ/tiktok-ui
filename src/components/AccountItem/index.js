import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AccountItem() {
    const cx = classNames.bind(styles)
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} alt="img" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fda2cca3e9257c62e6fb3b8e9710184~c5_100x100.jpeg?x-expires=1658394000&x-signature=U6U508xHgfAlC3yXI9y4Q2qris0%3D"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')} >nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;