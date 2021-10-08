import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";

export default function Skills() {
  return (
    <div className="flex  md:flex-row flex-col justify-center items-center p-8">
      <Example description="HTML">
        <ChangingProgressProvider values={[0, 50]}>
          {(value) => (
            <CircularProgressbar
              value={value}
              text={`${value} %`}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#fb5b0f",
                trailColor: "#030303",
                pathTransition: "stroke-dashoffset 2s ease 0s",
                transformOrigin: "center center",
                pathTransitionDuration: 0.5,
              })}
            />
          )}
        </ChangingProgressProvider>
      </Example>

      <Example description="CSS">
        <ChangingProgressProvider values={[0, 75]}>
          {(value) => (
            <CircularProgressbar
              value={value}
              text={`${value}  %`}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#fb5b0f",
                trailColor: "#030303",
                pathTransition: "",
                transformOrigin: "center center",
                pathTransitionDuration: 2,
              })}
            />
          )}
        </ChangingProgressProvider>
      </Example>
    </div>
  );
}

function Example(props) {
  return (
    <div className="bg-background-aboutme flex flex-row md:flex-col justify-between w-full p-4 md:w-[1130px]">
      <div className="flex flex-col items-center">
        <div className="w-[150px] ">{props.children}</div>
        <div className="pt-4">
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
