import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen text-slate-800">
      <header className="bg-emerald-800 text-white">
        <div className="max-w-3xl mx-auto px-4 py-5 flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-xl font-bold">৳</div>
          <div>
            <h1 className="text-xl font-bold leading-tight">ই-টিআইএন সার্টিফিকেট সেবা</h1>
            <p className="text-sm text-emerald-100">আয়কর সংক্রান্ত গুরুত্বপূর্ণ বিজ্ঞপ্তি</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Notice */}
        <section className="bg-red-50 border border-red-300 border-l-8 border-l-red-600 rounded-xl p-5 shadow-sm">
          <h2 className="flex items-center gap-2 text-red-700 font-bold text-lg mb-3">
            <span aria-hidden>⚠️</span> বিজ্ঞপ্তি
          </h2>
          <p className="text-red-900 leading-8 text-[17px]">
            আপনি ২০২৩-২০২৪, ২০২৪-২০২৫, ২০২৫-২০২৬ এবং ২০২৬-২০২৭ অর্থবছরের আয়কর পরিশোধ করেননি, যার কারণে আমরা আপনাকে নতুন কোনো ই-টিআইএন (e-TIN) সার্টিফিকেট প্রদান করতে পারছি না। আপনি পূর্ববর্তী বছরগুলোর বকেয়া কর পরিশোধ সাপেক্ষে নতুন ই-টিআইএন সার্টিফিকেট সংগ্রহ করতে পারবেন। ২০২৩ সাল থেকে শুরু করে এখন পর্যন্ত আপনার মূল কর জমা হয়েছে ৬,০০০ টাকা এবং সময়মতো পরিশোধ না করার কারণে জরিমানাসহ সর্বমোট ৭,০০০ টাকা পরিশোধ করতে হবে।
          </p>
        </section>

        {/* Info */}
        <section className="bg-white border border-sky-200 rounded-xl p-5 shadow-sm">
          <h2 className="flex items-center gap-2 text-sky-800 font-bold text-lg mb-3">
            <span aria-hidden>ℹ️</span> তথ্য
          </h2>
          <p className="leading-8 text-[17px] text-slate-700">
            ২০২৬–২৭ অর্থ ও কর বছরের জন্য বাংলাদেশের কর কাঠামো আয়কর আইন, ২০২৩ দ্বারা পরিচালিত হয়, যা অর্থ আইন, ২০২৬ এর মাধ্যমে সংশোধিত এবং এর পাশাপাশি নতুন উৎসে কর বিধিমালা, ২০২৬ (১ জুলাই, ২০২৬ থেকে কার্যকর) যুক্ত হয়েছে। জাতীয় রাজস্ব বোর্ড (NBR) থেকে আয়কর নির্দেশিকা, ২০২৬-২০২৭-এ অফিশিয়াল নির্দেশনা প্রকাশিত হয়েছে এবং সংশোধিত আইনের পাঠ্য অর্থ (২০২৫-২০২৬ অর্থ বৎসর) আইন, ২০২৬-এর মাধ্যমে পাওয়া যায়।
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <h2 className="font-bold text-lg px-5 pt-5 pb-3 text-slate-800">
            <span aria-hidden>❓</span> সচরাচর জিজ্ঞাসিত প্রশ্ন
          </h2>
          <div className="border-t border-slate-200">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="w-full flex items-start justify-between gap-4 text-left px-5 py-4 font-semibold text-[17px] hover:bg-slate-50 cursor-pointer"
            >
              <span>আমার তো আয়ের উৎস (Income Source) বন্ধ ছিল, তাহলে আমি কর কীভাবে দিতাম?</span>
              <span className={`text-emerald-700 text-xl transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
            </button>
            {open && (
              <div className="px-5 pb-5 leading-8 text-[17px] text-slate-700">
                আয়ের উৎস বন্ধ হওয়ার সাথে সাথে যথাযথ প্রমাণাদিসহ আবেদন করতে হয়, যার ফলে আপনার কর বাধ্যবাধকতা স্থগিত বা বন্ধ হয়ে যায়।
              </div>
            )}
          </div>
        </section>

        {/* Payment box */}
        <section className="bg-emerald-50 border-2 border-emerald-600 rounded-xl p-5 shadow-sm">
          <h2 className="flex items-center gap-2 text-emerald-800 font-bold text-lg mb-3">
            <span aria-hidden>📱</span> বকেয়া কর পরিশোধের নিয়ম
          </h2>
          <p className="leading-8 text-[17px] text-emerald-950">
            পূর্ববর্তী বকেয়া কর পরিশোধ করতে বিকাশ (bKash), নগদ (Nagad) অথবা রকেট (Rocket) অ্যাপে গিয়ে আপনার আগের ই-টিআইএন (e-TIN) সার্টিফিকেট নম্বর প্রদান করলে আপনার বকেয়া কর স্বয়ংক্রিয়ভাবে কেটে নেওয়া হবে।
          </p>
        </section>
      </main>
    </div>
  );
}
