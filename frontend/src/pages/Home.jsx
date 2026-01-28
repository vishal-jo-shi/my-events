import Hero from "../components/UI/Hero"
import EventCard from "../components/EventCard"
export default function Home() {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
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
  return (
    <>
      <Hero/>
        <section className="bg-background-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">

          {/* Section Heading */}
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-textMain">
                Upcoming Events
              </h2>
              <p className="text-textMuted mt-2">
                Explore and book events happening near you.
              </p>
            </div>

            {/* See More Button */}
            <button className="hidden sm:inline-flex items-center gap-2 
              text-primary-500 hover:text-primary-600 font-medium transition">
              See More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
