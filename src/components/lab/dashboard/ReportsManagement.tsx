
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

const ReportsManagement = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Reports</CardTitle>
          <CardDescription>Upload new patient diagnostic reports quickly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="mb-6">
              <Upload className="h-12 w-12 text-medivault-blue mx-auto mb-4" />
              <h3 className="text-xl font-medium">Upload New Reports</h3>
              <p className="text-muted-foreground mt-2">
                Upload diagnostic reports for your patients in seconds
              </p>
            </div>
            <Link to="/lab/upload">
              <Button className="bg-medivault-blue">
                <Upload className="mr-2 h-4 w-4" />
                Upload New Report
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-medium mb-2">Recent Uploads</h4>
            <div className="text-sm text-gray-500">
              <p>The last 5 reports you've uploaded will appear here.</p>
              <p className="mt-1">Visit the upload page to add new patient reports.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsManagement;
