import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import "../styles/theme.css";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="text-[var(--color-primary-contrast)] py-20 w-full"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Our Amazing Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We help businesses grow by providing innovative solutions that
              drive results.
            </p>
            <Link
              to="/about"
              className="bg-[var(--color-primary-contrast)] text-[var(--color-primary)] font-bold py-3 px-8 rounded-full hover:bg-[var(--color-hover)] transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[var(--color-background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
            Our Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-md">
              <div className="text-[var(--color-primary)] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-text)]">
                Lightning Fast
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Our platform is optimized for speed, ensuring your business
                operates efficiently.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-md">
              <div className="text-[var(--color-primary)] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-text)]">
                Secure & Reliable
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Security is our top priority. Your data is always protected with
                enterprise-grade security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-md">
              <div className="text-[var(--color-primary)] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-text)]">
                Team Collaboration
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Enhance productivity with our powerful collaboration tools
                designed for teams of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
            Stay Updated
          </h2>
          <SignUpForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
