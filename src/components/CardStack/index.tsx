import { Dispatch, SetStateAction } from "react";

import "./CardStack.css";
import ReactCard from "./cards/ReactCard";
import GitCard from "./cards/GitCard";
import TailwindCard from "./cards/TailwindCard";
import FigmaCard from "./cards/FigmaCard";

interface CardStackProps {
  setSelectedCardInfo: Dispatch<
    SetStateAction<{ title: string; description: string }>
  >;
}

export default function CardStack({ setSelectedCardInfo }: CardStackProps) {
  return (
    <div className="card-group">
      <FigmaCard setSelectedCardInfo={setSelectedCardInfo} />
      <GitCard setSelectedCardInfo={setSelectedCardInfo} />
      <TailwindCard setSelectedCardInfo={setSelectedCardInfo} />
      <ReactCard setSelectedCardInfo={setSelectedCardInfo} />
    </div>
  );
}
