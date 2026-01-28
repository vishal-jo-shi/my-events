import EventCard from "../components/EventCard";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "12 Aug 2025",
      location: "Mumbai",
      description:
        "Join industry leaders to explore the latest trends in technology.",
      status: "Tickets Available",
    },
    {
      id: 2,
      title: "Startup Meetup",
      date: "25 Sep 2025",
      location: "Bangalore",
      description:
        "Network with founders, investors, and innovators.",
      status: "Limited Seats",
    },
    {
      id: 3,
      title: "Music Night Live",
      date: "10 Oct 2025",
      location: "Delhi",
      description:
        "Experience an unforgettable night of live music.",
      status: "Sold Out",
    },
    {
      id: 4,
      title: "AI & ML Workshop",
      date: "5 Nov 2025",
      location: "Hyderabad",
      description:
        "Hands-on workshop on Artificial Intelligence and ML.",
      status: "Tickets Available",
    },
  ];

  return (
    <section className="bg-background-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-textMain">
            All <span className="text-primary-500">Events</span>
          </h1>
          <p className="text-textMuted mt-2">
            Browse and book events happening near you.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-10">
          {/* Filters (UI only) */}
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full text-sm 
              bg-primary-50 text-primary-600 hover:bg-primary-100">
              All
            </button>
            <button className="px-4 py-2 rounded-full text-sm 
              bg-card border border-border text-textMuted hover:text-primary-500">
              Tech
            </button>
            <button className="px-4 py-2 rounded-full text-sm 
              bg-card border border-border text-textMuted hover:text-primary-500">
              Music
            </button>
            <button className="px-4 py-2 rounded-full text-sm 
              bg-card border border-border text-textMuted hover:text-primary-500">
              Workshop
            </button>
            
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>
    </section>
  );
}
