import { useState } from "react";
import { Search, MapPin, ArrowRight, X, Phone, ShieldCheck } from "lucide-react";

interface ZipCheckWidgetProps {
  className?: string;
  phoneNumber?: string;
}

export function ZipCheckWidget({
  className = "",
  phoneNumber = "+1-800-555-0199",
}: ZipCheckWidgetProps) {
  const [zip, setZip] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (!zip.trim()) return;
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8 ${className}`}
      >
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0FC]">
            <MapPin className="text-[#3B4FE0]" size={18} />
          </span>
          <h3 className="text-lg font-bold text-slate-900">
            Check Availability In Your Area
          </h3>
        </div>

        <p className="mx-auto mb-6 max-w-md text-center text-sm text-slate-500">
          Enter your ZIP code to see Internet, TV, Mobile and Home Phone
          plans available near you.
        </p>

        <div className="mx-auto flex max-w-xl flex-col gap-3 md:flex-row">
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Enter ZIP Code"
            className="h-12 flex-1 rounded-xl border border-slate-300 px-4 outline-none transition focus:border-[#3B4FE0]"
          />

          <button
            onClick={handleSubmit}
            className="flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#3B4FE0] px-6 text-sm font-semibold text-white transition hover:bg-[#2f3fc4]"
          >
            <Search size={18} />
            Check Availability
            <ArrowRight size={16} />
          </button>
        </div>

        <p className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-1.5 text-xs text-slate-400">
          <ShieldCheck size={13} className="text-[#1FA24A]" />
          Free to check, no obligation, no account needed.
        </p>
      </div>

      {/* ══ AVAILABILITY POPUP ══════════════════════════════════ */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-5 text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Check Availability
            </h3>

            <p className="mb-4 text-center text-slate-700">
              Options may be available in <span className="font-bold">{zip}</span>.
            </p>

            <p className="mb-6 text-center text-sm text-slate-500">
              Availability is subject to confirmation by full address and
              provider coverage.
            </p>

            <a
              href={`tel:${phoneNumber}`}
              className="mb-4 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#3B4FE0] font-semibold text-white transition-colors hover:bg-[#2f3fc4]"
            >
              <Phone size={16} fill="currentColor" />
              Call to Review Options
            </a>

            <p className="text-center text-xs leading-relaxed text-slate-400">
              Results are estimates only. Actual availability, speeds,
              pricing, and terms may vary.
            </p>
          </div>
        </div>
      )}
    </>
  );
}