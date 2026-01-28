import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authThunks";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  /* =====================
     SUBMIT HANDLER
  ===================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userName: userName.trim(),
      password,
    };

    const res = await dispatch(loginUser(payload));

    // ✅ Login success → redirect
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <section className="bg-background-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-textMain text-center">
          Login
        </h2>
        <p className="text-textMuted text-center mt-2">
          Welcome back! Please login to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-textMain mb-1">
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
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
              placeholder="Enter password"
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

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-500 hover:bg-primary-600 
            text-white py-3 rounded-lg font-medium transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-sm text-textMuted text-center mt-6">
          Don’t have an account?
          <Link
            to="/auth/register"
            className="text-primary-500 hover:underline ml-1 font-medium"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </section>
  );
}
