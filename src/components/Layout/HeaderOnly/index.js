import Header from "~/components/Layout/components/Header";

function HeaderOnly({children}) {
    //layout mặc định gồm Header và SideBar truyền vào props children là component đại diện cho các trang
    return ( 
        <div>
            <Header/>
            <div className='container'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default HeaderOnly;