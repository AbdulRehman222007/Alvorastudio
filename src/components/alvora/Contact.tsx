import { useState } from "react";
import { Mail, Instagram, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// 👉 Paste your Formspree form ID here after signing up at https://formspree.io
// Leave as "" to disable network submission — the mailto fallback will still work.
const FORMSPREE_ID = "";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  projectType: z.string().trim().max(80).optional(),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
  // honeypot
  company: z.string().max(0).optional(),
});

const EMAIL = "workwithalovra@gmail.com";
const INSTAGRAM_HANDLE = "alovrastudio.co";
const INSTAGRAM_URL = "https://instagram.com/alovrastudio.co";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    if (data.company) return; // honeypot tripped

    if (!FORMSPREE_ID) {
      // Fallback: open mail client
      const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AProject: ${data.projectType}%0D%0ABudget: ${data.budget}%0D%0A%0D%0A${data.message}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("New project enquiry — " + data.name)}&body=${body}`;
      toast.message("Opening your email app…", { description: "Set FORMSPREE_ID in Contact.tsx to enable in-page sending." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Network error");
      toast.success("Thanks — we'll be in touch within 1–2 days.");
      form.reset();
    } catch {
      toast.error("Couldn't send right now. Email us directly at " + EMAIL);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-neutral-950 text-white py-28">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
          <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight">
            Let's build <span className="italic">something good.</span>
          </h2>
          <p className="mt-6 text-white/70 max-w-md">
            Tell us about your brand and what you're trying to launch. We reply to every enquiry within
            one or two working days.
          </p>
          <div className="mt-10 space-y-4">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/85 hover:text-white">
              <Mail className="h-5 w-5" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/85 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
              <span>@{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* honeypot */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Project type" name="projectType" placeholder="Shopify, branding, social…" />
          <Field label="Budget" name="budget" placeholder="Approximate range" />
          <div className="md:col-span-2">
            <Label>Message</Label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              placeholder="Tell us about your brand and what you're hoping to build."
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
            />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-7 py-3 text-sm font-medium hover:bg-white/90 transition disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Send enquiry
            </button>
            <a href={`mailto:${EMAIL}`} className="text-sm text-white/60 hover:text-white">
              Or email us directly →
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-[0.2em] text-white/50">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && " *"}
      </Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
      />
    </div>
  );
}
