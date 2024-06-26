// src/components/FormField.jsx

import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";

const FormField = ({ id, label, type = "text", placeholder, value, onChange, required = false }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default FormField;
