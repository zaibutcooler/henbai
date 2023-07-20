import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfileID } from "../../store/userSlice";
import { RootState } from "../../store";
import photo from '../../assets/Images/pic1.jpg';

const CreateProfilePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const userID = useSelector((state: RootState) => state.profile.user);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(userID);
      axios
        .post("http://localhost:5000/profile/", {
          user: userID,
          firstName,
          lastName,
          dob: dateOfBirth,
          country,
          city,
        })
        .then((res) => {
          dispatch(setProfileID(res.data._id));
          navigator("/profile/create/seller");
        });
    } catch (err) {
      console.log("Error =>", err);
    }
  };
  return (
    <div className="app min-h-screen py-20 bg-gray-200">
    <div className="container mx-auto">
      <div className="w-10/12 lg:w-8/12 border-solid border-2 border-gray-600 bg-white rounded-xl mx-auto shadow-lg overflow-hidden flex flex-col lg:flex-row">
        <div className={`w-full lg:w-1/2 py-16 px-12 ${isMobile ? '' : 'order-2 lg:order-1'}`}>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="place-items-center">
              <div className="flex justify-center items-center">
                <div className="flex-shrink-0 h-20 w-20">
                  <img className="h-full w-full rounded-full" src={photo} alt="Profile" />
                </div>
              </div>
              <div className="ml-3 mt-5 flex justify-center items-center">
                <label className="cursor-pointer text-blue-500 hover:text-blue-700">
                  Upload Profile Picture
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
              <div className={`mb-5 ${isMobile ? 'w-full' : 'w-1/2 pr-2'}`}>
                <label>
                  First Name
                  <input
                    type="text"
                    className="border border-gray-400 py-2 rounded-lg w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
              </div>
              <div className={`mb-5 ${isMobile ? 'w-full' : 'w-1/2 pl-2'}`}>
                <label>
                  Last Name
                  <input
                    type="text"
                    className="border border-gray-400 py-2 rounded-lg w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <div className="">
              <label>
                Your Birthday date
                <input
                  type="date"
                  className="border border-gray-400 py-2 px-1 rounded-lg w-full"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </label>
            </div>

            <div className="mt-5">
              <label htmlFor="">
                Country
                <select
                  name=""
                  id=""
                  className="border border-gray-400 py-2 rounded-lg w-full"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select your country</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </label>
            </div>

            <div className="mt-5">
              <label htmlFor="">
                City
                <select
                  className="border border-gray-400 py-2 rounded-lg w-full"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Select a city</option>
                  <optgroup label="Myanmar">
                    <option value="mandalay">Mandalay</option>
                    <option value="yangon">Yangon</option>
                    <option value="naypyidaw">NaypyiDaw</option>
                  </optgroup>
                  <optgroup label="America">
                    <option value="newyork">New York</option>
                    <option value="chicago">Chicago</option>
                    <option value="boston">Boston</option>
                  </optgroup>
                  <optgroup label="UK">
                    <option value="london">London</option>
                    <option value="manchester">Manchester</option>
                    <option value="oxford">Oxford</option>
                  </optgroup>
                </select>
              </label>
            </div>

            <div className="mt-5">
              <input type="checkbox" className="border border-gray-400" />
              <span>
                I accept the <a href="#" className="text-blue-300 font-semibold">Terms of Use</a> &amp;
                <a href="#" className="text-blue-300 font-semibold">Privacy Policy</a>
              </span>
            </div>

            <div className="mt-5">
              <button className="w-full bg-blue-300 py-3 text-center text-white hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg" type="submit">Create</button>
            </div>
          </form>
        </div>
        <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center ${isMobile ? 'hidden' : 'order-1 lg:order-2'}`} style={{ backgroundImage: `url(${photo})` }}>
          <h1 className="text-white text-3xl mb-3">Welcome</h1>
          <div>
            <p className="text-white">
              Ullam necessitatibus cumque voluptatem odio! Praesentium, ducimus est nihil, nostrum quo unde cum
              illum adipisci nemo recusandae quibusdam optio odit cupiditate ea?
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateProfilePage;
