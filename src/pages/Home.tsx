import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import "../styles/theme.css";
import lvndrVideo from "../assets/images/lvndr.mp4";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-[var(--color-primary-contrast)] py-10 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <video
              src={lvndrVideo}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-3/4 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[var(--color-background-alt)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Some fit inside the boxes. Some are happy with normal.</p>
            <p className="mt-4">
              And then there are the rest of us: the different, the quiet, the
              bold. <br />
              The dreamers of forbidden dreams.
            </p>
            <p className="mt-4">
              Come join us, where we live and love our own way. Find her, him,
              or them. <br />
              Create your own life and love outside the lines.{" "}
            </p>
            <p className="mt-4">Sign up below for exclusive early access.</p>
          </div>
          <div className="h-8"></div>
          <SignUpForm />
          <div className="h-8"></div>
          <div className="text-center text-xs">
            ⭐ The first 555 members get 6 free weeks, plus an extra free week
            for every friend they bring along.
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text)]">
            Our mission
          </h2>

          <div className="text-center">
            At Lavender, love knows no bounds. We're here to foster connections
            that defy the ordinary. Whether you're seeking a lifelong friend, a
            non-traditional partner, or a connection that defies every rule, we
            create a welcoming space for every kind of relationship. Connect
            with your match now to love outside the lines.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
