import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Start from "./pages/exercises/Start";

function App(){
    return (
      <Router>
          <div style={{width:'calc(100vw - 60px)', height:'calc(100vh - 60px)', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
            {/*    导航按钮*/}
              <nav>
                  <Link to="/">Home</Link>
                  {" "}
                  |
                  {" "}
                  <Link to="/exercises">Exercises</Link>
                  {" "}
                  |
                  {" "}
                  <Link to="/exercises/start">Start</Link>
              </nav>
          {/*    路由配置*/}
              <Routes>
                  <Route path="/" element={<Home/>} />
                  {/* 父级路由（带 Outlet） */}
                  <Route path="/exercises" element={<Exercises />}>
                      {/* 子页面（会插入到 Outlet 位置） */}
                      <Route path="start" element={<Start />} />
                  </Route>
              </Routes>
          </div>
      </Router>
    );
}

export default App;