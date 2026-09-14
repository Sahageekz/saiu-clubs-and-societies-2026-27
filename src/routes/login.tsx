import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Invalid email or password.");
      return;
    }

    navigate({ to: "/management" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <a
          href="/"
          className="inline-flex items-center gap-3 mb-10"
        >
          <div className="w-9 h-9 bg-primary grid place-items-center -skew-x-12">
            <span className="skew-x-12 font-display text-primary-foreground text-lg">
              S
            </span>
          </div>

          <span className="font-display tracking-wide text-lg">
            SAIU CLUBS AND SOCIETIES
          </span>
        </a>

        <div className="border border-border bg-card p-8 md:p-10">
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            SAI UNIVERSITY
          </span>

          <h1 className="font-display text-5xl uppercase leading-none mt-3">
            Login
          </h1>

          <p className="text-foreground/60 text-sm mt-4">
            Sign in to access the Clubs and Societies portal.
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5 mt-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>

            {error && (
              <div className="border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-display tracking-wide py-4 text-base hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "LOGGING IN..." : "LOGIN"}
            </button>
          </form>

          <div className="mt-6">
            <a
              href="/"
              className="text-sm text-foreground/50 hover:text-primary transition"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
