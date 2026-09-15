import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

type LoginType = "student" | "management" | "club" | null;

export default function Login() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<LoginType>(null);

  const handleContinue = () => {
    if (!selectedType) return;

    if (selectedType === "management") {
      navigate({ to: "/management-login" });
      return;
    }

    if (selectedType === "club") {
      navigate({ to: "/club-login" });
      return;
    }

    if (selectedType === "student") {
      navigate({ to: "/student-login" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <div className="border border-border bg-card p-8 md:p-10">
          <div className="mb-10 text-center">
            <p className="text-sm text-primary font-semibold tracking-widest">
              SAI UNIVERSITY
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-3">
              LOGIN
            </h1>

            <p className="text-muted-foreground mt-3">
              Select your account type to continue.
            </p>
          </div>

          <div className="grid gap-4">
            <button
              type="button"
              onClick={() => setSelectedType("student")}
              className={`w-full border p-6 text-left transition ${
                selectedType === "student"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Student
                  </h2>

                  <p className="text-sm text-muted-foreground mt-1">
                    Login to your student account.
                  </p>
                </div>

                <span className="text-2xl">→</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType("management")}
              className={`w-full border p-6 text-left transition ${
                selectedType === "management"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Management / Student Council
                  </h2>

                  <p className="text-sm text-muted-foreground mt-1">
                    Access applications and management information.
                  </p>
                </div>

                <span className="text-2xl">→</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType("club")}
              className={`w-full border p-6 text-left transition ${
                selectedType === "club"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Club President / Vice President
                  </h2>

                  <p className="text-sm text-muted-foreground mt-1">
                    Login using your official club email.
                  </p>
                </div>

                <span className="text-2xl">→</span>
              </div>
            </button>
          </div>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedType}
            className="w-full mt-8 bg-primary text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            CONTINUE
          </button>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
