import { Dispatch, SetStateAction } from "react";

import IconTailwind from "../../../assets/icons/IconTailwind";
import "../CardStack.css";

interface CardProps {
  setSelectedCardInfo: Dispatch<
    SetStateAction<{ title: string; description: string }>
  >;
}

export default function TailwindCard({ setSelectedCardInfo }: CardProps) {
  const title = "TAILWIND";
  const description = "";

  const onClickHandler = () => {
    setSelectedCardInfo({
      title: title,
      description: description,
    });
  };

  return (
    <div
      onClick={onClickHandler}
      className="text-sm lg:text-lg card p-4 text-blue-500 flex flex-col justify-between items-center bg-cover"
    >
      <p className="w-full">{title}</p>
      <IconTailwind />
      <p className="w-full rotate-180">{title}</p>
    </div>
  );
}
