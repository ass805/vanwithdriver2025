import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { VehicleCard } from "./VehicleCard";
import { vehicles } from "@/data/vehicles";

export const VehicleSlider = () => {
  return (
    <div className="container mx-auto px-4 mb-20 md:mb-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {vehicles.map((vehicle, index) => (
            <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
              <VehicleCard 
                vehicle={vehicle} 
                isInitialViewport={index < 3} // First three vehicles are in initial viewport
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};