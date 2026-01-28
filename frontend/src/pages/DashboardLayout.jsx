import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout({ role = "organizer" }) {
  const organizerNav = [
    { path: "/dashboard", label: "Create Event" },
    { path: "/dashboard/my-events", label: "My Events" },
    { path: "/dashboard/event-bookings", label: "Event Bookings" },
  ];

  const adminNav = [
    { path: "/admin/dashboard", label: "All Events" },
    { path: "/admin/dashboard/all-users", label: "All Users" },
    { path: "/admin/dashboard/all-bookings", label: "All Bookings" },
  ];

  const navItems = role === "admin" ? adminNav : organizerNav;

  return (
    <section className="bg-background-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-500 font-bold">U</span>
                </div>
                <div>
                  <p className="font-semibold text-textMain">User Name</p>
                  <p className="text-xs text-textMuted capitalize">{role}</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/dashboard" || item.path === "/admin/dashboard"}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition
                      ${
                        isActive
                          ? "bg-primary-500 text-white"
                          : "text-textMuted hover:bg-background-100"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 min-h-[400px]">
              <Outlet />
            </div>
          </main>

        </div>
      </div>
    </section>
  );
}
