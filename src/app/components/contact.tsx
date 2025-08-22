"use client";

import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="bg-[#1d1e3d] border mb-10 rounded-4xl py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-x-hidden">
      {/* Heading */}
      <motion.h2
        className="md:text-5xl text-3xl font-bold text-center text-white mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      {/* Introductory Text */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-lg mb-4 text-white">Thank you for connecting us!</p>
        <p className="text-gray-200 mb-8 max-w-3xl mx-auto">
          We&apos;d love to hear from you. Please fill out the form below, and our team will get back to you.
        </p>
      </motion.div>

      {/* Form + Map Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              required
              placeholder="John.."
              className="mt-1 block w-full placeholder:text-gray-600 border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              required
              placeholder="john@email.com"
              className="mt-1 block w-full placeholder:text-gray-600 border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Message</label>
            <textarea
              rows={5}
              required
              placeholder="text..."
              className="mt-1 block w-full placeholder:text-gray-600 border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className=" text-white border border-gray-600 px-6 py-3 rounded-xl shadow-md cursor-pointer hover:bg-[#1D1E3D]/90 hover:shadow-amber-50/20 transition"
          >
           Send Message
          </button>
        </motion.form>

        {/* Google Map */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1104187638325!2d144.95592531531803!3d-37.817209979751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775b4dc876df76!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1616004270586!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ minHeight: "350px", border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
