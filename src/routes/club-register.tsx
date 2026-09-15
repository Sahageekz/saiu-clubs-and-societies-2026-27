import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

export default function ClubRegister() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Please enter your club email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // Check whether this is an authorized club email
      const { data: clubUser, error: clubError } = await supabase
        .from("club_users")
        .select("email, club")
        .eq("email", normalizedEmail)
        .maybeSingle();

      if (clubError) {
        throw clubError;
      }

      if (!clubUser) {
        setError(
          "This email is not registered as an official club email."
        );
        return;
      }

      // Create the Supabase login account
      const { error: signUpError } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
      });

      if (signUpError) {
        if (
          signUpError.message
            .toLowerCase()
            .includes("already registered")
        ) {
          setError(
            "This club email already has an account. Please use the Login option."
          );
        } else {
          setError(signUpError.message);
        }

        return;
      }

      setSuccess(
        `Account created for ${clubUser.club}. You can now log in using this club email.`
      );

      setTimeout(() => {
        navigate({ to: "/login" });
      }, 2000);
    } catch (err: any) {
      console.error(err);
      setError(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
              CLUB ACCOUNT
            </h1>

            <p className="text-muted-foreground mt-3">
              Create an account using your official club email.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
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
                Create Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Enter password again"
                className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                required
              />
            </div>

            {error && (
              <div className="border border-red-500/40 bg-red-500/10 text-red-500 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="border border-green-500/40 bg-green-500/10 text-green-500 px-4 py-3 text-sm">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE CLUB ACCOUNT"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
