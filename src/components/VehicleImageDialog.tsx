import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { X } from "lucide-react";
import { useTranslation } from "@/utils/useTranslation";
import type { Vehicle } from "@/data/vehicles";

interface VehicleImageDialogProps {
  vehicle: Vehicle;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  altText: string;
  isInitialViewport?: boolean;
}

export const VehicleImageDialog = ({ 
  vehicle, 
  open, 
  onOpenChange, 
  altText,
  isInitialViewport = false 
}: VehicleImageDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <div 
          className="aspect-video relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          role="button"
          tabIndex={0}
          aria-label={t('common.openGallery')}
        >
          <img
            src={vehicle.images[0]}
            alt={altText}
            className="object-cover w-full h-full"
            loading={isInitialViewport ? "eager" : "lazy"}
            width={400}
            height={300}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-white/10 backdrop-blur-sm">
        <button 
          className="absolute right-4 top-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-50"
          onClick={() => onOpenChange(false)}
          aria-label={t('common.close')}
        >
          <X size={24} />
        </button>
        <Carousel>
          <CarouselContent>
            {vehicle.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${altText} - ${t('common.image')} ${index + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};