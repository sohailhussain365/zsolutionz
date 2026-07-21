import { useState } from "react";
import { Search, MapPin, ArrowRight, X, Phone } from "lucide-react";

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
        className={`rounded-3xl bg-white shadow-xl border border-slate-200 p-6 md:p-8 ${className}`}
      >
        <div className="flex items-center gap-2 mb-5 justify-center">
          <MapPin className="text-blue-600" size={20} />
          <h3 className="text-lg font-bold text-slate-900">
            Check Availability
          </h3>
        </div>

        <p className="text-slate-500 text-sm mb-5 text-center max-w-md mx-auto">
          Enter your ZIP code to see Internet, TV, Home Phone and Mobile plans
          available in your area.
        </p>

        <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Enter ZIP Code"
            className="flex-1 h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-600"
          />

          <button
            onClick={handleSubmit}
            className="h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Search size={18} />
            Check Availability
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 max-w-3xl mx-auto">
          <div className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Internet</h4>
            <p className="text-xs text-slate-500 mt-1">
              High-speed internet plans
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">TV Packages</h4>
            <p className="text-xs text-slate-500 mt-1">Cable & Streaming</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Home Phone</h4>
            <p className="text-xs text-slate-500 mt-1">
              Voice plans available
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">Mobile Plans</h4>
            <p className="text-xs text-slate-500 mt-1">
              Mobile offers & bundles
            </p>
          </div>
        </div>
      </div>

      {/* ══ AVAILABILITY POPUP ══════════════════════════════════ */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Check Availability
            </h3>

            <p className="text-center text-slate-700 mb-4">
              Options may be available in <span className="font-bold">{zip}</span>.
            </p>

            <p className="text-center text-slate-500 text-sm mb-6">
              Availability is subject to confirmation by full address and
              provider coverage.
            </p>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              <Phone size={16} fill="currentColor" />
              Call to Review Options
            </a>

            <p className="text-center text-xs text-slate-400 leading-relaxed">
              Results are estimates only. Actual availability, speeds,
              pricing, and terms may vary.
            </p>
          </div>
        </div>
      )}
    </>
  );
}