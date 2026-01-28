export default function EventBookings() {
  const bookings = [
    {
      id: 1,
      userEmail: "user1@email.com",
      eventTitle: "Tech Conference 2025",
      date: "12 Aug 2025",
      time: "10:00 AM",
      location: "Mumbai",
      tickets: 2,
      status: "Confirmed",
    },
    {
      id: 2,
      userEmail: "user2@email.com",
      eventTitle: "Startup Meetup",
      date: "25 Sep 2025",
      time: "6:00 PM",
      location: "Bangalore",
      tickets: 1,
      status: "Confirmed",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-textMain">
          Event <span className="text-primary-500">Bookings</span>
        </h1>
        <p className="text-textMuted mt-1">
          View bookings made for your events.
        </p>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-2xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-background-100 border-b border-border">
            <tr className="text-left text-textMuted">
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Event</th>
              <th className="px-6 py-4 font-medium">Date & Time</th>
              <th className="px-6 py-4 font-medium">Location</th>
              <th className="px-6 py-4 font-medium">Tickets</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-background-50 transition">
                <td className="px-6 py-4 text-textMuted">
                  #{b.id}
                </td>

                <td className="px-6 py-4 text-textMain">
                  {b.userEmail}
                </td>

                <td className="px-6 py-4 font-medium text-textMain">
                  {b.eventTitle}
                </td>

                <td className="px-6 py-4 text-textMuted">
                  {b.date}, {b.time}
                </td>

                <td className="px-6 py-4 text-textMuted">
                  {b.location}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium
                    bg-primary-100 text-primary-600">
                    {b.tickets}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={b.status} />
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
    Confirmed: "bg-accent-100 text-accent-600",
    Cancelled: "bg-red-100 text-red-600",
    Pending: "bg-primary-100 text-primary-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
