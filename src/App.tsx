import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { TranslationProvider, useTranslation } from "./utils/useTranslation";
import Index from "./pages/Index";
import { useEffect } from "react";
import { Language } from "./utils/translations";

const queryClient = new QueryClient();

// Function to get user's preferred language
const getPreferredLanguage = (): Language => {
  // Get browser language
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  
  // Check if browser language is supported
  if (browserLang === 'lt' || browserLang === 'en' || browserLang === 'ru') {
    return browserLang as Language;
  }
  
  // Default to English if language is not supported
  return 'en';
};

// Component to handle language setting based on URL parameter or user preferences
const LanguageHandler = () => {
  const { lang } = useParams<{ lang: Language }>();
  const { setLanguage } = useTranslation();

  useEffect(() => {
    // If URL has language parameter, use it
    if (lang) {
      setLanguage(lang);
    } else {
      // Otherwise use browser's preferred language
      const preferredLang = getPreferredLanguage();
      setLanguage(preferredLang);
    }
  }, [lang, setLanguage]);

  return <Index />;
};

const App = () => {
  // Get user's preferred color scheme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Get current hour
  const currentHour = new Date().getHours();
  const isDarkHours = currentHour < 6 || currentHour >= 18;
  
  // Set initial theme based on time and system preference
  const initialTheme = isDarkHours || prefersDark ? 'dark' : 'light';

  // Get initial language
  const initialLang = getPreferredLanguage();

  return (
    <ThemeProvider attribute="class" defaultTheme={initialTheme} enableSystem>
      <TranslationProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to={`/${initialLang}`} replace />} />
                <Route path="/:lang" element={<LanguageHandler />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default App;
