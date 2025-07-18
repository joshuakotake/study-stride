export default function StatSlider({ id, label, value, onChange }) {
  const depletionEvery = (seconds) => {
    const totalSeconds = Number(seconds) * 10;
    if (isNaN(totalSeconds)) return "Invalid";
  
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    const parts = [];
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);

    return parts.join(" ");
  }

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} <span className="text-xs text-gray-500">({depletionEvery(value)})</span>
      </label>

      <input
        id={id}
        type="range"
        min={60}
        max={3600}
        step={10}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 pixelated appearance-none cursor-pointer accent-gray-600"
      />
    </div>
  );
}
