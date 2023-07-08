import React from "react";
import { format } from "date-fns";
import type { NextPage } from "next";

interface DonationReportProps {
  donationData: {
    id: number;
    name: string;
    email: string;
    mobileNumber: string;
    amount: number;
    time: string;
  };
}

const DonationReport: NextPage<DonationReportProps> = ({ donationData }) => {
  const isoTime: any = donationData.time;
  const localTime: string = format(
    new Date(isoTime),
    "dd MMMM yyyy, hh:mm:ss a"
  );

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Donation Summary</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <p className="mb-2">
          <span className="font-bold">ID:</span> {donationData.id}
        </p>
        <p className="mb-2">
          <span className="font-bold">Name:</span> {donationData.name}
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> {donationData.email}
        </p>
        <p className="mb-2">
          <span className="font-bold">Mobile Number:</span>{" "}
          {donationData.mobileNumber}
        </p>
        <p className="mb-2">
          <span className="font-bold">Amount:</span> {donationData.amount}
        </p>
        {donationData.time && (
          <p className="mb-2">
            <span className="font-bold">Date & Time:</span> {localTime}
          </p>
        )}
      </div>
    </div>
  );
};

export default DonationReport;
