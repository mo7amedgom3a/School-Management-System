// src/components/FormButton.jsx

import { Button } from "../components/ui/Button";

const FormButton = ({ type = "submit", className, children }) => {
  return (
    <Button type={type} className={className}>
      {children}
    </Button>
  );
};

export default FormButton;
