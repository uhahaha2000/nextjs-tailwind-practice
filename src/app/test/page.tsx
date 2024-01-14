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

const BUTTON_VARIANTS = {
  primary: "h-10 w-full bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "h-10 w-full bg-gray-500 hover:bg-gray-600 text-white",
  danger: "h-10 w-full bg-red-500 hover:bg-red-600 text-white",
};

function ButtonType(props: any) {
  const className = `${props.className}`;
  return (
    <button type="button" className={className}>
      {props.text}
    </button>
  );
}

const TextType = ({ isIos, text }) => {
  // isIos 값에 따라 동적으로 클래스를 결정
  const dynamicClasses = isIos
    ? "text-center text-blue-500 bg-red-300"
    : "text-left text-gray-500 bg-blue-300";

  return <p className={`my-3 p-4 ${dynamicClasses}`}>{text} 이예요</p>;
};

export default function test() {
  return (
    <div className="min-h-[100vh] flex-1 bg-yellow-300 font-sans text-red-600">
      <h1 className="mb-6 flex h-5 w-full text-2xl font-medium">
        요기요기 테스트
      </h1>
      <div className="my-3">
        기본 : <MyGenericInput />
      </div>
      <div className="mb-5">
        수정 : <MySlightlyModifiedInput />
      </div>

      <ButtonType className={BUTTON_VARIANTS.primary} text="버튼이지용1" />
      <ButtonType className={BUTTON_VARIANTS.secondary} text="버튼이지용2" />
      <ButtonType className={BUTTON_VARIANTS.danger} text="버튼이지용3" />

      <TextType isIos={true} text="아이폰" />
    </div>
  );
}
