import React, { useEffect, useState } from "react";

const Home = () => {
  const birthday = new Date("2026-06-16T03:43:16");

  const getTimeLeft = () => {
    const difference = birthday - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-4 md:gap-20 py-6  md:py-8 text-center">
        <div className="text-center">
          <h2 className="text-[#C8AB6B] text-3xl md:text-6xl  lg:text-8xl font-semibold bg-[#f1f1f121] pt-2 py-3 px-5 rounded-lg">
            {timeLeft.days}
          </h2>
          <p className="text-[#C8AB6B] text-sm md:text-2xl mt-3 ">
            DAYS
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-[#C8AB6B] text-3xl md:text-6xl  lg:text-8xl font-semibold bg-[#f1f1f121] pt-2 py-3 px-5 rounded-lg">
            {timeLeft.hours}
          </h2>
          <p className="text-[#C8AB6B]  text-sm  md:text-2xl mt-3">
            HOURS
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-[#C8AB6B] text-3xl md:text-6xl  lg:text-8xl font-semibold bg-[#f1f1f121] pt-2 py-3 px-5 rounded-lg">
            {timeLeft.minutes}
          </h2>
          <p className="text-[#C8AB6B] text-sm md:text-2xl mt-3">
            MINUTES
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-[#C8AB6B] text-3xl md:text-6xl  lg:text-8xl font-semibold bg-[#f1f1f121] pt-2 py-3 px-5 rounded-lg">
            {timeLeft.seconds}
          </h2>
          <p className="text-[#C8AB6B] text-sm md:text-2xl mt-3">
            SECONDS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
