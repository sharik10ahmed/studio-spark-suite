import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/ActionButton";
import { Icon } from "@/components/ui/Icon";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin Login | D Maker Dance & Fitness Studio" },
      {
        name: "description",
        content:
          "Secure demo admin login for managing programs, fitness services, gallery and events of D Maker Dance & Fitness Studio.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Login | D Maker Dance & Fitness Studio" },
      { property: "og:description", content: "Studio content management demo login." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminLogin,
});

const inputClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";

function AdminLogin() {
  const { login } = useStudio();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@dmakerdancestudio.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate({ to: "/admin" });
    } else {
      setError("Invalid credentials. Use the demo login shown below.");
    }
  };

  return (
    <div className="grid min-h-screen bg-ink-deep lg:grid-cols-2">
      <div className="hidden flex-col justify-between p-14 lg:flex">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center bg-primary font-display text-lg text-primary-foreground">
            D
          </span>
          <span className="font-display text-xl text-white">D Maker Studio</span>
        </Link>
        <div>
          <h2 className="font-display text-5xl leading-tight text-white">
            Manage every part of the studio website.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
            Programs, fitness services, choreography, gallery, events, testimonials, enquiries and
            site settings — all editable from one dashboard.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-white/35">Gadhinglaj, Maharashtra</p>
      </div>

      <div className="flex items-center justify-center bg-background px-5 py-16 sm:px-10">
        <form onSubmit={submit} className="w-full max-w-md">
          <h1 className="font-display text-3xl text-ink">Admin Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to the D Maker content dashboard.
          </p>

          <label className="mt-8 block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Email
            </span>
            <input
              type="email"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Password
            </span>
            <input
              type="password"
              className={inputClass}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}

          <Button type="submit" size="lg" className="mt-7 w-full">
            Sign In
            <Icon name="arrow" className="h-4 w-4" />
          </Button>

          <div className="mt-6 border border-dashed border-border bg-secondary p-4 text-xs text-muted-foreground">
            <span className="font-bold uppercase tracking-[0.16em] text-ink">Demo access</span>
            <p className="mt-2">admin@dmakerdancestudio.com</p>
            <p>admin123</p>
          </div>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon name="external" className="h-4 w-4" />
            Back to website
          </Link>
        </form>
      </div>
    </div>
  );
}
