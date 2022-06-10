import { createContext, useContext, useState } from "react";

const rulesContext = createContext();

const RulesProvider = ({ children }) => {
  const [isRulesAgreed, setIsRulesAgreed] = useState(false);

  return (
    <rulesContext.Provider value={{ isRulesAgreed, setIsRulesAgreed }}>
      {children}
    </rulesContext.Provider>
  );
};

const useRules = () => useContext(rulesContext);

export { useRules, RulesProvider };
