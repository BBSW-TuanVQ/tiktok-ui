import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';


const publicRoutes = [ //tạo mảng chứa các object là route dẫn đến các trang khác nhau, thêm trang thì thêm phần tử mảng
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/upload', component: Upload, layout:HeaderOnly}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}