// src/components/FormSelect.jsx

import { Label } from "../components/ui/Label";
import { Select } from "../components/ui/Select";
const FormSelect = ({ id, label, value, onChange, required = false, options }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} value={value} onChange={onChange} required={required}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default FormSelect;
