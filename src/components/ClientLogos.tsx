import { useTranslation } from "@/utils/useTranslation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const clients = [
  {
    logo: "/images/1.jpg",
    link: "https://www.facebook.com/GrozioStudijaAgneSiauliai/"
  },
  {
    logo: "/images/2.jpg",
    link: "https://sauletekis.lt/puslapis/index.php"
  },
  {
    logo: "/images/3.jpg",
    link: "https://www.lieporiai.lt/"
  },
  {
    logo: "/images/4.jpg",
    link: "https://vikingindustrier.com/"
  },
  {
    logo: "/images/5.jpg",
    link: "https://grafu.com/"
  },
  {
    logo: "/images/6.jpg",
    link: "https://paslaugos.lt/galiu-pavezet-gk161"
  },
  {
    logo: "/images/7.jpg",
    link: "https://jjanonis.lt/"
  },
  {
    logo: "/images/8.jpg",
    link: "https://www.ramirent.lt/"
  },
  {
    logo: "/images/9.jpg",
    link: "https://www.nordan.lt/lt/"
  },
  {
    logo: "/images/10.jpg",
    link: "https://ecoservice.lt/"
  },
  {
    logo: "/images/11.jpg",
    link: "https://www.ulmas.lt/"
  },
  {
    logo: "/images/12.jpg",
    link: "https://vidmindas.lt/"
  }
];

export const ClientLogos = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-white dark:bg-[rgb(34,31,38)]" aria-label="Our Clients">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-center mb-12">
          {t('clients.title')}
        </h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: isMobile ? 1 : 6,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/6 min-w-[128px]">
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center animate-fade-up hover:shadow-lg mx-auto min-w-[44px] min-h-[44px]"
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={`Visit ${client.link.replace('https://', '').replace('http://', '')}`}
                  >
                    <img 
                      src={client.logo} 
                      alt={`Client logo ${index + 1}`}
                      className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      width="96"
                      height="96"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 flex min-w-[44px] min-h-[44px]" 
              aria-label="Previous slide"
            />
            <CarouselNext 
              className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 flex min-w-[44px] min-h-[44px]"
              aria-label="Next slide"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};