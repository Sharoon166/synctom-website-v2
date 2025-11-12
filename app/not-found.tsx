import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Text */}
        <div className="relative">
          <h1 className="text-[150px] sm:text-[200px] md:text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0383CA] to-[#EF3A61] leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[#0383CA]/10 to-[#EF3A61]/10 blur-3xl" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            
          >
            <button className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be interested in:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services" className="text-[#0383CA] hover:underline">
              Our Services
            </Link>
            <Link href="/portfolio" className="text-[#0383CA] hover:underline">
              Portfolio
            </Link>
            <Link href="/about" className="text-[#0383CA] hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-[#0383CA] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
