import React from "react";
import { FridgeMateHeader } from "../mycomponents/navbar";
import { motion } from "framer-motion";
import cookImg from "../assets/cook.png";
import FridgeMateFooter from "../mycomponents/footer";


export default function FridgeMateAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffdfa] to-[#fff6ee] p-6 text-gray-800">
      <FridgeMateHeader />

      <div className="w-full h-64 md:h-80 bg-orange-100 rounded-3xl mt-10 mb-14
                flex items-center justify-center border border-orange-200 overflow-hidden">
                    <img
                    src={cookImg}
                    alt="About section"
                    className="w-full h-full object-cover"
                    />
      </div>


      {/* ABOUT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md 
                   p-10 md:p-14 rounded-3xl shadow-lg"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#ff6a00] mb-6">
          About FridgeMate
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          FridgeMate is your smart kitchen companion built to help you reduce
          food waste, plan meals effortlessly, and discover creative recipes
          based on the ingredients you already own.
        </p>

        {/* THREE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-orange-100"
          >
            <h3 className="text-xl font-semibold text-[#ff6a00] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              We aim to empower every household to cook smarter, save money, and
              minimize waste through AI-driven food intelligence.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-orange-100"
          >
            <h3 className="text-xl font-semibold text-[#ff6a00] mb-2">
              What We Do
            </h3>
            <p className="text-gray-600 ">
              Our system analyzes your fridge photo and instantly suggests healthy, creative recipes making it easy to cook and reduce food waste.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-orange-100"
          >
            <h3 className="text-xl font-semibold text-[#ff6a00] mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To build the smartest AI-powered kitchen ecosystem that transforms
              the way people cook, eat, and manage ingredients.
            </p>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-14 p-8 rounded-2xl bg-orange-50 border border-orange-200 shadow-inner">
          <h2 className="text-3xl font-bold text-[#ff6a00] mb-6">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-orange-100 shadow"
            >
              <h3 className="text-xl font-semibold text-[#ff6a00] mb-2">
                Smart AI Suggestions
              </h3>
              <p className="text-gray-600">
                Get instant recipe suggestions based on ingredients in your fridge.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-orange-100 shadow"
            >
              <h3 className="text-xl font-semibold text-[#ff6a00] mb-2">
                Mindful Usage
              </h3>
              <p className="text-gray-600">
                FridgeMate helps you use ingredients before they go to waste.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-orange-100 shadow"
            >
              <h3 className="text-xl font-semibold text-[#ff6a00] mb-2">
                Easy & Clean UI
              </h3>
              <p className="text-gray-600">
                A minimal, intuitive, and friendly interface for smoother daily use.
              </p>
            </motion.div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-14 p-8 rounded-2xl bg-orange-50 border border-orange-200 shadow-inner">
          <h2 className="text-3xl font-bold text-[#ff6a00] mb-6">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl border border-orange-100 shadow"
            >
              <p className="text-gray-700 italic">
                “FridgeMate helped me cut my food waste by almost 40%.  
                The recipes are always on point!”
              </p>
              <p className="text-right text-orange-600 font-semibold mt-2">
                - Aditi Sharma
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl border border-orange-100 shadow"
            >
              <p className="text-gray-700 italic">
                “Perfect for students like me. It makes it so easy to whip up tasty meals from whatever’s in my fridge - no extra planning needed!”
              </p>
              <p className="text-right text-orange-600 font-semibold mt-2">
                - Rohan Verma
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl border border-orange-100 shadow"
            >
              <p className="text-gray-700 italic">
                “Clean UI, smooth performance, and extremely helpful suggestions.”
              </p>
              <p className="text-right text-orange-600 font-semibold mt-2">
                - Simran K.
              </p>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl border border-orange-100 shadow"
            >
              <p className="text-gray-700 italic">
                “Makes meal planning so easy!  
                I use it almost every day.”
              </p>
              <p className="text-right text-orange-600 font-semibold mt-2">
                - Aditya Rao
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <FridgeMateFooter />
    </div>
  );
}

