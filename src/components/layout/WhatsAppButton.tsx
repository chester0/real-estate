import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello! I'm interested in your Cyprus real estate and relocation services."
  );
  const href = `https://wa.me/${BRAND.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom,1.5rem))] right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200"
    >
      <MessageCircle size={28} />
    </a>
  );
}
