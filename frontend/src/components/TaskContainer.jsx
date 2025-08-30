import React from "react";
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const TaskContainer = () => {
  return (
    <Card className="w-[60rem]">
      <CardHeader>
        <CardTitle>All Task</CardTitle>
        <CardDescription>Click add task button for adding a new task.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Add Task</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default TaskContainer;
