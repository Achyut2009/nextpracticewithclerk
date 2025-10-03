import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <Footer />
    </div>
  );
}