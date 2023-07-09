"use client";
import React, { memo, useEffect, useState } from "react";
import { format } from "date-fns";

interface DonationReportProps {
  params: {
    id: number;
    name: string;
    email: string;
    mobileNumber: string;
    amount: number;
    time?: any;
  };
}

const DonationReport = ({ params }: DonationReportProps) => {
  //   const date: Date = new Date(params.time);
  //   const localTime = format(date, "dd MMMM yyyy, hh:mm:ss a");

  const [time, setTime]: any = useState(null);

  useEffect(() => {
    const unixTimestamp = Date.parse(params.time);
    setTime(unixTimestamp);
  }, [params.time]);

  const date = new Date(time);
  const localTime = format(date, "dd MMMM yyyy, hh:mm:ss a");

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Donation Summary</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <p className="mb-2">
          <span className="font-bold">ID:</span> {params.id}
        </p>
        <p className="mb-2">
          <span className="font-bold">Name:</span> {params.name}
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> {params.email}
        </p>
        <p className="mb-2">
          <span className="font-bold">Mobile Number:</span>{" "}
          {params.mobileNumber}
        </p>
        <p className="mb-2">
          <span className="font-bold">Amount:</span> {params.amount}
        </p>
        {params.time && (
          <p className="mb-2">
            <span className="font-bold">Date & Time:</span> {localTime}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(DonationReport);
