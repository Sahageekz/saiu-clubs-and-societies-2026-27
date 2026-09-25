import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

type LoginType = "student" | "management" | "club" | null;

function LoginPage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<LoginType>(null);

  const handleContinue = () => {
    if (selectedType === "student") {
      navigate({ to: "/student-login" });
    }

    if (selectedType === "management") {
      navigate({ to: "/management-login" });
    }

    if (selectedType === "club") {
      navigate({ to: "/club-login" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <div className="border border-border bg-card p-8 md:p-10">
          <div className="mb-8">
            <p className="text-sm text-primary font-semibold tracking-widest">
              SAI UNIVERSITY
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              LOGIN
            </h1>

            <p className="text-muted-foreground mt-3">
              Select the account type you want to access.
            </p>
          </div>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setSelectedType("student")}
              className={`w-full text-left border p-5 transition ${
                selectedType === "student"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="font-semibold text-lg">
                Student
              </div>

              <div className="text-sm text-muted-foreground mt-1">
                Login to your student account.
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType("management")}
              className={`w-full text-left border p-5 transition ${
                selectedType === "management"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="font-semibold text-lg">
                Management / Student Council
              </div>

              <div className="text-sm text-muted-foreground mt-1">
                Access applications and club management.
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType("club")}
              className={`w-full text-left border p-5 transition ${
                selectedType === "club"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="font-semibold text-lg">
                Club President / Vice President
              </div>

              <div className="text-sm text-muted-foreground mt-1">
                Login to manage your club.
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
            <a
              href="/"
              className="text-sm text-primary hover:underline"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
