import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "tailwind test",
  description: "=)",
};

function MyGenericInput(props: any) {
  //const className = `border rounded bg-red-200 px-2 py-1 ${props.className || ""}`;
  const className = twMerge(
    "border rounded px-2 py-1 text-orange-200 bg-green-400 border-0",
    props.className,
  );
  return <input {...props} className={className} />;
}

function MySlightlyModifiedInput(props: any) {
  return (
    <MyGenericInput {...props} className="bg-gray-400 p-3 text-blue-600" />
  );
}

export default function test() {
  return (
    <div className="bg-blac h-[100vh] flex-1 bg-yellow-300 font-sans text-red-600">
      <h1 className="mb-6 flex h-5 w-full text-2xl font-medium">
        요기요기 테스트
      </h1>
      <div className="my-3">
        기본 : <MyGenericInput />
      </div>
      <div>
        수정 : <MySlightlyModifiedInput />
      </div>
    </div>
  );
}
