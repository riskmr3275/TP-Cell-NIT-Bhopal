import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/common/Navbar";
import "./App.css";
import Header from "./component/common/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import InterviewTips from "./component/core/Homepage/InterviewTips";
import JobBoard from "./pages/JobBoard";
import Dashboard from "./component/core/Dashboard/Dashboard";
import VerifyEmail from "./pages/VerifyEmail";
import OpenRoute from "./component/core/Auth/OpenRoute";
import PrivateRoute from "./component/core/Auth/PrivateRoute";
import Calender from "./pages/Calender";
import RecentJob from "./pages/RecentJob";
import JobAppliedList from "./component/common/JobAppliedList";
import Profile from "./pages/Profile";
import AcademicDashboard from "./pages/AcademicDashboard ";
import OfferLetterUpload from "./pages/OfferLetterUpload";
import ResumeUpload from "./pages/ResumeUpload";
import { useSelector } from "react-redux";
import HelpDeskComponent from "./pages/HelpDeskComponent";
import StudentDetailsForm from "./pages/StudentDetailsForm";
import AttachmentForm from "./pages/AttachmentForm";
import SkillsForm from "./pages/SkillsForm";
import CoordinatorOverview from "./component/Cordinator/CoordinatorOverview";
import CompanyManagement from "./component/Cordinator/CompanyManagement";
import AboutUs from "./pages/AboutUs";
import ForRecruiters from "./pages/ForRecruiters";
import PlacementStaticsPage from "./pages/PlacementStatisticsPage";
import TeamPage from "./component/core/Homepage/TeamPage";
import JobPostingsList from "./component/Cordinator/JobPostingsList";
import PlacementDrivePage from "./component/Cordinator/PlacementDrivePage";
import ReportsAnalyticsPage from "./component/Cordinator/ReportsAnalyticsPage";
import TrainingAndDevelopmentPage from "./component/Cordinator/TrainingAndDevelopemet";
import StudentProfile from "./component/Cordinator/StudentProfile";
function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="min-h-screen flex flex-col font-inter ">
      <div className="  bg-slate-300 flex flex-col font-inter w-full">
        <NavBar />
        {/* Routes are defined using the Routes component */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/forrecruiters" element={<ForRecruiters />} />
            <Route
              path="/PlacementStatistics"
              element={<PlacementStaticsPage />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resume-tips" element={<InterviewTips />} />
            <Route path="/Jobboard" element={<JobBoard />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/ourTeam" element={<TeamPage />} />

            <Route
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="dashboard/recentjob" element={<RecentJob />} />
              <Route path="dashboard/calender" element={<Calender />} />
              <Route path="dashboard/appliedjob" element={<JobAppliedList />} />
              <Route path="dashboard/profile" element={<Profile />} />
              <Route
                path="dashboard/curracademics"
                element={<AcademicDashboard />}
              />
              <Route
                path="dashboard/uploadLetter"
                element={<OfferLetterUpload />}
              />
              <Route path="dashboard/uploadresume" element={<ResumeUpload />} />
              <Route path="dashboard/help" element={<HelpDeskComponent />} />
              <Route
                path="dashboard/personal"
                element={<StudentDetailsForm />}
              />
              <Route
                path="dashboard/AttachmentForm"
                element={<AttachmentForm />}
              />
              <Route path="dashboard/skill" element={<SkillsForm />} />
              <Route
                path="dashboard/overview"
                element={<CoordinatorOverview />}
              />
              <Route
                path="dashboard/companymanagement"
                element={<CompanyManagement />}
              />
              <Route
                path="dashboard/companymanagement/viewOpening/:companyId"
                element={<JobPostingsList />}
              />
              <Route
                path="dashboard/placementdrives"
                element={<PlacementDrivePage />}
              />
              <Route
                path="dashboard/reportsanalytics"
                element={<ReportsAnalyticsPage />}
              />
              <Route
                path="dashboard/trainingdevelopment"
                element={<TrainingAndDevelopmentPage />}
              />
              <Route
                path="dashboard/studentmanagement"
                element={<StudentProfile />}
              />
            </Route>
           </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
