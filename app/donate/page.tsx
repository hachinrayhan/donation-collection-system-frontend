// components/DonationForm.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface Donation {
  name: string;
  email: string;
  mobileNumber: string;
  amount: string;
}

const DonationForm = () => {
  const [donation, setDonation] = useState<Donation>({
    name: "",
    email: "",
    mobileNumber: "",
    amount: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Make an API request to create a new donation
      const response = await axios.post("/api/donations", donation);
      console.log(response.data); // Handle the response as needed
      // Reset the form after successful donation
      setDonation({ name: "", email: "", mobileNumber: "", amount: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">
        Fill the form and click on `Donate` button below to make a donation
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={donation.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={donation.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label htmlFor="mobileNumber" className="block mb-2">
          Mobile Number:
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={donation.mobileNumber}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label htmlFor="amount" className="block mb-2">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={donation.amount}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-indigo-600"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
