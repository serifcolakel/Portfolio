import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center p-8 bg-bghome">
      <div className="flex flex-col md:flex-row md:w-[1130px] mx-auto md:h-[600px] md:justify-between items-center gap-y-8">
        <div className="w-full flex justify-center items-center">
          <img
            className="md:w-[350px] w-[200px]  bg-image-color rounded-3xl object-fill"
            alt="noReferer"
            src="/ScI.png"
          />
        </div>

        <div className="text-primary-white  items-start flex flex-col gap-y-4">
          <p className="text-xl">HI THERE !</p>
          <h2 className="md:text-4xl text-2xl font-bold">
            I'M AN{" "}
            <strong className="text-image-color-1 ">
              ELECTRICAL and {" "}
              <strong className="text-primary-white md:text-image-color-1">
                 Software Engineer
              </strong>
            </strong>
          </h2>
          <p>
            I am a newly graduated electrical and electronics engineer. I do
            masters degree in informatics. Also, I improve my frontend
            development skills.
          </p>
        </div>
      </div>
    </div>
  );
}
