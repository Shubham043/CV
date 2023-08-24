
import styles from "./styles";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile.jsx";
import Connection from "./components/Connection.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProfileForm from "./components/profileform";
import { useState } from "react";

const App = () => {
    const [profileId, setProfileId] = useState(null);
    const [token, setToken] = useState(null)
    console.log(token)
    console.log(profileId);
    return (
        // <Context.Provider setProfileId={setProfileId}>
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} `}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary  ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp  setToken={setToken}/>} />
        <Route path="/SignIn" element={<SignIn token={token}/>}/>
        <Route path="/Connection" element={ <Connection/>} />
        <Route path="/ProfileForm" element={<ProfileForm setProfileId={setProfileId}/>} />
        <Route path="/Profile" element={<Profile profileId={profileId} /> } />
      </Routes>
    </BrowserRouter>

                    {/* <SignUp  setToken={setToken}/>
                    <SignIn token={token}/>
                    <Connection/>
                    <ProfileForm setProfileId={setProfileId}/>
                    <Profile profileId={profileId} /> */}

                </div>
            </div>
        </div>
        // </Context.Provider>
    );
};

export default App;
