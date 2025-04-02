
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, FileText } from "lucide-react";
import ReportsTable from "./ReportsTable";

const ReportsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="text-medivault-blue h-5 w-5" />
          Reports Timeline
        </CardTitle>
        <CardDescription>View all your reports in chronological order</CardDescription>
      </CardHeader>
      <CardContent>
        <ReportsTable />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Filter</Button>
        <Button className="bg-medivault-blue hover:bg-medivault-blue/90">
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReportsCard;
