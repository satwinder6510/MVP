import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LocationProvider } from "@/contexts/LocationContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Success from "@/pages/Success";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import TermsOfService from "@/pages/TermsOfService";
import RiskDisclosure from "@/pages/RiskDisclosure";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/success" component={Success} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/risk-disclosure" component={RiskDisclosure} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <LocationProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </LocationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
