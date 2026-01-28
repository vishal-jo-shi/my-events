import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authThunks";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // =====================
  // FORM STATES
  // =====================
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  // =====================
  // SUBMIT HANDLER
  // =====================
  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    name: `${firstName.trim()} ${lastName.trim()}`,
    userName: userName.trim(),
    email: email.trim().toLowerCase(),
    password,
  };

  const res = await dispatch(registerUser(payload));
  

  if (res.meta.requestStatus === "fulfilled") {
    navigate("/auth/login"); // go to login after register
  }
  
};


  return (
    <section className="bg-background-50 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl px-5 py-6 sm:px-8 sm:py-8">

        <h2 className="text-3xl font-bold text-textMain text-center">
          Create Account
        </h2>
        <p className="text-textMuted text-center mt-2">
          Join us and start managing events easily.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 sm:mt-8 space-y-4 sm:space-y-5"
        >

          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-textMain mb-1">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                className="w-full px-4 py-2 rounded-lg border border-border
                focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textMain mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
                className="w-full px-4 py-2 rounded-lg border border-border
                focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-textMain mb-1">
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Choose a unique username"
              required
              className="w-full px-4 py-2 rounded-lg border border-border
              focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-textMain mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg border border-border
              focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-textMain mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              required
              className="w-full px-4 py-2 pr-12 rounded-lg border border-border
              focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-textMuted"
            >
              {showPassword ? (
                // Eye Off
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.402-3.221 1.125-4.575M6.18 6.18A9.956 9.956 0 0112 5c5.523 0 10 4.477 10 10a9.958 9.958 0 01-4.293 8.203M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
              ) : (
                // Eye
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600
            text-white py-3 rounded-lg font-medium transition"
          >
            Sign Up
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}

        </form>

        <p className="text-sm text-textMuted text-center mt-6">
          Already have an account?
          <Link
            to="/auth/login"
            className="text-primary-500 hover:underline ml-1 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
