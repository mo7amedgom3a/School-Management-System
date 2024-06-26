// src/components/FormCard.jsx

import { Card, CardContent, CardFooter } from "../components/ui/Card";

const FormCard = ({ children }) => {
  return (
    <Card>
      {children}
    </Card>
  );
};

FormCard.Content = CardContent;
FormCard.Footer = CardFooter;

export default FormCard;
