import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "tailwind test",
  description: "=)",
};

export default function test() {
  return (
    <div className="h-[100vh] flex-1 bg-black bg-yellow-300 text-blue-700 text-red-600">
      으캬캬캬컁
      <h1 className="flex h-5 w-full bg-slate-200 bg-white text-base font-medium"></h1>
    </div>
  );
}
