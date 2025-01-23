import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../features/userSlice";
import { useState } from "react";
import { fetchUser } from "../features/userSlice";
const Login = () => {
  const { isLogin, currentEmail, currentPassword, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");

  return (
    <div>
      {error && <p>{error}</p>}

      {isLogin == "false" && (
        <div>
          <input
            type="email"
            placeholder="please enter email"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="please enter password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(setEmail(mail));
              dispatch(setPassword(pass));
              dispatch(fetchUser());
            }}
          >
            login
          </button>
        </div>
      )}

      {isLogin == "true" && <p> user successfully loginned! </p>}
    </div>
  );
};

export default Login;
