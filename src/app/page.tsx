import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 
    bg-[url('/restaurant.webp')] bg-cover bg-center bg-no-repeat">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-3xl lg:flex p-5 text-white">
        Welcome to Vetrivel Recipie App 
      </div>
      <Button asChild variant="secondary">
      <Link href="/recipie-list">Explore Recipes</Link>
      </Button>
      
    </main>
  );
}
