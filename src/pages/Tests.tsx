
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, FileText } from "lucide-react";

const tests = [
  {
    id: 1,
    title: "Mathematics Mid-Term",
    date: "March 15, 2024",
    duration: "2 hours",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Physics Assessment",
    date: "March 20, 2024",
    duration: "1.5 hours",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Chemistry Quiz",
    date: "March 10, 2024",
    duration: "45 minutes",
    status: "Completed"
  }
];

const Tests = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">Upcoming Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <Card key={test.id} className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {test.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{test.date} • {test.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{test.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;
