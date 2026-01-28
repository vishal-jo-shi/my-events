export default function AllBookings() {
  const bookings = [
    {
      id: 1,
      userEmail: "user@email.com",
      eventTitle: "Tech Conference 2025",
      date: "12 Aug 2025",
      time: "10:00 AM",
      location: "Mumbai",
      tickets: 2,
    },
    {
      id: 2,
      userEmail: "user2@email.com",
      eventTitle: "Music Fest",
      date: "20 Sep 2025",
      time: "7:00 PM",
      location: "Delhi",
      tickets: 4,
    },
  ];

  return (
    <section>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-textMain">
          All <span className="text-primary-500">Bookings</span>
        </h1>
        <p className="text-textMuted mt-1">
          View all event bookings made by users.
        </p>
      </div>

      {/* Empty State */}
      {bookings.length === 0 && (
        <div className="bg-card border border-border rounded-2xl p-10 text-center text-textMuted">
          No bookings found.
        </div>
      )}

      {/* Table */}
      {bookings.length > 0 && (
        <div className="bg-card border border-border rounded-2xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-background-100 border-b border-border">
              <tr className="text-left text-textMuted">
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Event</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Time</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Tickets</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {bookings.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-background-50 transition"
                >
                  <td className="px-6 py-4 text-textMain">
                    {b.userEmail}
                  </td>
                  <td className="px-6 py-4 font-medium text-textMain">
                    {b.eventTitle}
                  </td>
                  <td className="px-6 py-4 text-textMuted">
                    {b.date}
                  </td>
                  <td className="px-6 py-4 text-textMuted">
                    {b.time}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
