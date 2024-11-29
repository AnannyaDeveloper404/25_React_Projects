import { createContext, useEffect, useState } from "react";
import featureFlagsServiceCall from "../data";
export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(true);
  const [enableFlags, setEnableFlags] = useState({});
  async function fetchFeatureFlags() {
    try {
      const resp = await featureFlagsServiceCall();
      setEnableFlags(resp);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }
  // console.log(enableFlags);

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
