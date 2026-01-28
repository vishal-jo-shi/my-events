import EventCard from "../EventCard";

export default function Hero() {
  const event =  {
      id: 1,
      title: "Tech Conference 2025",
      date: "12 Aug 2025",
      location: "Mumbai",
      description:
        "Join industry leaders to explore the latest trends in technology.",
      status: "Tickets Available",
    }
  return (
    <section className="bg-background-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full 
              bg-primary-50 text-primary-600 text-sm font-medium">
              Manage Events Seamlessly
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-textMain leading-tight">
              Discover, Manage & Book  
              <span className="text-primary-500"> Events</span>  
              <br />All in One Place
            </h1>

            <p className="mt-6 text-lg text-textMuted">
              A complete online event management platform to explore events,
              manage registrations, and book tickets effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-primary-500 hover:bg-primary-600 
                text-white px-6 py-3 rounded-lg font-medium transition">
                <a href="/events"> Explore Events </a>
              </button>

              <button className="border border-border 
                text-secondary-500 hover:text-primary-500 
                px-6 py-3 rounded-lg font-medium transition">
                Create Event
              </button>
            </div>
          </div>

          {/* Right Illustration / Card */}
          {/* <EventCard key={event.id} event={event} /> */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-textMain mb-2">
                Upcoming Event
              </h3>

              <p className="text-textMuted mb-4">
                Tech Conference 2025 • Mumbai
              </p>

              <div className="flex items-center justify-between">
                <span className="text-accent-500 font-semibold">
                  Tickets Available
                </span>
                <button className="bg-accent-500 hover:bg-accent-600 
                  text-white px-4 py-2 rounded-lg text-sm">
                  Book Now
                </button>
              </div>
            </div>

            {/* Decorative Background */}
             <div className="absolute -top-6 -right-6 w-40 h-40 
              bg-primary-100 rounded-full blur-3xl -z-10"></div>
          </div> 

        </div>
      </div>
    </section>
  );
}
