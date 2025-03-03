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
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              At Lavender, we believe love is limitless. Born from the desire to
              create a space where connection thrives beyond labels, we welcome
              people of every age, every stage, every life path. No matter your
              sexual orientation, gender identity, or how you define yourself,
              Lavender Love is a place where you belong.{" "}
            </p>

            <p className="text-[var(--color-text-secondary)] mb-4">
              Here, love isn’t confined to traditional romance. It’s about
              finding your people—the ones who truly see you, who choose to
              stand beside you, and who want to build a life with you. Whether
              you seek a lifelong partner, a chosen family, or a bond that
              exists outside the traditional mold, you’ll find a home here.
            </p>

            <p className="text-[var(--color-text-secondary)] mb-4">
              Society tells us that love must look a certain way. But we know
              better. We know that love takes infinite forms, and we embrace
              them all. Lavender Love is more than a dating app—it’s a movement,
              a safe haven, and a revolution in how we connect.{" "}
            </p>

            <p className="text-[var(--color-text-secondary)] mb-4">
              Join us and discover a space where love knows no bounds. Whether
              you're seeking a lifelong friend, a non-traditional partner, or a
              connection that defies every rule, Lavender Love is here to help
              you find your people and build the life you choose. Love outside
              the lines.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="pb-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-[var(--color-text)]">
          Join the waitlist
        </h2>
        <SignUpForm />
      </section>
    </div>
  );
};

export default About;
