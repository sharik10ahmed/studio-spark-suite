import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/ActionButton";
import { Icon } from "@/components/ui/Icon";
import { useStudio } from "@/store/studio";

const field =
  "w-full border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function ContactForm() {
  const { programs, choreography, addEnquiry } = useStudio();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const options = [
    ...programs.items.map((p) => p.name),
    "Functional Fitness",
    ...choreography.items.map((c) => c.name),
  ];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    addEnquiry({
      name: form.name,
      phone: form.phone,
      email: form.email,
      program: form.program || "General Enquiry",
      message: form.message,
    });
    setSent(true);
    setForm({ name: "", phone: "", email: "", program: "", message: "" });
  };

  return (
    <form onSubmit={submit} className="border border-border bg-card p-7 sm:p-9">
      <h3 className="font-display text-2xl text-ink">Send an Enquiry</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us what you want to train for and we will guide you to the right batch.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <input
          required
          className={field}
          placeholder="Full name"
          aria-label="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          className={field}
          placeholder="Phone number"
          aria-label="Phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          required
          type="email"
          className={field}
          placeholder="Email address"
          aria-label="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <select
          className={field}
          aria-label="Interested program"
          value={form.program}
          onChange={(e) => setForm({ ...form, program: e.target.value })}
        >
          <option value="">Interested program</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <textarea
          required
          rows={4}
          className={`${field} sm:col-span-2`}
          placeholder="Your message"
          aria-label="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Submit Enquiry <Icon name="arrow" className="h-4 w-4" />
      </Button>

      {sent ? (
        <p className="mt-5 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-ink">
          <Icon name="check" className="h-4 w-4 text-primary" />
          Thanks! Your enquiry has been recorded for this session.
        </p>
      ) : null}
    </form>
  );
}
