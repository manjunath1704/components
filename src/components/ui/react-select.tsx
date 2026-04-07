import * as React from "react"
import ReactSelect, {
  type Props as ReactSelectProps,
  type StylesConfig,
} from "react-select"

export type SelectOption = {
  label: string
  value: string
}

const selectStyles: StylesConfig<SelectOption, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: "44px",
    borderRadius: "14px",
    borderColor: state.isFocused ? "var(--ring)" : "var(--border)",
    backgroundColor: "color-mix(in oklab, var(--card) 70%, transparent)",
    boxShadow: state.isFocused
      ? "0 0 0 2px color-mix(in oklab, var(--ring) 35%, transparent)"
      : "none",
    paddingLeft: "2px",
    cursor: "pointer",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "2px 10px",
    gap: "6px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "var(--muted-foreground)",
    fontSize: "0.875rem",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--foreground)",
    fontSize: "0.875rem",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    paddingRight: "10px",
    color: "var(--muted-foreground)",
  }),
  menu: (base) => ({
    ...base,
    marginTop: "8px",
    borderRadius: "14px",
    padding: "6px",
    backgroundColor: "var(--popover)",
    border: "1px solid var(--border)",
    boxShadow: "0 18px 45px -30px rgba(5, 8, 20, 0.9)",
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 60,
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: "10px",
    padding: "8px 12px",
    backgroundColor: state.isSelected
      ? "color-mix(in oklab, var(--primary) 22%, transparent)"
      : state.isFocused
        ? "color-mix(in oklab, var(--primary) 14%, transparent)"
        : "transparent",
    color: "var(--foreground)",
    cursor: "pointer",
  }),
}

export type SelectProps = ReactSelectProps<SelectOption, false>

export function Select(props: SelectProps) {
  const menuPortalTarget =
    typeof document !== "undefined" ? document.body : undefined

  return (
    <ReactSelect
      {...props}
      isSearchable={props.isSearchable ?? false}
      styles={selectStyles}
      menuPortalTarget={menuPortalTarget}
      menuPosition="fixed"
    />
  )
}
