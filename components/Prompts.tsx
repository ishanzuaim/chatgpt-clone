import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Prompts = () => {
  return (
    <div className="flex space-x-2 text-center">
      <div>
        <div className=" flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-8 w-8" />
          <h2>Examples</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">&quot;Explain Something to me&quot;</p>
          <p className="infoText">
            &quot;What is the difference between dog and cat&quot;
          </p>
          <p className="infoText">&quot;What is the color of the sun&quot;</p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-8 w-8" />
          <h2>Capabilities</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">&quot;Explain Something to me&quot;</p>
          <p className="infoText">
            &quot;What is the difference between dog and cat&quot;
          </p>
          <p className="infoText">&quot;What is the color of the sun&quot;</p>
        </div>
      </div>
      <div>
        <div className=" flex flex-col items-center justify-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8" />
          <h2>Limitations</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">&quot;Explain Something to me&quot;</p>
          <p className="infoText">
            &quot;What is the difference between dog and cat&quot;
          </p>
          <p className="infoText">&quot;What is the color of the sun&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default Prompts;
