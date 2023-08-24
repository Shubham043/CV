
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { logo,menu } from '../assets'
import styles from '../styles'
const connection = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
      axios
          .get(`http://localhost:8080/api/profiles/`)
          .then((response) => {
              console.log(response.data);
              setUser(response.data);
          })
          .catch((error) => {
              console.error("Error fetching posts:", error);
          });
  }, []);
  const handleRemoveConnection = async (userId) => {
    try {
        const response = await axios.patch(`https://bakend-uyf4.onrender.com/api/profiles/${userId}`, {
            connection: false
        });

        // Update the user connection status locally
        setUser(prevUsers =>
            prevUsers.map(user => (user._id === userId ? { ...user, connection: false } : user))
        );
    } catch (error) {
        console.error("Error creating connection:", error);
    }
};

  const handleCreateConnection = async (userId) => {
      try {
          const response = await axios.patch(`http://localhost:8080/api/profiles/${userId}`, {
              connection: true
          });

          // Update the user connection status locally
          setUser(prevUsers =>
              prevUsers.map(user => (user._id === userId ? { ...user, connection: true } : user))
          );
      } catch (error) {
          console.error("Error creating connection:", error);
      }
  };
  const userWithConnection= user.filter(userData=>userData.connection);
  const usersWithoutConnection = user.filter(userData => !userData.connection);
  return (
   <section className={`flex md:flex-row bg-dark-gradient flex-col ${styles.paddingY}`}>
       <div className='flex w-full flex-col p-6 m-4 bg-black-gradient items-start rounded-xl'>
        <h1 className='font-poppins text-[25px]  text-gradient  '>
     My Connection
        </h1>
        <br />
      <div className='flex flex-col mt-4 py-4'>
        <h2 className='font-poppins text-[20px] text-gradient m-4'>Connected peoples</h2>
        <ul className='flex flex-wrap sm:flex-row gap-2'>
                {userWithConnection.map((userData, index) => (
                    <div key={index} className='bg-gray-gradient p-12 flex items-start flex-row rounded-xl'>
                        <div>
                            <h1 className='font-poppins text-white p-2'>{userData.name}</h1>
                            <button
                                className='mt-8 font-poppins text-white bg-black p-2 rounded-xl'
                                onClick={() => handleRemoveConnection(userData._id)}
                            >
                                Remove Connection
                            </button>
                        </div>
                        <img className='w-[40px]' src={menu} alt="Menu" />
                    </div>
                ))}
            </ul>

      </div>
       
      <div className='flex flex-col mt-4 py-4'>
      <h2 className='font-poppins text-[20px] text-gradient m-4'>Recommended peoples</h2>
      <ul className='flex flex-wrap sm:flex-row gap-2'>
                {usersWithoutConnection.map((userData, index) => (
                    <div key={index} className='bg-gray-gradient p-12 flex items-start flex-row rounded-xl'>
                        <div>
                            <h1 className='font-poppins text-white p-2'>{userData.name}</h1>
                            <button
                                className='mt-8 font-poppins text-white bg-black p-2 rounded-xl'
                                onClick={() => handleCreateConnection(userData._id)}
                            >
                                Create Connection
                            </button>
                        </div>
                        <img className='w-[40px]' src={menu} alt="Menu" />
                    </div>
                ))}
            </ul>
      </div>
       </div>
   </section>
  )
}

export default connection
