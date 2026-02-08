import { useState, useEffect} from "react";
import { logoutUser } from "../features/auth/authThunks";
import { getMyProfile } from "../features/user/userThunks";
import { clearUserState } from "../features/user/userSlice";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
  dispatch(getMyProfile());
  }, []);

  const profile = useSelector((state) => state.user.profile);
  console.log("profile:",profile)
  const handleLogout = async (e) => {
  e.preventDefault();
  try {
    await dispatch(logoutUser()).unwrap();
          dispatch(clearUserState());
    navigate("/");
  } catch (err) {
    console.error("Logout failed:", err);
  }
};

  return (
    <section className="bg-background-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* PROFILE HEADER */}
        <div className="bg-card border border-border rounded-3xl p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="flex items-center gap-6">
              <div className="w-28 h-28 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-500 font-bold text-3xl">U</span>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-textMain">
                  {profile?.userName}
                </h1>
                <p className="text-textMuted">
                  {profile?.email}
                </p>

                <div className="flex gap-3 mt-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-600">
                    {profile?.role}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-background-100 text-textMuted">
                    Joined {new Date(profile?.createdAt).toLocaleString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-primary-500 hover:bg-primary-600
              text-white px-6 py-3 rounded-xl font-medium transition"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* PROFILE CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT: PERSONAL INFO */}
          <div className="lg:col-span-2 space-y-8">

            {!isEditing && (
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-textMain mb-6">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <Info label="First Name" value={profile?.firstName} />
                  <Info label="Last Name" value={profile?.lastName} />
                  <Info label="Email" value={profile?.email} />
                  <Info label="Role" value={profile?.role} />
                </div>
              </div>
            )}

            {isEditing && (
    <div className="bg-card border border-border rounded-3xl p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-textMain">
          Edit Personal Information
        </h2>
        <p className="text-textMuted mt-1">
          Update your personal details below.
        </p>
      </div>

    <form className="space-y-8 max-w-2xl">

      {/* Name */}
      <div>
        <h4 className="text-sm font-semibold text-textMain mb-3">
          Basic Information
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-textMuted mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-3 rounded-xl border border-border
              focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm text-textMuted mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-3 rounded-xl border border-border
              focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-textMain mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-xl border border-border
          focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <p className="text-xs text-textMuted mt-1">
          This email will be used for event communication.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600
          text-white px-8 py-3 rounded-xl font-medium transition"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="border border-border px-8 py-3 rounded-xl
          hover:bg-background-100 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}

          </div>

          {/* RIGHT: ACCOUNT ACTIONS */}
          <div className="space-y-6">

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-textMain mb-4">
                Account Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full block text-center bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg transition">
                  Change Password
                </button>

                <button className="w-full border border-border py-2 rounded-lg text-red-600 hover:bg-red-50" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-textMuted text-xs">{label}</p>
      <p className="text-textMain font-medium">{value}</p>
    </div>
  );
}
