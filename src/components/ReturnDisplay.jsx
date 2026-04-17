import "../styles/Components.css";

export default function ReturnDisplay({ value }) {
  return (
    <span className="return-display">
      {value.toFixed(2)}% p.a.
    </span>
  );
}
