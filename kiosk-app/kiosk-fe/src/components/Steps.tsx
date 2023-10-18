"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useKiosk } from "../hooks/useKiosk";

const STEPS: { step: number; name: string; url: string }[] = [
  { step: 1, name: "Menu", url: "/" },
  { step: 2, name: "Resume", url: "/resume" },
  { step: 3, name: "Payment", url: "/payment" },
];

const Steps = () => {
  const pathname = usePathname();

  const progressCalc = () => {
    switch (pathname) {
      case "/":
        return 2;
      case "/resume":
        return 50;
      case "/payment":
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
