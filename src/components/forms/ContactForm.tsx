"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const interestOptions = [
  { value: "", label: "Select your interest..." },
  { value: "buying", label: "Buying a property" },
  { value: "renting", label: "Renting a property" },
  { value: "investing", label: "Property investment" },
  { value: "relocating", label: "Personal relocation" },
  { value: "corporate", label: "Corporate relocation" },
  { value: "property-management", label: "Property management" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      interest: form.get("interest") as string,
      message: form.get("message") as string,
    };

    // Client-side validation
    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Invalid email address";
    if (!data.interest) newErrors.interest = "Please select your interest";
    if (!data.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-lg font-heading font-semibold text-green-800">
          Message sent successfully!
        </p>
        <p className="mt-2 text-sm text-green-700">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-1">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-light/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
          placeholder="Your full name"
        />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-light/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
          placeholder="you@example.com"
        />
        {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-light/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
          placeholder="+357 99 000 000"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-brand-text mb-1">
          Interest *
        </label>
        <select
          id="interest"
          name="interest"
          required
          aria-describedby={errors.interest ? "interest-error" : undefined}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
        >
          {interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.interest && <p id="interest-error" className="mt-1 text-xs text-red-600">{errors.interest}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-light/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none"
          placeholder="Tell us about your needs..."
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
        )}
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
