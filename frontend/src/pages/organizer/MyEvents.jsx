import { Link } from "react-router-dom";

export default function MyEvents() {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "12 Aug 2025",
      time: "10:00 AM",
      location: "Mumbai",
      status: "Approved",
    },
    {
      id: 2,
      title: "Startup Meetup",
      date: "25 Sep 2025",
      time: "06:00 PM",
      location: "Bangalore",
      status: "Pending",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-textMain">
          My <span className="text-primary-500">Events</span>
        </h1>
        <p className="text-textMuted mt-1">
          Manage events you have created.
        </p>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-2xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-background-100 border-b border-border">
            <tr className="text-left text-textMuted">
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">Event Name</th>
              <th className="px-6 py-4 font-medium">Date & Time</th>
              <th className="px-6 py-4 font-medium">Location</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-background-50 transition">
                <td className="px-6 py-4 text-textMuted">
                  #{event.id}
                </td>

                <td className="px-6 py-4 font-medium text-textMain">
                  {event.title}
                </td>

                <td className="px-6 py-4 text-textMuted">
                  {event.date}, {event.time}
                </td>

                <td className="px-6 py-4 text-textMuted">
                  {event.location}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={event.status} />
                </td>

                <td className="px-6 py-4 text-right space-x-3">
                  <Link
                    to={`/dashboard/edit-event/${event.id}`}
                    className="text-primary-500 hover:underline font-medium"
                  >
                    Edit
                  </Link>

                  <button
                    className="text-red-600 hover:underline font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* Status Badge */
function StatusBadge({ status }) {
  const styles = {
    Approved: "bg-accent-100 text-accent-600",
    Pending: "bg-primary-100 text-primary-600",
    Rejected: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
