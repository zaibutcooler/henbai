import axios from "axios";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfileID } from "../../store/userSlice";
import { RootState } from "../../store";

const CreateProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const navigator = useNavigate();
  const dispatch = useDispatch();

  const userID = useSelector((state: RootState) => state.profile.user);

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
    <div>
      <form onSubmit={handleSubmit} className="pt-20">
        <div className="mb-4">
          <input
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={dateOfBirth}
            type="date"
            placeholder="Date of Birth"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default CreateProfilePage;
