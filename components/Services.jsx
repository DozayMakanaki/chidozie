import React from "react";
import {
  GanttChartSquare,
  Blocks,
  Gem,
  Database,
  LayoutTemplate,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum explicabo cumque ipsum quod esse ut molestias, architecto unde natus perferendis alias perspiciatis labore voluptas necessitatibus? Fugiat voluptas eius deleniti",
  },
  {
    icon: <LayoutTemplate size={72} strokeWidth={0.8} />,
    title: "Frontend Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum explicabo cumque ipsum quod esse ut molestias, architecto unde natus perferendis alias perspiciatis labore voluptas necessitatibus? Fugiat voluptas eius deleniti",
  },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "Backend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum explicabo cumque ipsum quod esse ut molestias, architecto unde natus perferendis alias perspiciatis labore voluptas necessitatibus? Fugiat voluptas eius deleniti",
  },
];
const Services = () => {
  return (
    <section className=" mb-12 xl:mb-36 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto ">
          Service
        </h2>

        {/* grid item */}

        <div>
          {serviceData.map((item, index) => {
            return (
              <Card className='w-full max-w-[420px] h-[300px] flex flex' key={index}>
                <CardHeader>
                  <div className="w-[140px] h-[80] bg-green-100 dark:bg-background flex justify-center items-center">{item.icon}</div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
