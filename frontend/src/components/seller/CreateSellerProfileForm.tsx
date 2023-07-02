import axios from "axios";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

const CreateSellerProfileForm = () => {
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  const navigator = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const profileID = useSelector((state: RootState) => state.user.profileID);
    try {
      const res = await axios.post("http://localhost:5000/seller/", {
        description,
        contactInfo: { phone, email, address },
        socialMedia: { facebook, twitter, instagram },
      });

      const sellerID = res.data._id;

      axios
        .patch(`http://localhost:5000/profile/${profileID}`, {
          isSeller: true,
          seller: sellerID,
        })
        .then((res) => {
          console.log("Success");
          navigator("/");
        });
    } catch (err) {
      console.log("Error =>", err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            value={description}
            required
            placeholder="Tell us about your store!!"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={phone}
            required
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={email}
            required
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={address}
            required
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={facebook}
            placeholder="Facebook Account"
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={instagram}
            placeholder="Instagram"
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            value={twitter}
            placeholder="Twitter"
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>

        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default CreateSellerProfileForm;
