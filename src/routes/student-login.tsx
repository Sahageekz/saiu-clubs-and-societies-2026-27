import {
  createFileRoute,
  Link,
  useNavigate,
} from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/student-login")({
  component: StudentLogin,
});

function StudentLogin() {
  const navigate = useNavigate();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateStudentEmail = (value: string) => {
    const email = value.trim().toLowerCase();

    const pattern =
      /^[a-z0-9]+(?:[._-][a-z0-9]+)*\.[a-z0-9]+-\d{2}@[a-z0-9]+\.saiuniversity\.edu\.in$/;

    return pattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!validateStudentEmail(normalizedEmail)) {
      setError(
        "Please use your official Sai University student email. Example: srisahanaa.m-28@scds.saiuniversity.edu.in"
      );
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      if (mode === "register") {
        const { error: signUpError } =
          await supabase.auth.signUp({
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
              "This student email already has an account. Please use Login."
            );
          } else {
            setError(signUpError.message);
          }

          return;
        }

        setSuccess(
          "Account created successfully. Please check your university email for the verification link."
        );

        setMode("login");
        setPassword("");
        setConfirmPassword("");

        return;
      }

      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });

      if (loginError) {
        setError("Invalid student email or password.");
        return;
      }

      navigate({ to: "/" });
    } catch (err: any) {
      console.error(err);

      setError(
        err?.message ||
          "Something went wrong. Please try again."
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
              STUDENT LOGIN
            </h1>

            <p className="text-muted-foreground mt-3">
              Use your official Sai University student email.
            </p>
          </div>

          <div className="grid grid-cols-2 border border-border mb-6">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setError("");
                setSuccess("");
              }}
              className={`py-3 font-semibold ${
                mode === "login"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              LOGIN
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("register");
                setError("");
                setSuccess("");
              }}
              className={`py-3 font-semibold ${
                mode === "register"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              REGISTER
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Student Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="name.initial-28@scds.saiuniversity.edu.in"
                className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                required
              />

              <p className="text-xs text-muted-foreground mt-2">
                Format: student-name.initial-year@school.saiuniversity.edu.in
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Minimum 6 characters"
                className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                required
              />
            </div>

            {mode === "register" && (
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
            )}

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
              {loading
                ? mode === "login"
                  ? "LOGGING IN..."
                  : "CREATING ACCOUNT..."
                : mode === "login"
                  ? "LOGIN"
                  : "CREATE STUDENT ACCOUNT"}
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
