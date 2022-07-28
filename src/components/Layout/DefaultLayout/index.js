import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";

function DefaultLayout({children}) {
    //layout mặc định gồm Header và SideBar truyền vào props children là component đại diện cho các trang

    const cx = classNames.bind(styles)

    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;