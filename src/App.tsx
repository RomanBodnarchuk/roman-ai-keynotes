import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import SpeakingTopics from "./pages/SpeakingTopics.tsx";
import Books from "./pages/Books.tsx";
import Media from "./pages/Media.tsx";
import EventOrganizers from "./pages/EventOrganizers.tsx";
import Contact from "./pages/Contact.tsx";
import Resources from "./pages/Resources.tsx";
import Tools from "./pages/Tools.tsx";
import AIReadinessScore from "./pages/tools/AIReadinessScore.tsx";
import CloneROICalculator from "./pages/tools/CloneROICalculator.tsx";
import HubSpotAudit from "./pages/tools/HubSpotAudit.tsx";
import KnowledgeLossCalculator from "./pages/tools/KnowledgeLossCalculator.tsx";
import AICEOBriefing from "./pages/tools/AICEOBriefing.tsx";
import AIStrategySprint from "./pages/tools/AIStrategySprint.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/speaking-topics" element={<SpeakingTopics />} />
          <Route path="/books" element={<Books />} />
          <Route path="/media" element={<Media />} />
          <Route path="/event-organizers" element={<EventOrganizers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/ai-readiness-score" element={<AIReadinessScore />} />
          <Route path="/tools/clone-roi-calculator" element={<CloneROICalculator />} />
          <Route path="/tools/hubspot-ai-audit" element={<HubSpotAudit />} />
          <Route path="/tools/knowledge-loss-calculator" element={<KnowledgeLossCalculator />} />
          <Route path="/tools/ai-ceo-briefing" element={<AICEOBriefing />} />
          <Route path="/tools/ai-strategy-sprint" element={<AIStrategySprint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
