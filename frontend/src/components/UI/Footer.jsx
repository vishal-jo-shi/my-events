export default function Footer() {
  return (
    <footer className="bg-secondary-600 text-secondary-50">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary-400">
              ME <span className="text-white">My Events</span>
            </h3>
            <p className="mt-4 text-secondary-100 text-sm">
              A complete online event management system to discover,
              manage, and book events effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary-400">Home</a></li>
              <li><a href="/events" className="hover:text-primary-400">Events</a></li>
              <li><a href="/about" className="hover:text-primary-400">About</a></li>
              <li><a href="/contact" className="hover:text-primary-400">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-secondary-100">
              <li>Email: support@myevents.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-secondary-500 mt-10 pt-6 text-center text-sm text-secondary-200">
          © {new Date().getFullYear()} My Events. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
