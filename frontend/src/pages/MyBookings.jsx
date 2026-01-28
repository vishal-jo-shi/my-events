import { Link } from "react-router-dom";

export default function MyBookings() {
  const bookings = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "12 Aug 2025",
      location: "Mumbai",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Startup Meetup",
      date: "25 Sep 2025",
      location: "Bangalore",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Music Night Live",
      date: "10 Oct 2025",
      location: "Delhi",
      status: "Cancelled",
    },
  ];

  return (
    <section className="bg-background-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-textMain">
            My <span className="text-primary-500">Bookings</span>
          </h1>
          <p className="text-textMuted mt-2">
            View and manage events you have booked.
          </p>
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <p className="text-textMuted mb-4">
              You haven’t booked any events yet.
            </p>
            <Link
              to="/events"
              className="bg-primary-500 hover:bg-primary-600
              text-white px-6 py-3 rounded-lg font-medium"
            >
              Explore Events
            </Link>
          </div>
        )}

        {/* Bookings List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-card border border-border rounded-2xl p-6
              hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-textMain">
                  {booking.title}
                </h3>

                <StatusBadge status={booking.status} />
              </div>

              <p className="text-textMuted text-sm">
                {booking.location} • {booking.date}
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to={`/events/${booking.id}`}
                  className="px-4 py-2 rounded-lg border border-border
                  text-sm hover:bg-background-100 transition"
                >
                  View Event
                </Link>

                {booking.status !== "Cancelled" && (
                  <button
                    className="px-4 py-2 rounded-lg text-sm
                    text-red-600 hover:bg-red-50 transition"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Confirmed: "bg-accent-100 text-accent-600",
    Upcoming: "bg-primary-100 text-primary-600",
    Cancelled: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
