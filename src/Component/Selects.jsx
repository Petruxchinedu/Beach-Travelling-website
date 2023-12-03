import React from "react";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import Keywest from "../assets/keywest.jpg";
import SelectsCard from "./SelectsCard";
const Selects = () => {
  return (
    <div name="travels" className="max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3  gap-4">
      <SelectsCard bg={BoraBora} text="Bora Bora" />
      <SelectsCard bg={BoraBora2} text="Antigua" />
      <SelectsCard bg={Maldives} text="Maldives" />
      <SelectsCard bg={Maldives2} text="Conzumel" />
      <SelectsCard bg={Maldives3} text="Jamaica" />
      <SelectsCard bg={Keywest} text="Keywest" />
    </div>
  );
};

export default Selects;
