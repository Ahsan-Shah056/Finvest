import { useUserProfile } from "../contexts/UserProfileContext";
import RecommendationList from "../components/RecommendationList";

const LABEL_MAP = {
  riskTolerance: "Risk Tolerance",
  investmentHorizon: "Investment Horizon",
  monthlyCapacity: "Monthly Budget",
  liquidityPreference: "Liquidity Preference",
  investmentGoal: "Goal",
};

export default function Recommendations({ products }) {
  const { profile, isProfileComplete, getProductRecommendations } = useUserProfile();

  const complete = isProfileComplete();
  const recommendations = complete ? getProductRecommendations(products) : [];

  return (
    <div className="page-container">
      <h1 className="section-title">Our Picks that fit your Vibe</h1>

      {complete && profile && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-md)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          {Object.entries(LABEL_MAP).map(([key, label]) => (
            <span
              key={key}
              style={{
                background: "var(--color-bg-card)",
                border: "2px solid var(--color-text)",
                padding: "8px 16px",
                borderRadius: "var(--radius-full)",
                fontSize: "var(--text-sm)",
                color: "var(--color-text-secondary)",
                boxShadow: "var(--shadow-sm)",
                fontWeight: "var(--weight-bold)",
              }}
            >
              {label}:{" "}
              <strong style={{ color: "var(--color-text)" }}>
                {key === "monthlyCapacity"
                  ? `PKR ${Number(profile[key]).toLocaleString()}`
                  : profile[key]}
              </strong>
            </span>
          ))}
        </div>
      )}

      <RecommendationList
        recommendations={recommendations}
        profile={profile}
        isProfileComplete={complete}
      />
    </div>
  );
}
