"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STEPS: { step: number; name: string; url: string }[] = [
  { step: 1, name: "Menu", url: "/home" },
  { step: 2, name: "Resume", url: "/home/resume" },
  { step: 3, name: "Payment", url: "/home/payment" },
];

const Steps = () => {
  const pathname = usePathname();

  const progressCalc = () => {
    switch (pathname) {
      case "/home":
        return 2;
      case "/home/resume":
        return 50;
      case "/home/payment":
        return 100;
    }
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {STEPS.map((step) => (
          <Link
            className="text-2xl font-bold"
            key={step.step}
            href={step.url}
          >
            {step.name}
          </Link>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${progressCalc()}%` }}
        ></div>
      </div>
    </>
  );
};
export default Steps;
