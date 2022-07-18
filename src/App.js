import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
import { Fragment } from "react";

function App() {
  //function render Routes
  const renderRoute = (route, index) => {
    let Layout = DefaultLayout 

    //kiểm tra xem route truyền vào có kiểu layout nào
    if(route.layout){
      Layout=route.layout
    }else if(route.layout===null){
      Layout = Fragment
    }


    //khai báo biến gán vào là component
    const Page = route.component;

    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(renderRoute)}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
