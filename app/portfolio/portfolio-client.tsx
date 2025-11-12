"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTailwindcss,
  SiReact,
  SiHtml5,
  SiNextdotjs,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPython,
  SiTensorflow,
  SiOpenai,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiGoogleads,
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

// Project data structure
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  image: string;
  website?: string;
  category: string;
  designTools: { icon: React.ElementType; color: string }[];
  frontendTools: { icon: React.ElementType; color: string }[];
  backendTools: { icon: React.ElementType; color: string }[];
}

const projects: Project[] = [
  {
    id: "diniiz",
    title: "Diniiz",
    subtitle: "A Restaurant Management Platform",
    description:
      "An all-in-one platform designed for modern restaurants — manage reservations, track orders, payments, and inventory from a single smart dashboard. Streamline operations, reduce no-shows, and deliver a seamless customer experience.",
    logo: "/diniiz.png",
    image: "/projects/diniiz.png",
    website: "https://www.diniiz.com",
    category: "web",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
      { icon: SiAdobephotoshop, color: "text-blue-600" },
      { icon: SiAdobeillustrator, color: "text-orange-600" },
    ],
    frontendTools: [
      { icon: SiTailwindcss, color: "text-cyan-500" },
      { icon: SiReact, color: "text-blue-500" },
      { icon: SiHtml5, color: "text-orange-500" },
      { icon: SiNextdotjs, color: "text-black" },
    ],
    backendTools: [
      { icon: SiJavascript, color: "text-yellow-500" },
      { icon: SiExpress, color: "text-gray-800" },
      { icon: SiMongodb, color: "text-green-600" },
      { icon: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    id: "axion",
    title: "Axion",
    subtitle: "Modern Business Solutions",
    description:
      "A comprehensive business management platform that streamlines operations, enhances productivity, and drives growth. Built with cutting-edge technology to deliver seamless user experiences and robust performance for modern enterprises.",
    logo: "/axion.svg",
    image: "/projects/axion.png",
    website: "https://www.axionlights.com",
    category: "web",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
      { icon: SiAdobephotoshop, color: "text-blue-600" },
      { icon: SiAdobeillustrator, color: "text-orange-600" },
    ],
    frontendTools: [
      { icon: SiReact, color: "text-blue-500" },
      { icon: SiTailwindcss, color: "text-cyan-500" },
      { icon: SiJavascript, color: "text-yellow-500" },
      { icon: SiNextdotjs, color: "text-black" },
    ],
    backendTools: [
      { icon: SiExpress, color: "text-gray-800" },
      { icon: SiMongodb, color: "text-green-600" },
      { icon: SiJavascript, color: "text-yellow-500" },
    ],
  },
  {
    id: "ecommerce-ui",
    title: "ShopFlow",
    subtitle: "E-Commerce UI/UX Design",
    description:
      "A modern e-commerce platform design featuring intuitive navigation, seamless checkout experience, and engaging product displays. Designed to maximize conversions and provide delightful shopping experiences across all devices.",
    logo: "/logo.png",
    image: "/projects/diniiz.png",
    category: "uiux",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
      { icon: SiAdobephotoshop, color: "text-blue-600" },
      { icon: SiAdobeillustrator, color: "text-orange-600" },
    ],
    frontendTools: [],
    backendTools: [],
  },
  {
    id: "fitness-app",
    title: "FitTrack Pro",
    subtitle: "Fitness & Wellness Mobile App",
    description:
      "A comprehensive fitness tracking application that helps users monitor workouts, nutrition, and wellness goals. Features real-time progress tracking, personalized workout plans, and social community features to keep users motivated.",
    logo: "/logo.png",
    image: "/projects/axion.png",
    category: "app",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
      { icon: SiAdobeillustrator, color: "text-orange-600" },
    ],
    frontendTools: [
      { icon: SiFlutter, color: "text-blue-400" },
      { icon: SiDart, color: "text-blue-600" },
    ],
    backendTools: [
      { icon: SiFirebase, color: "text-orange-500" },
      { icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    id: "ai-chatbot",
    title: "SmartAssist AI",
    subtitle: "Intelligent Customer Support Bot",
    description:
      "An AI-powered chatbot solution that provides 24/7 customer support with natural language understanding. Reduces response times by 80% and handles multiple queries simultaneously with high accuracy and personalization.",
    logo: "/logo.png",
    image: "/projects/diniiz.png",
    category: "ai",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
    ],
    frontendTools: [
      { icon: SiReact, color: "text-blue-500" },
      { icon: SiNextdotjs, color: "text-black" },
      { icon: SiTailwindcss, color: "text-cyan-500" },
    ],
    backendTools: [
      { icon: SiPython, color: "text-blue-500" },
      { icon: SiTensorflow, color: "text-orange-600" },
      { icon: SiOpenai, color: "text-gray-800" },
    ],
  },
  {
    id: "brand-campaign",
    title: "TechVision 2024",
    subtitle: "Social Media Brand Campaign",
    description:
      "A comprehensive social media campaign that increased brand awareness by 300% and engagement by 250%. Strategic content creation, influencer partnerships, and data-driven targeting across multiple platforms.",
    logo: "/logo.png",
    image: "/projects/axion.png",
    category: "social",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
      { icon: SiAdobephotoshop, color: "text-blue-600" },
      { icon: SiAdobeillustrator, color: "text-orange-600" },
    ],
    frontendTools: [
      { icon: SiFacebook, color: "text-blue-600" },
      { icon: SiInstagram, color: "text-pink-600" },
      { icon: SiLinkedin, color: "text-blue-700" },
    ],
    backendTools: [],
  },
  {
    id: "digital-marketing",
    title: "GrowthMax Campaign",
    subtitle: "Full-Stack Digital Marketing",
    description:
      "End-to-end digital marketing campaign featuring SEO optimization, PPC advertising, email marketing, and content strategy. Achieved 400% ROI and 5x increase in qualified leads within 6 months.",
    logo: "/logo.png",
    image: "/projects/diniiz.png",
    category: "marketing",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
      { icon: SiAdobephotoshop, color: "text-blue-600" },
    ],
    frontendTools: [
      { icon: SiGoogleads, color: "text-yellow-500" },
      { icon: SiFacebook, color: "text-blue-600" },
      { icon: SiLinkedin, color: "text-blue-700" },
    ],
    backendTools: [],
  },
  {
    id: "dashboard-design",
    title: "DataViz Pro",
    subtitle: "Analytics Dashboard UI/UX",
    description:
      "A sophisticated analytics dashboard design that transforms complex data into actionable insights. Features interactive charts, real-time updates, and customizable widgets for enhanced data visualization.",
    logo: "/logo.png",
    image: "/projects/axion.png",
    category: "uiux",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
      { icon: SiAdobeillustrator, color: "text-orange-600" },
    ],
    frontendTools: [],
    backendTools: [],
  },
  {
    id: "delivery-app",
    title: "QuickDeliver",
    subtitle: "On-Demand Delivery App",
    description:
      "A real-time delivery tracking application connecting customers with local couriers. Features live GPS tracking, instant notifications, and seamless payment integration for fast and reliable deliveries.",
    logo: "/logo.png",
    image: "/projects/diniiz.png",
    category: "app",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
    ],
    frontendTools: [
      { icon: SiFlutter, color: "text-blue-400" },
      { icon: SiDart, color: "text-blue-600" },
    ],
    backendTools: [
      { icon: SiFirebase, color: "text-orange-500" },
      { icon: SiExpress, color: "text-gray-800" },
      { icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    id: "ai-content",
    title: "ContentGenius AI",
    subtitle: "AI Content Generation Platform",
    description:
      "An advanced AI platform that generates high-quality content for blogs, social media, and marketing materials. Leverages GPT-4 and custom models to create engaging, SEO-optimized content in seconds.",
    logo: "/logo.png",
    image: "/projects/axion.png",
    category: "ai",
    designTools: [
      { icon: SiFigma, color: "text-purple-600" },
    ],
    frontendTools: [
      { icon: SiReact, color: "text-blue-500" },
      { icon: SiNextdotjs, color: "text-black" },
    ],
    backendTools: [
      { icon: SiPython, color: "text-blue-500" },
      { icon: SiOpenai, color: "text-gray-800" },
      { icon: SiMongodb, color: "text-green-600" },
    ],
  },
];

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start mb-12 sm:mb-16 md:mb-20">
      {/* First Column - Project Info */}
      <div className="space-y-6 sm:space-y-8 lg:col-span-1 order-1 md:order-1">
        {/* Title Section */}
        <div className="relative bg-white clipped-div p-4 sm:p-6 rounded-lg border">
          <h2 className="text-2xl font-bold text-gray-900 pr-12 sm:pr-16">
            {project.title} : {project.subtitle}
          </h2>
          <div className="absolute bottom-[-0.5px] right-[-1px] rounded-tl-xl border-t border-s bg-white py-2 px-6">
            <Image
              src={project.logo}
              alt={`${project.title} Logo`}
              width={50}
              height={40}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            {project.description}
          </p>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg hover:underline flex items-center gap-1 group"
            >
              View Website{" "}
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>

      {/* Second Column - Project Image */}
      <div className="h-full order-2 md:order-2 lg:order-2">
        <div className="bg-gray-800 rounded-2xl h-full flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg shadow-2xl pointer-events-none w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Third Column - Tech Stack */}
      <div className="h-full flex flex-col gap-4 sm:gap-6 lg:col-span-1 order-3 md:order-3 md:col-span-2 lg:col-span-1">
        {/* Designing & Prototyping Tools */}
        {project.designTools.length > 0 && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Designing & Prototyping Tools
            </h3>
            <div className="flex gap-3 sm:gap-4">
              {project.designTools.map((tool, index) => (
                <tool.icon
                  key={index}
                  className={`${tool.color} text-2xl sm:text-3xl`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Front End Development Tools */}
        {project.frontendTools.length > 0 && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              {project.category === "social" || project.category === "marketing"
                ? "Platforms & Tools"
                : "Front End Development Tools"}
            </h3>
            <div className="flex gap-3 sm:gap-4">
              {project.frontendTools.map((tool, index) => (
                <tool.icon
                  key={index}
                  className={`${tool.color} text-2xl sm:text-3xl`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Back End Development Tools */}
        {project.backendTools.length > 0 && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Back End Development Tools
            </h3>
            <div className="flex gap-3 sm:gap-4">
              {project.backendTools.map((tool, index) => (
                <tool.icon
                  key={index}
                  className={`${tool.color} text-2xl sm:text-3xl`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioClient() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-center flex-wrap h-auto gap-2 p-2 mb-8 sm:mb-12">
            <TabsTrigger value="all" className="px-4 py-2">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="uiux" className="px-4 py-2">
              UI/UX Designing
            </TabsTrigger>
            <TabsTrigger value="web" className="px-4 py-2">
              Web Development
            </TabsTrigger>
            <TabsTrigger value="app" className="px-4 py-2">
              App Development
            </TabsTrigger>
            <TabsTrigger value="ai" className="px-4 py-2">
              AI Solutions
            </TabsTrigger>
            <TabsTrigger value="social" className="px-4 py-2">
              Social Media
            </TabsTrigger>
            <TabsTrigger value="marketing" className="px-4 py-2">
              Digital Marketing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="uiux" className="mt-0">
            {projects
              .filter((p) => p.category === "uiux")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            {projects
              .filter((p) => p.category === "web")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="app" className="mt-0">
            {projects
              .filter((p) => p.category === "app")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="ai" className="mt-0">
            {projects
              .filter((p) => p.category === "ai")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="social" className="mt-0">
            {projects
              .filter((p) => p.category === "social")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="marketing" className="mt-0">
            {projects
              .filter((p) => p.category === "marketing")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
