export function Item({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{label}:</span>
      <span>{value.toFixed(0)}px</span>
    </div>
  );
}
