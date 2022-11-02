import { useState } from "react";
import CardStack from "../components/CardStack";

export default function Technologies() {
  const [selectedCardInfo, setSelectedCardInfo] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="min-h-screen bg-white grid lg:grid-cols-2 justify-center p-20">
      <div className="mx-auto">
        <CardStack setSelectedCardInfo={setSelectedCardInfo} />
      </div>
      <div>
        <p>{selectedCardInfo.title}</p>
        <p>{selectedCardInfo.description}</p>
      </div>
    </div>
  );
}
