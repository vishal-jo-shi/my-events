import { useState } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Rahul",
      lastName: "Sharma",
      email: "rahul@email.com",
      role: "user",
    },
    {
      id: 2,
      firstName: "Anita",
      lastName: "Verma",
      email: "anita@email.com",
      role: "organizer",
    },
    {
      id: 3,
      firstName: "Admin",
      lastName: "User",
      email: "admin@email.com",
      role: "admin",
    },
  ]);

  // 🔁 role change handler
  const handleRoleChange = (userId, newRole) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId ? { ...u, role: newRole } : u
      )
    );

    // 🔗 later backend API
    console.log("Update role:", userId, newRole);
    // dispatch(updateUserRole({ userId, role: newRole }))
  };

  return (
    <section>
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-textMain">
          All <span className="text-primary-500">Users</span>
        </h1>
        <p className="text-textMuted mt-2">
          List of all registered users.
        </p>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {/* Head */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-background-100
          text-sm font-semibold text-textMain">
          <div className="col-span-1">ID</div>
          <div className="col-span-3">Full Name</div>
          <div className="col-span-4">Email</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Rows */}
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-12 gap-4 px-6 py-4
            border-t border-border items-center text-sm"
          >
            <div className="col-span-1 text-textMuted">
              #{user.id}
            </div>

            <div className="col-span-3 font-medium text-textMain">
              {user.firstName} {user.lastName}
            </div>

            <div className="col-span-4 text-textMuted">
              {user.email}
            </div>

            {/* 🔽 ROLE DROPDOWN */}
            <div className="col-span-2">
              <RoleDropdown
                value={user.role}
                onChange={(role) =>
                  handleRoleChange(user.id, role)
                }
              />
            </div>

            <div className="col-span-2 text-right">
              <button className="text-primary-500 hover:underline text-sm">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
