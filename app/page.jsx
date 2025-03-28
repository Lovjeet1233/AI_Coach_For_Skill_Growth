import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Memoized components using PropTypes for type checking
const FeatureCard = React.memo(({ feature }) => (
  <Card className="border-2 hover:border-primary transition-colors duration-300 hover:shadow-lg group">
    <CardContent className="pt-6 text-center flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </CardContent>
  </Card>
));

// Add PropTypes for type checking
import PropTypes from 'prop-types';

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

const TestimonialCard = React.memo(({ testimonial }) => (
  <Card className="bg-background hover:bg-muted/30 transition-colors duration-300">
    <CardContent className="pt-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              width={48}
              height={48}
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.author}`}
              className="rounded-full object-cover border-2 border-primary/20"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <p className="text-sm text-primary">{testimonial.company}</p>
          </div>
        </div>
        <blockquote className="relative">
          <p className="text-muted-foreground italic pl-4 border-l-4 border-primary">
            {testimonial.quote}
          </p>
        </blockquote>
      </div>
    </CardContent>
  </Card>
));

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
  }).isRequired
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Accessibility: Add skip to content link */}
      <a 
        href="#main-content" 
        className="absolute top-0 left-0 p-2 bg-primary text-white transform -translate-y-full focus:translate-y-0 z-50"
      >
        Skip to main content
      </a>

      {/* Hero Section (Assumed to be imported) */}
     
     <HeroSection/>

      <main id="main-content" className="flex-grow">
        {/* Features Section */}
        <section 
          className="w-full py-12 md:py-24 lg:py-32 bg-background" 
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              id="features-heading" 
              className="text-3xl font-bold tracking-tighter text-center mb-12"
            >
              Powerful Features for Your Career Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          className="w-full py-12 md:py-24 bg-muted/10" 
          aria-labelledby="stats-heading"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              id="stats-heading" 
              className="sr-only"
            >
              Platform Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {[
                { value: "50+", label: "Industries Covered" },
                { value: "1000+", label: "Interview Questions" },
                { value: "95%", label: "Success Rate" },
                { value: "24/7", label: "AI Support" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center space-y-2 animate-fade-in"
                >
                  <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="w-full py-12 md:py-24 bg-muted/50" 
          aria-labelledby="testimonials-heading"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              id="testimonials-heading" 
              className="text-3xl font-bold text-center mb-12"
            >
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonial.map((test, index) => (
                <TestimonialCard key={index} testimonial={test} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 relative">
  {/* Background Image */}
  {/* <div className="absolute inset-0 z-0">
    <Image
      src="/bg.jpg"  // Replace with your actual image path
      alt="Career acceleration background"
      layout="fill"
      objectFit="cover"
      quality={90}
      className="opacity-30 filter brightness-50"
      priority
    />
  </div> */}

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-accent/70 mix-blend-overlay z-10"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
      <div className="flex flex-col items-center justify-center text-center px-6 py-16 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Ready to Accelerate Your Career?
        </h2>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Join thousands of professionals transforming their careers with 
          cutting-edge AI-powered guidance and personalized insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard" passHref>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-black text-primary hover:bg-black/10"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link href="/pricing" passHref>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
            >
              Explore Plans
            </Button>
          </Link>
        </div>

        <div className="mt-6 text-sm text-white/60 flex items-center justify-center gap-2">
          <span>⭐</span>
          <span>4.9/5 · 10,000+ Professionals Empowered</span>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
    </div>
  );
}