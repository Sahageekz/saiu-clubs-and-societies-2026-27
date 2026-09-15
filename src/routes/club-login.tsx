import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

export default function ClubLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    // First check whether this is an authorized club email
    const { data: clubUser, error: clubError } = await supabase
      .from("club_users")
      .select("email, club")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (clubError) {
      console.error(clubError);
      setError("Unable to verify club email.");
      setLoading(false);
      return;
    }

    if (!clubUser) {
      setError(
        "This email is not registered as an official club email."
      );
      setLoading(false);
      return;
    }

    // Login through Supabase Auth
    const { error: loginError } =
      await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

    if (loginError) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    navigate({ to: "/management" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="border border-border bg-card p-8">
          <div className="mb-8">
            <p className="text-sm text-primary font-semibold tracking-widest">
              SAI UNIVERSITY
            </p>

            <h1 className="text-3xl font-bold mt-2">
              CLUB LOGIN
            </h1>

            <p className="text-muted-foreground mt-3">
              Login using your official club email.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                Club Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="musicclub@saiuniversity.edu.in"
                className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                required
              />
            </div>

            {error && (
              <div className="border border-red-500/40 bg-red-500/10 text-red-500 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "LOGGING IN..." : "LOGIN"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            First time here?{" "}
            <Link
              to="/club-register"
              className="text-primary font-semibold hover:underline"
            >
              Create Club Account
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/login"
              className="text-sm text-primary hover:underline"
            >
              ← Back to account selection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
