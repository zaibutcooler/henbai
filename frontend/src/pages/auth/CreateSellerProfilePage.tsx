import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../store/userSlice";

const CreateSellerProfilePage = () => {
  const [asking, setAsking] = useState(true);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="mt-20">
      {asking ? (
        <div>
          <h2>Are you interested in creating a seller account??</h2>
          <button
            onClick={() => {
              setAsking(false);
            }}>
            Yes!!
          </button>
          <button
            onClick={() => {
              dispatch(clearUser());
              navigator("/login");
            }}>
            No!!
          </button>
        </div>
      ) : (
        <div>
          <CreateSellerProfilePage />
        </div>
      )}
    </div>
  );
};

export default CreateSellerProfilePage;
