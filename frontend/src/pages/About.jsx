export default function About() {
  return (
    <section className="bg-background-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Page Header */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-extrabold text-textMain">
            About <span className="text-primary-500">My Events</span>
          </h1>
          <p className="mt-4 text-lg text-textMuted max-w-2xl mx-auto">
            My Events is a complete online event management platform designed
            to simplify event discovery, organization, and booking.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-textMain mb-4">
              What We Do
            </h2>
            <p className="text-textMuted mb-4">
              We provide a centralized platform where users can explore events,
              organizers can manage registrations, and admins can monitor the
              entire system efficiently.
            </p>
            <p className="text-textMuted">
              From conferences and workshops to cultural and entertainment
              events, My Events supports all event types with a seamless user
              experience.
            </p>
          </div>

          {/* Card */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-textMain mb-2">
              Our Mission
            </h3>
            <p className="text-textMuted">
              To make event management simple, transparent, and accessible for
              everyone through modern technology and intuitive design.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-textMain mb-8 text-center">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-textMain mb-2">
                Easy to Use
              </h4>
              <p className="text-textMuted text-sm">
                Simple and intuitive interface for users and organizers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-textMain mb-2">
                Secure Platform
              </h4>
              <p className="text-textMuted text-sm">
                Secure authentication and reliable data handling.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-textMain mb-2">
                Scalable System
              </h4>
              <p className="text-textMuted text-sm">
                Designed to handle small to large-scale events.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-textMain mb-2">
                Real-time Updates
              </h4>
              <p className="text-textMuted text-sm">
                Stay informed with instant event updates and notifications.
              </p>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold text-primary-500">500+</h3>
              <p className="text-textMuted mt-2">Events Managed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary-500">10k+</h3>
              <p className="text-textMuted mt-2">Users Registered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary-500">100+</h3>
              <p className="text-textMuted mt-2">Organizers Onboarded</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
