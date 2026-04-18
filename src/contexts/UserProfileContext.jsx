import { createContext, useContext, useState, useCallback } from "react";
import { getRecommendations } from "../utils/recommendations";

const UserProfileContext = createContext(null);

/**
 * UserProfileProvider
 *
 * Wraps the app and provides user profile state and actions:
 * - profile: the current profile object (null if not saved yet)
 * - updateProfile(newProfile): saves/overwrites the profile
 * - isProfileComplete(): true only if all 5 fields are filled
 * - getProductRecommendations(products): returns filtered/sorted products
 */
export function UserProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);

  function updateProfile(newProfile) {
    setProfile(newProfile);
  }

  const isProfileComplete = useCallback(() => {
    if (!profile) return false;
    const requiredFields = [
      "riskTolerance",
      "investmentHorizon",
      "monthlyCapacity",
      "liquidityPreference",
      "investmentGoal",
    ];
    return requiredFields.every(
      (field) => profile[field] !== undefined && profile[field] !== "" && profile[field] !== null
    );
  }, [profile]);

  function getProductRecommendations(products) {
    if (!isProfileComplete()) return [];
    return getRecommendations(products, profile);
  }

  const value = {
    profile,
    updateProfile,
    isProfileComplete,
    getProductRecommendations,
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
}
