import { contact, site } from "./content";

function toWhatsAppNumber(phone: string) {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = `62${digits.slice(1)}`;
  return digits;
}

export function getWhatsAppUrl(message = contact.whatsappIntro) {
  return `https://wa.me/${toWhatsAppNumber(site.phone)}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message?: string) {
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
