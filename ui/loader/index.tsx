import Image from "next/image";
import React from "react";
import LoaderGif from "public/loader.gif";
const Loader = () => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <Image
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
      </p>
    </div>
  );
};

export default Loader;
