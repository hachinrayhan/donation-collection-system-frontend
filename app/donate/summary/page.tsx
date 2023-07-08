import React from "react";
import "intl/locale-data/jsonp/en-US";

interface DonationReportProps {
  donationData: {
    id: number;
    name: string;
    email: string;
    mobileNumber: string;
    amount: number;
    time?: string;
  };
}

const DonationReport: React.FC<DonationReportProps> = ({ donationData }) => {
  const isoTime: any = donationData.time;
  const localTime: any = new Date(isoTime).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
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
