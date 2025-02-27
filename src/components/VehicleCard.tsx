import { useState } from "react";
import { useTranslation } from "@/utils/useTranslation";
import { VehicleImageDialog } from "./VehicleImageDialog";
import type { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  isInitialViewport?: boolean;
}

export const VehicleCard = ({ vehicle, isInitialViewport = false }: VehicleCardProps) => {
  const { t, language } = useTranslation();
  const [open, setOpen] = useState(false);

  const getAltText = () => {
    const vehicleName = t(`vehicles.${vehicle.name}.name`);
    switch (language) {
      case 'lt':
        return `${vehicleName} - Keleivių pervežimo paslaugos`;
      case 'en':
        return `${vehicleName} - Passenger Transportation Services`;
      case 'ru':
        return `${vehicleName} - Пассажирские перевозки`;
      default:
        return vehicleName;
    }
  };

  return (
    <div 
      className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 text-white"
      style={{ 
        "--bg-opacity": "0.1",
        "--text-contrast": "contrast(100%)"
      } as React.CSSProperties}
    >
      <div className="transition-transform duration-300 hover:scale-105">
        <VehicleImageDialog 
          vehicle={vehicle}
          open={open}
          onOpenChange={setOpen}
          altText={getAltText()}
          isInitialViewport={isInitialViewport}
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-white">{t(`vehicles.${vehicle.name}.name`)}</h2>
        <p className="text-sm text-gray-200" aria-label={t(`vehicles.${vehicle.name}.seats`)}>
          {t(`vehicles.${vehicle.name}.seats`)}
        </p>
      </div>
    </div>
  );
};