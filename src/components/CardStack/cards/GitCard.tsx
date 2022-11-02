import { Dispatch, SetStateAction } from "react";

import IconGit from "../../../assets/icons/IconGit";
import "../CardStack.css";

interface CardProps {
  setSelectedCardInfo: Dispatch<
    SetStateAction<{ title: string; description: string }>
  >;
}

export default function GithubCard({ setSelectedCardInfo }: CardProps) {
  const title = "GIT";
  const description = "GIT GIT GIT";

  const onClickHandler = () => {
    setSelectedCardInfo({
      title: title,
      description: description,
    });
  };

  return (
    <div
      onClick={onClickHandler}
      className="text-sm lg:text-lg card p-4 text-red-600 bg-lime-500 flex flex-col justify-between items-center bg-cover shadow-md"
    >
      <p className="w-full">{title}</p>
      <IconGit />
      <p className="w-full rotate-180">{title}</p>
    </div>
  );
}
