// pages/index.tsx
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 text-center">
        Donation Collection System for As Sunnah Foundation
      </h1>
      <div className="flex justify-center">
        <Link
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md"
          href="/donate"
        >
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Home;
