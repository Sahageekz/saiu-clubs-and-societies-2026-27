import { Link } from "@tanstack/react-router";

export default function StudentLogin() {
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
              Student accounts will be available here.
            </p>
          </div>

          <div className="border border-border p-5 text-sm text-muted-foreground">
            Student authentication is coming soon.
          </div>

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
