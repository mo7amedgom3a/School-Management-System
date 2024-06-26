import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl home-container">
            Hello in School Management
          </h1>
          <p className="text-muted-foreground md:text-xl pp">
            Welcome to our School Management System. We are dedicated to providing a comprehensive and efficient solution for managing all aspects of our school. From student enrollment to attendance tracking, our system streamlines administrative tasks and enhances communication between teachers, students, and parents. Join us on this journey of academic excellence and innovation.
          </p>
          <div className="flex gap-4 Button">
            <Link
              to="/login"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 B1"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 B2"
            >
              Learn More
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="550"
          height="550"
          alt="mm"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </section>
  );
};

export default HeroSection;
