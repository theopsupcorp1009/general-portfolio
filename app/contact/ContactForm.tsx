"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "5741bd18-6467-4857-8287-44c1fb874c1b";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [backendFeedback, setBackendFeedback] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");
    setBackendFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: `[Portfolio Inquiry] ${formData.subject.trim()}`,
          message: formData.message.trim(),
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setBackendFeedback(
          "Your message has been submitted successfully. Thank you!"
        );
      } else {
        setStatus("error");
        setBackendFeedback(
          data.message || "Unable to send your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
      setBackendFeedback(
        "Could not send your message. Please check your connection and try again."
      );
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setBackendFeedback("");
    setStatus("idle");
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl bg-[var(--surface-elevated)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all ${
      errors[field] ? "border-[var(--error)]" : "border-[var(--border)]"
    }`;

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
      <h2 className="mb-2 text-xl font-bold text-[var(--text-primary)]">
        Send a Message
      </h2>

      <p className="mb-6 text-xs text-[var(--text-muted)] sm:text-sm">
        Fill out the form below to get in touch. I&apos;ll get back to you as
        soon as possible.
      </p>

      {status === "success" ? (
        <div className="space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-300">
          <div className="flex items-center gap-2 text-base font-bold text-emerald-200">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span>Message Submitted</span>
          </div>

          <p className="text-xs leading-relaxed sm:text-sm">
            {backendFeedback}
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-3 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {status === "error" && (
            <div
              role="alert"
              className="space-y-2 rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2 font-semibold text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Message Not Sent</span>
              </div>
              <p className="leading-relaxed text-[var(--text-secondary)]">
                {backendFeedback}
              </p>
            </div>
          )}

          {(
            [
              {
                name: "name",
                label: "Your Name",
                placeholder: "e.g. John Doe",
                type: "text",
                maxLength: 100,
                autoComplete: "name",
              },
              {
                name: "email",
                label: "Your Email Address",
                placeholder: "e.g. johndoe@example.com",
                type: "email",
                maxLength: 254,
                autoComplete: "email",
              },
              {
                name: "subject",
                label: "Subject",
                placeholder:
                  "e.g. Collaboration on AI/ML Research or Software Engineering",
                type: "text",
                maxLength: 200,
                autoComplete: undefined,
              },
            ] as const
          ).map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="mb-1.5 block text-xs font-semibold text-[var(--text-secondary)]"
              >
                {field.label}{" "}
                <span className="text-[var(--primary-light)]">*</span>
              </label>

              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                maxLength={field.maxLength}
                required
                value={formData[field.name]}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [field.name]: e.target.value,
                  });
                  if (errors[field.name]) {
                    setErrors({ ...errors, [field.name]: "" });
                  }
                }}
                placeholder={field.placeholder}
                disabled={status === "submitting"}
                className={inputClass(field.name)}
              />

              {errors[field.name] && (
                <p className="mt-1 text-xs text-[var(--error)]">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-semibold text-[var(--text-secondary)]"
            >
              Your Message{" "}
              <span className="text-[var(--primary-light)]">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={10000}
              required
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) {
                  setErrors({ ...errors, message: "" });
                }
              }}
              placeholder="Write your message here..."
              disabled={status === "submitting"}
              className={`${inputClass("message")} resize-none`}
            />

            {errors.message && (
              <p className="mt-1 text-xs text-[var(--error)]">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[var(--primary)]/20 transition-all hover:opacity-95 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}