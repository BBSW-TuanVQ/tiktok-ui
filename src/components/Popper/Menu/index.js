import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

function Menu({ children, items = [] }) {
  const cx = classNames.bind(styles);

  const [history, setHistory] = useState([{data:items}])
  const current = history[history.length-1]

  const renderItems = () => {
    return current.data.map((item, index) => {
        const isParents = !!item.children
        return <MenuItem key={index} data={item} onClick={() => {
            if(isParents){
                setHistory(prev => [...prev, item.children])
            }
        }}/>;
    });
  };

  return (
    <Tippy
      placement="bottom-end"
      delay={[0, 800]}
      interactive
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length> 1 &&<Header title="Language" onBack={()=>{
                setHistory(prev => prev.slice(0, prev.length-1 ))
            }}/>}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory(prev => prev.slice(0, prev.length-1 ))
      }}
      
    >
      {children}
    </Tippy>
  );
}

export default Menu;
