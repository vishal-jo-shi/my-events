import { Link, useParams } from "react-router-dom";

export default function EventDetails() {
  const { eventId } = useParams();

  const events = [
    {
      id: 1,
      title: "Tech Conference",
      date: "12 Aug 2025",
      location: "Mumbai",
      description: "Join industry leaders to explore the latest trends in technology.",
      status: "Tickets Available",
    },
    {
      id: 2,
      title: "Startup Meetup",
      date: "25 Sep 2025",
      location: "Bangalore",
      description: "Network with founders, investors, and innovators.",
      status: "Limited Seats",
    },
    {
      id: 3,
      title: "Music Night Live",
      date: "10 Oct 2025",
      location: "Delhi",
      description: "Experience an unforgettable night of live music and performances.",
      status: "Sold Out",
    },
  ];

  const event = events.find(e => e.id === Number(eventId));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-textMain">
        Event not found
      </div>
    );
  }

  return (
    <section className="bg-background-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-textMain">
            {event.title}
          </h1>
          <p className="text-textMuted mt-2">
            {event.location} • {event.date}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">

            <div className="h-64 bg-primary-100 rounded-2xl flex items-center justify-center">
              <span className="text-primary-500 font-semibold">
                Event Banner
              </span>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-textMain mb-3">
                About the Event
              </h2>
              <p className="text-textMuted">
                {event.description}
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-textMain mb-2">
                Organizer
              </h3>
              <p className="text-textMuted">
                Organized by <span className="text-primary-500 font-medium">My Events Team</span>
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="bg-card border border-border rounded-2xl p-6 h-fit">
            <h3 className="text-lg font-semibold text-textMain mb-4">
              Event Details
            </h3>

            <ul className="space-y-3 text-textMuted text-sm mb-6">
              <li><span className="font-medium text-textMain">Date:</span> {event.date}</li>
              <li><span className="font-medium text-textMain">Location:</span> {event.location}</li>
              <li><span className="font-medium text-textMain">Status:</span>
                <span className="text-accent-500 font-semibold ml-1">
                  {event.status}
                </span>
              </li>
            </ul>

            <Link
              to={`/event/${event.id}/book`}
              className="block text-center bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-medium"
            >
              Book Ticket
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
