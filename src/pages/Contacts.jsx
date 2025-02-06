import React from "react";

const Contacts = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <h1 className="text-3xl font-semibold text-center mt-6 text-green-600 ">
        Contact Us
      </h1>

      <p className="text-gray-400 text-center mb-8 ">
        This is a placeholder. Actual contact details will come from an API or
        database.
      </p>

      <div className="bg-gray-800 p-5">
        <form className="grid gap-6 ">
          <div className="mx-auto">
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-80 p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mx-auto">
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-80 p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mx-auto">
            <label
              htmlFor="message"
              className="block text-gray-300 font-medium mb-1"
            >
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-80 p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-50 py-2 mx-auto bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="text-center mt-6 mb-5">
        <a href="/" className="text-green-400 hover:underline">
          Go Back
        </a>
      </div>
    </div>
  );
};

export default Contacts;
