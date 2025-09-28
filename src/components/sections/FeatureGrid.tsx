import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, CalendarCheck2, BellRing } from "lucide-react";

export function FeatureGrid() {
  return (
    <div id="features" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Example Card */}
        <Card className="rounded-3xl">
          <CardHeader>
            <Badge variant="secondary">
              <Timer className="mr-1 h-3.5 w-3.5" /> Focus Timer
            </Badge>
            <CardTitle>Stay in the zone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built‑in Pomodoro and time‑blocking.
            </p>
          </CardContent>
        </Card>
        {/* Add other feature cards here */}
      </div>
    </div>
  );
}
