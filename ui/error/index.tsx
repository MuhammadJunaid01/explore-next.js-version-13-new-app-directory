"use client";
import { useEffect } from "react";
const CatchError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="h-screen w-full flex flex-col justify-center align-middle">
      <h1 className="text-center m-0  text-3xl font-semibold text-pink-700">
        {error.message}
      </h1>
      <div className="text-center mt-4">
        <button
          className=" bg-slate-900 w-40  rounded-sm py-2 text-white text-lg text-center"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default CatchError;
