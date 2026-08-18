"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { X } from "@phosphor-icons/react";
import { contact, site } from "@/lib/content";
import { useContact } from "./ContactProvider";
import { PrimaryButton } from "./PrimaryButton";

function toWhatsAppNumber(phone: string) {
  return phone.replace(/\D/g, "");
}

export function ContactModal() {
  const { open, setOpen } = useContact();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const details = String(data.get("details") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !phone || !message) {
      setStatus("error");
      return;
    }

    const lines = [
      "Halo Sano, saya ingin berdiskusi.",
      "",
      `Nama: ${name}`,
      company ? `Perusahaan: ${company}` : null,
      `E-Mail: ${email}`,
      `Telepon: ${phone}`,
      details ? `Detail proyek: ${details}` : null,
      "",
      "Pesan:",
      message,
    ].filter(Boolean);

    const waNumber = toWhatsAppNumber(site.phone);
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines.join("\n"))}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
    form.reset();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
        >
          <motion.aside
            className="flex h-full w-full max-w-xl flex-col overflow-y-auto bg-white section-pad py-8 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-10 flex items-start justify-between gap-6">
              <div>
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-dh-dark">
                  {contact.title}
                </h2>
                <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-dh-medium">
                  {contact.introBefore}
                  <a
                    href={`mailto:${site.email}`}
                    className="underline underline-offset-4"
                  >
                    email
                  </a>
                  {contact.introAfter}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-10 items-center justify-center rounded-full bg-dh-light text-dh-dark"
                aria-label="Tutup"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              {(
                [
                  ["name", contact.fields.name, "text", true],
                  ["company", contact.fields.company, "text", false],
                  ["email", contact.fields.email, "email", true],
                  ["phone", contact.fields.phone, "tel", true],
                  ["details", contact.fields.details, "text", false],
                ] as const
              ).map(([name, label, type, required]) => (
                <label key={name} className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-dh-muted">
                    {label}
                    {required ? " *" : ""}
                  </span>
                  <input
                    name={name}
                    type={type}
                    required={required}
                    className="border-b border-dh-accent bg-transparent py-3 text-base font-medium text-dh-dark outline-none transition-colors focus:border-dh-dark"
                  />
                </label>
              ))}

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-dh-muted">
                  {contact.fields.message} *
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="resize-none border-b border-dh-accent bg-transparent py-3 text-base font-medium text-dh-dark outline-none transition-colors focus:border-dh-dark"
                />
              </label>

              <div className="mt-4">
                <PrimaryButton type="submit" size="lg" variant="primary">
                  Kirim via WhatsApp
                </PrimaryButton>
              </div>

              {status === "success" && (
                <p className="text-sm font-medium text-dh-dark">
                  {contact.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  {contact.error}
                </p>
              )}
            </form>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
