// src/components/Home/CallToActionSection.tsx
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to Streamline Your School?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sign up today and experience the power of our comprehensive school management system.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
            <Button type="submit">Sign Up</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Sign up to get started.{" "}
            <Link href="#" className="underline underline-offset-2" prefetch={false}>
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
