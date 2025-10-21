import React from "react";

const CosmicBridge = () => {
  return (
    <section className="relative h-[500px] overflow-hidden bg-transparent">
      {/* Subtle moving stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.25),transparent_70%)] blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(0,255,200,0.2),transparent_60%)] blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,0,255,0.3),transparent_65%)] blur-2xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Floating energy waves */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,200,255,0.08)] to-transparent opacity-80 animate-[float_12s_linear_infinite]"></div>

      {/* Optional glowing orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,255,200,0.6),transparent_70%)] blur-3xl animate-pulse"></div>

    </section>
  );
};

export default CosmicBridge;
