import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const role = isAuthenticated ? user?.role : "guest";  // guest | user | organizer | admin

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  /* =====================
     ROLE LOGIC (ONE PLACE)
  ===================== */
  const showMyBookings = role === "user" || role === "organizer";
  const showDashboard = role === "organizer" || role === "admin";
  const dashboardPath = role === "admin" ? "/admin/dashboard" : "/dashboard";

  /* =====================
     AUTH LINKS RENDERER
  ===================== */
  const renderAuthLinks = (isMobile = false) => {
    const btnBase =
      "bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg text-white";
    const btnMobile = "w-full block text-center";

    if (role=== 'guest') {
      return (
        <>
          <Link
            to="/auth/login"
            className={`${btnBase} ${isMobile ? btnMobile : ""}`}
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className={`${btnBase} ${isMobile ? btnMobile : ""}`}
          >
            Sign Up
          </Link>
        </>
      );
    }

    return (
      <>
        {showMyBookings && (
          <Link
            to="/my-booking"
            className={`${btnBase} ${isMobile ? btnMobile : ""}`}
          >
            My Bookings
          </Link>
        )}

        {showDashboard && (
          <Link
            to={dashboardPath}
            className={`${btnBase} ${isMobile ? btnMobile : ""}`}
          >
            Dashboard
          </Link>
        )}

        <Link
          to="/my-profile/1"
          className={`${btnBase} ${isMobile ? btnMobile : ""}`}
        >
          My Profile
        </Link>
      </>
    );
  };

  return (
    <nav className="sticky top-0 z-50 text-secondary bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold text-primary-400">ME</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary-400">Home</Link>
            <Link to="/events" className="hover:text-primary-400">Events</Link>
            <Link to="/about" className="hover:text-primary-400">About</Link>
            <Link to="/contact" className="hover:text-primary-400">Contact</Link>
          </div>

          {/* Desktop Search + CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Bar */}
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search events..."
                className="px-3 py-2 outline-none text-sm bg-transparent"
              />
              <button className="bg-primary-500 hover:bg-primary-600 px-3 py-2 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </button>
            </div>

            {renderAuthLinks()}
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center md:hidden space-x-3">
            <button onClick={() => { setIsSearchOpen(!isSearchOpen); setIsOpen(false); }}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>

            <button onClick={() => { setIsOpen(!isOpen); setIsSearchOpen(false); }}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="flex border border-border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-3 py-2 outline-none text-sm"
            />
            <button className="bg-primary-500 hover:bg-primary-600 px-4 text-white">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 ml-3">
          <Link to="/" className="block hover:text-primary-400">Home</Link>
          <Link to="/events" className="block hover:text-primary-400">Events</Link>
          <Link to="/about" className="block hover:text-primary-400">About</Link>
          <Link to="/contact" className="block hover:text-primary-400">Contact</Link>

          {renderAuthLinks(true)}
        </div>
      )}
    </nav>
  );
}
