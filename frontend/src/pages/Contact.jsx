export default function Contact() {
  return (
    <section className="bg-background-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Page Header */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-extrabold text-textMain">
            Contact <span className="text-primary-500">Us</span>
          </h1>
          <p className="mt-4 text-lg text-textMuted max-w-2xl mx-auto">
            Have questions, feedback, or need support?  
            We’re here to help you with anything related to events.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-textMain mb-2">
                Get in Touch
              </h3>
              <p className="text-textMuted mb-4">
                Reach out to us for event inquiries, partnerships, or technical
                support.
              </p>

              <ul className="space-y-3 text-textMuted text-sm">
                <li>
                  <span className="font-medium text-textMain">Email:</span>{" "}
                  support@myevents.com
                </li>
                <li>
                  <span className="font-medium text-textMain">Phone:</span>{" "}
                  +91 98765 43210
                </li>
                <li>
                  <span className="font-medium text-textMain">Location:</span>{" "}
                  India
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">
                Support Hours
              </h4>
              <p className="text-textMuted text-sm">
                Monday – Friday: 9:00 AM – 6:00 PM  
                <br />
                Saturday: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-textMain mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              {/* First & Last Name (single row) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-textMain mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-2 rounded-lg border border-border
                    focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-textMain mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-2 rounded-lg border border-border
                    focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Email with Verify */}
              <div>
                <label className="block text-sm font-medium text-textMain mb-1">
                  Email
                </label>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border
                    focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />

                  <button
                    type="button"
                    className="
                      px-4 py-2 rounded-lg border border-primary-500
                      text-primary-500 hover:bg-primary-50 font-medium
                      w-full sm:w-auto
                    "
                    onClick={() => {
                      // call API to send verification email
                      alert("Verification email sent!");
                    }}
                  >
                    Verify
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-textMain mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 rounded-lg border border-border 
                  focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 
                text-white py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
