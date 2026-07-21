import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";

import { Layout } from "@/components/layout";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import JoinPage from "@/pages/join";
import ContactPage from "@/pages/contact";
import ProvidersPage from "@/pages/provider_page";
import HowItWorksPage from "@/pages/how_it_works";
import FAQPage from "@/pages/faq";

import Policy from "@/pages/Policy_pages";
import Services from "@/pages/services";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 14, },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2, ease: [0.55, 0, 1, 0.45] as [number, number, number, number] } },
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
      

<Switch location={location} key={location}>
  <Route path="/">
    <PageWrapper>
      <HomePage />
    </PageWrapper>
  </Route>

  <Route path="/about">
    <PageWrapper>
      <AboutPage />
    </PageWrapper>
  </Route>

  <Route path="/join">
    <PageWrapper>
      <JoinPage />
    </PageWrapper>
  </Route>

  <Route path="/contact">
    <PageWrapper>
      <ContactPage />
    </PageWrapper>
  </Route>

  <Route path="/providers">
    <PageWrapper>
      <ProvidersPage />
    </PageWrapper>
  </Route>

  <Route path="/how-it-works">
    <PageWrapper>
      <HowItWorksPage />
    </PageWrapper>
  </Route>

  <Route path="/faq">
    <PageWrapper>
      <FAQPage />
    </PageWrapper>
  </Route>


  <Route path="/services">
    <PageWrapper>
      <Services />
    </PageWrapper>
  </Route>


    <Route path="/policies">
    <PageWrapper>
      <Policy/>
    </PageWrapper>
  </Route>



  <Route>
    <PageWrapper>
      <NotFound />
    </PageWrapper>
  </Route>
</Switch>


      </AnimatePresence>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;