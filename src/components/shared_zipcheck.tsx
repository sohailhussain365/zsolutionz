import { useState } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface ZipCheckWidgetProps {
  className?: string;
}

export function ZipCheckWidget({ className = "" }: ZipCheckWidgetProps) {
  const [, navigate] = useLocation();

  const [zip, setZip] = useState("");

  const handleSubmit = () => {
    if (!zip.trim()) return;

    navigate(`/services?zip=${zip}`);
  };

  return (
    <div
      className={`rounded-3xl bg-white shadow-xl border border-slate-200 p-6 ${className}`}
    >
      <div className="flex items-center gap-2 mb-5">
        <MapPin className="text-blue-600" size={20} />
        <h3 className="text-lg font-bold text-slate-900">
          Check Availability
        </h3>
      </div>

      <p className="text-slate-500 text-sm mb-5">
        Enter your ZIP code to see Internet, TV, Home Phone and Mobile plans
        available in your area.
      </p>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter ZIP Code"
          className="flex-1 h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-600"
        />

        <button
          onClick={handleSubmit}
          className="h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <Search size={18} />
          Check Availability
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        <div className="rounded-xl border border-slate-200 p-4">
          <h4 className="font-semibold">Internet</h4>
          <p className="text-xs text-slate-500 mt-1">
            High-speed internet plans
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-4">
          <h4 className="font-semibold">TV Packages</h4>
          <p className="text-xs text-slate-500 mt-1">
            Cable & Streaming
          </p>
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
  );
}