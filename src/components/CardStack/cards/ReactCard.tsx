import { Dispatch, SetStateAction } from "react";

import IconReact from "../../../assets/icons/IconReact";
import "../CardStack.css";

interface CardProps {
  setSelectedCardInfo: Dispatch<
    SetStateAction<{ title: string; description: string }>
  >;
}

export default function ReactCard({ setSelectedCardInfo }: CardProps) {
  const title = "REACT";
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
      className="text-sm lg:text-lg card p-4 text-white flex flex-col justify-between items-center bg-cover shadow-md"
    >
      <p className="w-full">{title}</p>
      <IconReact />
      <p className="rotate-180 w-full">{title}</p>
    </div>
  );
}

// bg-[url('assets\images\CardDesign2.png')]
