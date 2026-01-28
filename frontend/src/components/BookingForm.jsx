export default function BookingForm() {
  return (
    <section className="bg-background-50">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-textMain">
            Book <span className="text-primary-500">Your Ticket</span>
          </h2>
          <p className="text-textMuted mt-2">
            Fill in the details below to complete your booking.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <form className="space-y-6">

            {/* Name */}
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

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-textMain mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-border
                focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Tickets */}
            <div>
              <label className="block text-sm font-medium text-textMain mb-1">
                Number of Tickets
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-border
                focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-textMain mb-1">
                Additional Notes (optional)
              </label>
              <textarea
                rows="3"
                placeholder="Any special requirements?"
                className="w-full px-4 py-2 rounded-lg border border-border
                focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-accent-500 hover:bg-accent-600
              text-white py-3 rounded-lg font-medium transition"
            >
              Confirm Booking
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
