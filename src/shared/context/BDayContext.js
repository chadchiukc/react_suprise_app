import React, { createContext, useState } from "react";

export const BDAYContext = createContext();

export const BDayProvider = (props) => {
  const [isBDay, setIsBDAY] = useState(false);
  return (
    <BDAYContext.Provider value={[isBDay, setIsBDAY]}>
      {props.children}
    </BDAYContext.Provider>
  );
};
