import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-primary-500 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
