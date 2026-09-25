import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/management-login")({
  component: ManagementLogin,
});

function ManagementLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(
    "studentcouncil.saiu@saiuniversity.edu.in"
  );
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const normalizedEmail = email.trim().toLowerCase();

      // First authenticate the user.
      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });

      if (loginError) {
        setError("Invalid email or password.");
        return;
      }

      // Now that the user is authenticated, use the
      // security-definer function to verify management access.
      const { data: isManagement, error: managementError } =
        await supabase.rpc("is_management_user");

      if (managementError) {
        console.error(managementError);

        await supabase.auth.signOut();

        setError(
          "Unable to verify management access. Please try again."
        );

        return;
      }

      if (!isManagement) {
        await supabase.auth.signOut();

        setError(
          "This account is not authorized for management access."
        );

        return;
      }

      navigate({ to: "/management" });
    } catch (err: any) {
      console.error(err);

      await supabase.auth.signOut();

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
              MANAGEMENT LOGIN
            </h1>

            <p className="text-muted-foreground mt-3">
              Login using your Management / Student Council account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="studentcouncil.saiu@saiuniversity.edu.in"
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

          <div className="mt-6 text-center">
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
