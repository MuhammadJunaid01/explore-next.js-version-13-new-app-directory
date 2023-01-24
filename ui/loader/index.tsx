"use client";
// import Image from "next/image";
// import LoaderGif from "public/loader.gif";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loader = () => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      {/* <Image
        style={{ width: "30%", height: "auto", margin: "0 auto" }}
        src={LoaderGif}
        width={500}
        height={400}
        alt="loader"
      />
      <p
        style={{
          fontSize: "22px",
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%,50%)",
        }}
      >
        please wait!
      </p> */}
      <Skeleton count={10} />
    </div>
  );
};

export default Loader;
