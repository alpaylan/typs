
import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" color="blue-gray" className="font-bold text-7xl">
        {count}
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mt-1 font-medium text-2xl">
        {title}
      </Typography>
    </Card>
  );
}


export default StatsCard;
