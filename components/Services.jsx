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
    title: "Community Manangement",
    description:
      "As a Community Manager, I build and nurture online blockchain communities. I engage with members, address concerns, and foster a positive environment. I boost engagement, organize events, and create relevant content, ensuring the community feels valued and connected for long-term loyalty and support",
  },
  {
    icon: <LayoutTemplate size={72} strokeWidth={0.8} />,
    title: "Social Media Manangement",
    description:
      "As a Social Media Manager, I boost blockchain projects' online presence by creating posts, managing interactions, and analyzing metrics. I use various platforms to communicate updates, grow the audience, and drive engagement.",
  },
  // {
  //   icon: <Database size={72} strokeWidth={0.8} />,
  //   title: "Graphics Designer",
  //   description:
  //     "As a Graphics Designer for blockchain projects, I create impactful designs like logos, social media graphics, and promotional materials to convey messages effectively and elevate visual identity.",
  // },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "Community Moderator",
    description:
      "I moderate online discussions, ensuring respect and productivity. I monitor forums, address behavior, support members, and foster a safe environment for active participation.",
  },
  // {
  //   icon: <Database size={72} strokeWidth={0.8} />,
  //   title: "Ambassador",
  //   description:
  //     "As an Ambassador, I represent blockchain projects, promote their vision, network at events, use social media to spread their message, and build relationships to drive growth and enhance their reputation.",
  // },
];
const Services = () => {
  return (
    <section className=" mb-12 xl:mb-36 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto ">
          Service
        </h2>

        {/* grid item */}

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className=" text-center ">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
