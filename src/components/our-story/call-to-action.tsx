import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Leadership Excellence</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Ready to Work with Industry Leaders?
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Connect with our visionary leadership team and discover how our collective expertise can drive your enterprise transformation forward.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link to="/contact">
              <Button className="gap-4" variant="outline">
                Meet Our Leaders <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button className="gap-4">
                Explore Solutions <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
