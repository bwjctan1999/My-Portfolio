import { Dispatch, SetStateAction } from "react";

import IconFigma from "../../../assets/icons/IconFigma";
import "../CardStack.css";

interface CardProps {
  setSelectedCardInfo: Dispatch<
    SetStateAction<{ title: string; description: string }>
  >;
}

export default function FigmaCard({ setSelectedCardInfo }: CardProps) {
  const title = "FIGMA";
  const description = "lorem ipsum dolor sit amet, consectetur adipis";

  const onClickHandler = () => {
    setSelectedCardInfo({
      title: title,
      description: description,
    });
  };

  return (
    <div
      onClick={onClickHandler}
      className="text-sm lg:text-lg card p-4 text-white bg-zinc-800 flex flex-col justify-between items-center bg-cover shadow-md"
    >
      <p className=" w-full">{title}</p>
      <IconFigma />
      <p className="w-full rotate-180">{title}</p>
    </div>
  );
}
