import SignUpForm from "../components/SignUpForm";
import "../styles/theme.css";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Hero Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="text-center text-[var(--color-primary-contrast)] px-3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Learn more about our company and our mission to transform the
            industry.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
              Our Story
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Founded in 2023, YourCompany started with a simple mission: to
              create innovative solutions that help businesses thrive in the
              digital age.
            </p>
            <p className="text-[var(--color-text-secondary)] mb-4">
              What began as a small team of passionate individuals has grown
              into a dynamic company serving clients worldwide. Our commitment
              to excellence and customer satisfaction remains at the core of
              everything we do.
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Today, we continue to push the boundaries of what's possible,
              leveraging cutting-edge technology to solve complex problems and
              deliver exceptional results for our clients.
            </p>
          </div>
          <div className="bg-[var(--color-background-alt)] h-80 rounded-lg flex items-center justify-center">
            <span className="text-[var(--color-text-secondary)]">
              Company Image
            </span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[var(--color-background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-[var(--color-background-alt)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--color-text-secondary)]">
                  Photo
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-[var(--color-text)]">
                Jane Doe
              </h3>
              <p className="text-[var(--color-primary)] mb-3">CEO & Founder</p>
              <p className="text-[var(--color-text-secondary)]">
                With over 15 years of industry experience, Jane leads our
                company with vision and passion.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-[var(--color-background-alt)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--color-text-secondary)]">
                  Photo
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-[var(--color-text)]">
                John Smith
              </h3>
              <p className="text-[var(--color-primary)] mb-3">CTO</p>
              <p className="text-[var(--color-text-secondary)]">
                John oversees our technical strategy and ensures we stay at the
                forefront of innovation.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-[var(--color-background-alt)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--color-text-secondary)]">
                  Photo
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-[var(--color-text)]">
                Emily Johnson
              </h3>
              <p className="text-[var(--color-primary)] mb-3">Head of Design</p>
              <p className="text-[var(--color-text-secondary)]">
                Emily brings creativity and user-focused thinking to every
                project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
          Join Our Newsletter
        </h2>
        <SignUpForm />
      </section>
    </div>
  );
};

export default About;
