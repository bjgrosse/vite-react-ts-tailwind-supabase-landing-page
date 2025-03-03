import { useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/theme.css";
import { PROJECT_KEY } from "../constants";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Set loading state
    setStatus("loading");
    setMessage("");

    try {
      // Insert the email into Supabase
      const { error } = await supabase
        .from("signups")
        .insert([
          {
            email,
            project_key: PROJECT_KEY,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      setStatus("success");
      setMessage("Thank you for signing up! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
      setStatus("error");
      setMessage("Sorry, something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-[var(--color-background-alt)] p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-[var(--color-text)]">
        Sign Up for Updates
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text)]"
            disabled={status === "loading"}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[var(--color-primary)] text-[var(--color-primary-contrast)] py-2 px-4 rounded-md hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Submitting..." : "Sign Up"}
        </button>

        {status === "success" && (
          <div className="p-3 bg-green-100 text-green-700 rounded-md">
            {message}
          </div>
        )}

        {status === "error" && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
