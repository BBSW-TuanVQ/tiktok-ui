import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';



function Header() {

  const cx = classNames.bind(styles)

    return (
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <img alt='TikTok' src={images.logo}/>
          </div>
          <div className={cx('search')}>
            <input placeholder='Search accounts and videos' spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>
            <button className={cx('search-btn')}> 
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </div>

          <div className={cx('action')}>
            
          </div>
        </div>
      </header>
    )
  }
  
  export default Header;