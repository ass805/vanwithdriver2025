import { Button } from "@/components/ui/button";
import { VehicleSlider } from "./VehicleSlider";
import { useTranslation } from "@/utils/useTranslation";
import { BackgroundVideo } from "./hero/BackgroundVideo";
import { ThemeToggle } from "./hero/ThemeToggle";
import { LanguageToggle } from "./hero/LanguageToggle";
import { ContactInfo } from "./hero/ContactInfo";

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />

      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-white pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 animate-fade-down">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <ContactInfo />
            <Button 
              size="lg" 
              className="bg-[rgb(44,116,179)] hover:bg-[rgb(44,116,179)]/90 text-white"
              onClick={scrollToContact}
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>

        <div className="w-full mt-16 md:mt-24">
          <VehicleSlider />
        </div>
      </div>
    </div>
  );
};