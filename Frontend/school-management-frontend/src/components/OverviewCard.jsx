// src/components/OverviewCard.jsx

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";

const OverviewCard = ({ title, icon: Icon, value, subtitle }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
