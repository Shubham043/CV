
import styles from "../styles";
import {  menu } from "../assets";
import { useState, useEffect } from "react";

import axios from "axios";

const Profile = ({ profileId }) => {
    const [profiles, setProfiles] = useState([]);
   
    console.log(profileId);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/profiles/${profileId}`)
            .then((response) => {
            
                console.log(response.data);
                setProfiles(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, [profileId]);

    return (
        <section
            className={`flex md:flex-row bg-dark-gradient  flex-col ${styles.paddingY}`}
        >
            <div className="absolute bg-black-gradient-2 mt-[-14px]  sm:ml-[80px]  h-[200px] sm:w-[85%] w-full rounded-xl" />
            <div className="flex sm:flex-row flex-col lg:px-4 px-1 md:border-[4px] md:border-solid border-red rounded-xl  lg:mx-20 z-10 py-4 ">
                <div
                    id="left"
                    className=" flex  flex-col sm:p-6   sm:mx-12  mx-0 sm:w-[480px]"
                >
                    <div
                        id="pic"
                        className="flex w-full md:flex-row  flex-col gap-2 justify-between items-center p-2  "
                    >
                        <div className="rounded-full border border-solid border-red py-10 px-2">
                            <img
                                className=" w-[120px] h-[40px] "
                                src={menu}
                                alt="logo"
                            />
                        </div>
                        <div className="bg-blue-gradient  flex justify-center items-center rounded-xl text-black hover:font-bold cursor-pointer w-[120px] h-[30px] fit-content">
                            <p>Upload photo</p>
                        </div>
                    </div>
                    {/* pic */}
                    <div className="border  bg-discount-gradient rounded-xl border-solid border-red p-2 rounded-xl mt-5">
                        <div className="flex flex-col text-white p-2">
                            <div className=" text-gradient font-poppins">
                                <h2> Your Name</h2>
                            </div>
                            <div className="flex justify-between items-center text-white py-2">
                                <h3>{profiles.name}</h3>
                                <button className="rounded-xl w-[80px] border border-solid border-red">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col text-white p-2">
                            <div className="text-gradient font-poppins">
                                <h2> Email</h2>
                            </div>
                            <div className="flex justify-between items-center text-white py-2">
                                <h3>{profiles.email}</h3>
                                <button className="rounded-xl w-[80px] border border-solid border-red">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col  p-2">
                            <div>
                                <h2 className="text-gradient font-poppins">
                                    {" "}
                                    Phone Number
                                </h2>
                            </div>
                            <div className="flex justify-between items-center text-white py-2">
                                <h3>{profiles.phoneNumber}</h3>
                                <button className="rounded-xl w-[80px] border border-solid border-red">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* first caard */}
                    <div className=" flex flex-col bg-discount-gradient rounded-xl  text-white border border-solid border-red p-3 rounded-xl mt-5">
                        <div className="flex  justify-between items-center p-3  ">
                            <h1 className="font-poppins font-semibold text-gradient">
                                {" "}
                                About Shubham
                            </h1>
                            <button className=" text-white rounded-xl w-[80px] border border-solid border-red">
                                Edit
                            </button>
                        </div>
                        <div className="  flex flex-wrap font-poppins text-white px-3 py-3 leading-5">
                            <p>
                              {profiles.about}
                            </p>
                        </div>
                    </div>
                    {/* second card */}
                    <div className=" flex bg-discount-gradient rounded-xl flex-col  text-white border border-solid border-red p-2 rounded-xl mt-5">
                        <div className="flex  justify-between items-center p-3 ">
                            <h1 className="text-gradient">Skills</h1>
                            <button className=" text-white rounded-xl w-[80px] border border-solid border-red">
                                Edit
                            </button>
                        </div>
                        <div className="p-2 m-2">
                            <ul className="flex flex-col text-white font-poppins justify-evenly items-start gap-2 p-2 ">
                                {profiles.skills}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute bg-[#4682B4] opacity-[50%] mt-[20%]  rounded-full  ml-[-13%] w-[15%] h-[50%]" /> */}
                <div
                    id="right"
                    className=" flex  flex-col sm:p-6 p-0   sm:mx-12  sm:w-[480px]"
                >
                    <div className=" flex flex-col  bg-discount-gradient rounded-xl  text-white border border-solid border-red p-3 rounded-xl mt-5">
                        <div className="flex  justify-between items-center p-3  ">
                            <h1 className="font-poppins font-semibold text-gradient">
                                {" "}
                                professional details
                            </h1>
                            <button className=" text-white rounded-xl w-[80px] border border-solid border-red">
                                Edit
                            </button>
                        </div>
                        <div className=" flex bg-discount-gradient rounded-xl flex-wrap font-poppins text-white px-3 leading-5">
                            <p>
                               {profiles.certificates}
                            </p>
                        </div>
                    </div>
                    {/* first card  */}
                    <div className="flex bg-discount-gradient rounded-xl p-3 my-3 flex-col">
                        <div className="flex   justify-between items-center p-3  ">
                            <h1 className="font-poppins font-semibold text-gradient">
                                {" "}
                                Certificates
                            </h1>
                            <button className=" text-white rounded-xl w-[80px] border border-solid border-red">
                                Edit
                            </button>
                        </div>
                        <ul className="list-none">
                            <li className="mt-2">
                                <div className=" flex flex-row justify-between gap-6 rounded-full border border-solid border-red text-gradient p-4 py-6">
                                    <img
                                        className="w-[40px] h-[20px] "
                                        src={menu}
                                        alt="logo"
                                    />
                                    <h2 className="max-w-[200px]">
                                        Python certificate
                                    </h2>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* second card  */}
                    <div className="flex bg-discount-gradient rounded-xl p-3 my-2 flex-col">
                        <div className="flex  justify-between items-center p-3  ">
                            <h1 className="font-poppins font-semibold text-gradient">
                                {" "}
                                Experience
                            </h1>
                            <button className=" text-white rounded-xl w-[80px] border border-solid border-red">
                                Edit
                            </button>
                        </div>
                        <ul className="list-none">
                            <li className=" mt-2">
                                <div className="flex flex-row justify-between rounded-xl border border-solid border-gradient text-gradient p-2">
                                    <img
                                        className="w-[40px] h-[20px] "
                                        src={menu}
                                        alt="logo"
                                    />
                                    <h2 className="max-w-[200px]">
                                        Python intern
                                    </h2>
                                </div>
                            </li>
                            <li className="mt-2">
                                <div className="flex flex-row gap-6 justify-between rounded-xl border border-solid border-red text-gradient p-2">
                                    <img
                                        className="w-[40px] h-[20px] "
                                        src={menu}
                                        alt="logo"
                                    />
                                    <h2 className="max-w-[200px]">
                                        javascript intern
                                    </h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex flex-col bg-discount-gradient rounded-xl  text-white border border-solid border-red p-3 rounded-xl mt-5">
                        <div className="flex  justify-between items-center p-3  ">
                            <h1 className="font-poppins font-semibold text-gradient">
                                {" "}
                                Education
                            </h1>
                            <button className=" text-white rounded-xl w-[80px] border border-solid border-red">
                                Edit
                            </button>
                        </div>
                        <div className=" flex bg-discount-gradient rounded-xl flex-wrap font-poppins text-white px-3 leading-5">
                            <p>
                                {profiles.education}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
