import Tooltip from "@mui/material/Tooltip";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar pôster...",
  tooltip = ""
}) {
  return (
    <section className="search-bar">
      <Tooltip title={tooltip} arrow>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Tooltip>
    </section>
  );
}
