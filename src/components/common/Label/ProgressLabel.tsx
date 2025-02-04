import ProgressLabelStyles from "./ProgressLabel.module.css";

interface ProgressLabelProps {
  text: string;
  variant?: "success" | "warning" | "error" | "info"; // Optional color variant
}

export default function ProgressLabel({
  text,
  variant = "info",
}: ProgressLabelProps) {
    
  const Styles: Record<string, React.CSSProperties> = {
    success: { backgroundColor: "rgba(76, 175, 80, 0.35)", color: "#4caf50" }, // Green
    warning: { backgroundColor: "rgba(255, 152, 0, 0.35)", color: "#ff9800" }, // Orange
    error: { backgroundColor: "rgba(244, 67, 54, 0.35)", color: "#f44336" }, // Red
    info: { backgroundColor: "rgba(33, 150, 243, 0.35)", color: "#2196f3" }, // Blue
  };

  return (
    <div className={ProgressLabelStyles.label} style={Styles[variant]}>
      <p className={ProgressLabelStyles.labelText}>{text}</p>
    </div>
  );
}
