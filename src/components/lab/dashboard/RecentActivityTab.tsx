
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const RecentActivityTab = () => {
  // Sample data (in a real app, this would come from an API)
  const recentActivities = [
    { id: 1, type: "upload", title: "Blood Test uploaded", patient: "John Doe", time: "2 hours ago" },
    { id: 2, type: "view", title: "X-Ray Report viewed", patient: "Sarah Smith", time: "3 hours ago" },
    { id: 3, type: "status", title: "COVID Test marked as complete", patient: "Michael Johnson", time: "5 hours ago" },
    { id: 4, type: "upload", title: "Allergy Test uploaded", patient: "Emily Wilson", time: "1 day ago" },
    { id: 5, type: "view", title: "Cholesterol Test viewed", patient: "Robert Brown", time: "1 day ago" }
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Track all recent lab activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex gap-4 pb-4 border-b last:border-0">
                  <div className="rounded-full p-2 bg-gray-100 h-10 w-10 flex items-center justify-center shrink-0">
                    {activity.type === "upload" && <Upload className="h-4 w-4 text-blue-500" />}
                    {activity.type === "view" && <FileText className="h-4 w-4 text-green-500" />}
                    {activity.type === "status" && <Clock className="h-4 w-4 text-orange-500" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{activity.title}</h4>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-500 mr-4">
                        {activity.patient}
                      </span>
                      <span className="text-xs text-gray-400">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Details</Button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline">View All Activity</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Reports</CardTitle>
            <CardDescription>All uploaded reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-medivault-blue mr-4" />
              <span className="text-3xl font-bold">87</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to do</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link to="/lab/upload">
                <Button className="w-full mb-2 bg-medivault-blue">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Report
                </Button>
              </Link>
              <Link to="/lab/patients">
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  View Reports
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>This month's activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Reports Uploaded</span>
                <span className="text-sm font-medium flex items-center">
                  32
                  <ArrowUpRight className="ml-1 h-4 w-4 text-green-500" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">New Patients</span>
                <span className="text-sm font-medium flex items-center">
                  8
                  <ArrowUpRight className="ml-1 h-4 w-4 text-green-500" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Report Views</span>
                <span className="text-sm font-medium flex items-center">
                  124
                  <ArrowUpRight className="ml-1 h-4 w-4 text-green-500" />
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecentActivityTab;
