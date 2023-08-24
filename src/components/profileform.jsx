import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Context } from "../App";

const ProfileForm = (props) => {
    // const { setProfileId } = Context();
    const { setProfileId } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState("");
const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("clicked");
        navigate('/Profile')
           };

    return (
        <form className="max-w-lg mx-auto p-6 border rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Create Profile</h2>
            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold  font-medium">
                    Name
                </label>
                <input
                    type="text"
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold font-medium">
                    Email
                </label>
                <input
                    type="email"
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold font-medium">
                    Phone Number
                </label>
                <input
                    type="text"
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold font-medium">
                    About
                </label>
                <textarea
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    rows="4"
                    placeholder="Tell us about yourself"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold font-medium">
                    Skills{" "}
                </label>
                <input
                    type="text"
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    placeholder="Enter your skills (comma-separated)"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value.split(","))}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold font-medium">
                    Certifiactes{" "}
                </label>
                <input
                    type="text"
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    placeholder="Enter your skills (comma-separated)"
                    value={certificates}
                    onChange={(e) => setCertificates(e.target.value.split(","))}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold font-medium">
                    Experience{" "}
                </label>
                <input
                    type="text"
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    placeholder="Enter your skills (comma-separated)"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value.split(","))}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gradient mb-1 font-semibold font-medium">
                    Education{" "}
                </label>
                <input
                    type="text"
                    className="font-poppins font-semibold bg-black-gradient text-white w-full p-2 border rounded-md"
                    placeholder="Enter your skills (comma-separated)"
                    value={education}
                    onChange={(e) => setEducation(e.target.value.split(","))}
                />
            </div>
            {/* Add more input fields for certificates, experience, and education */}
            <div className="mt-6">
                <button
                    type="submit"
                    className="bg-blue-500  text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Create Profile
                </button>
            </div>
        </form>
    );
};

export default ProfileForm;
