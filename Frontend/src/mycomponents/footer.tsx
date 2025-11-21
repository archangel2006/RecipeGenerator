import React, { useState } from "react";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function FridgeMateFooter() {
  const [subStatus, setSubStatus] = useState("Subscribe");
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;

    setSubStatus("Subscribing...");

    setTimeout(() => {
      setSubStatus("Subscribed ✓");

      setTimeout(() => {
        setSubStatus("Subscribe");
        setEmail(""); // RESET INPUT WHEN BUTTON RETURNS TO NORMAL
      }, 1500);
    }, 1000);
  };

  return (
    <footer className="w-340 bg-[#fff2e6] mt-20 pt-16 pb-12 border-t border-orange-200">

      <div className="w-full px-10">

        {/* MAIN GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#ff6a00]">FridgeMate</h2>
            <p className="text-gray-600 mt-4 text-lg max-w-sm leading-relaxed">
              Scan your fridge. Turn leftovers into meals. Reduce waste with AI.
            </p>

            <div className="flex gap-5 mt-6 text-gray-600">
              <FiInstagram className="w-7 h-7 hover:text-[#ff6a00] transition cursor-pointer" />
              <FiFacebook className="w-7 h-7 hover:text-[#ff6a00] transition cursor-pointer" />
              <FiTwitter className="w-7 h-7 hover:text-[#ff6a00] transition cursor-pointer" />
            </div>
          </div>

          {/* SUPPORT LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-[#ff6a00] mb-4">Support</h3>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li className="hover:text-[#ff6a00] cursor-pointer transition">Help Center</li>
              <li className="hover:text-[#ff6a00] cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-[#ff6a00] cursor-pointer transition">Terms & Conditions</li>
              <li className="hover:text-[#ff6a00] cursor-pointer transition">FAQs</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold text-[#ff6a00] mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Get updates about new features and improvements.
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl border border-orange-200 outline-none
                         focus:border-[#ff6a00] transition bg-white"
            />

            <button
              onClick={handleSubscribe}
              className="mt-4 w-full py-3 bg-[#ff6a00] text-white font-semibold 
                         rounded-xl hover:bg-[#e65a00] transition"
            >
              {subStatus}
            </button>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-6 border-t border-orange-200 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">FridgeMate</span>. - Powered by Code, Inspired by Cooking 💻🍳
          </p>
        </div>

      </div>
    </footer>
  );
}

