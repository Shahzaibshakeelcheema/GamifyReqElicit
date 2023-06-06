import "./App.css";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectDashboard from "./components/Dashboard/ProjectDashboard";
import Project from "./components/Project/project";
import LeaderBoard from "./components/Leaderboard/LeaderBoard";
import Requirements from "./components/Project/Requirements";
import ReqDashboard from "./components/Dashboard/ReqDashboard";
import Pdashboard from "./components/Points/Pdashboard";
import About from "./components/About/About";
import Reqdashboardupdate from "./components/Dashboard/Reqdashboardupdate";
import Pprogress from "./components/ProjectProgress/Pprogress";
import AboutTeam from "./components/About/AboutTeam";
import Userguide from "./components/userguide/userguide";
import Achievments from "./components/Achievement/Achievments";
import Updateproject from "./components/Project/updateproject";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/login" element={<Login />} />

            {/*   <Route exact path='/about' element={<About/>}/>*/}

            <Route exact path="/signup" element={<Signup />} />

            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/project/:id" element={<ProjectDashboard />} />

            <Route exact path="/addproject" element={<Project />} />
            <Route exact path="/leaderboard" element={<LeaderBoard />} />

            <Route
              exact
              path="/reqrequirements/:id"
              element={<ReqDashboard />}
            />

            <Route exact path="/requirements/:id" element={<Requirements />} />

            <Route exact path="/points" element={<Pdashboard />} />

            <Route exact path="/update/:id" element={<About />} />

            <Route
              exact
              path="/Reqdashboardupdate/:id"
              element={<Reqdashboardupdate />}
            />

            <Route exact path="/ProjectProgress" element={<Dashboard />} />

            <Route exact path="/ProjectProgress/:id" element={<Pprogress />} />

            <Route exact path="/About" element={<AboutTeam />} />

            <Route exact path="/Userguide" element={<Userguide />} />

            <Route exact path="/acheivements" element={<Achievments />} />
            <Route
              exact
              path="/updateproject/:id"
              element={<Updateproject />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
