import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AppLayout from "./components/app-layout.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import HomePage from "./pages/home/page.tsx";
import NotFound from "./pages/Notfound.tsx";
import { lazy, Suspense, useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const AboutPage = lazy(() => import("./pages/about/page.tsx"));
const ServicesPage = lazy(() => import("./pages/services/page.tsx"));
const PressureWashingPage = lazy(() => import("./pages/services/pressure-washing/page.tsx"));
const SoftWashingPage = lazy(() => import("./pages/services/soft-washing/page.tsx"));
const RoofCleaningPage = lazy(() => import("./pages/services/roof-cleaning/page.tsx"));
const GutterCleaningPage = lazy(() => import("./pages/services/gutter-cleaning/page.tsx"));
const WindowCleaningPage = lazy(() => import("./pages/services/window-cleaning/page.tsx"));
const GalleryPage = lazy(() => import("./pages/gallery/page.tsx"));
const ReviewsPage = lazy(() => import("./pages/reviews/page.tsx"));
const ContactPage = lazy(() => import("./pages/contact/page.tsx"));
const EstimatePage = lazy(() => import("./pages/estimate/page.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/privacy-policy/page.tsx"));
const TermsPage = lazy(() => import("./pages/terms/page.tsx"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-blue-600/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
            <Route path="/services" element={<Suspense fallback={<PageLoader />}><ServicesPage /></Suspense>} />
            <Route path="/services/pressure-washing" element={<Suspense fallback={<PageLoader />}><PressureWashingPage /></Suspense>} />
            <Route path="/services/soft-washing" element={<Suspense fallback={<PageLoader />}><SoftWashingPage /></Suspense>} />
            <Route path="/services/roof-cleaning" element={<Suspense fallback={<PageLoader />}><RoofCleaningPage /></Suspense>} />
            <Route path="/services/gutter-cleaning" element={<Suspense fallback={<PageLoader />}><GutterCleaningPage /></Suspense>} />
            <Route path="/services/window-cleaning" element={<Suspense fallback={<PageLoader />}><WindowCleaningPage /></Suspense>} />
            <Route path="/gallery" element={<Suspense fallback={<PageLoader />}><GalleryPage /></Suspense>} />
            <Route path="/reviews" element={<Suspense fallback={<PageLoader />}><ReviewsPage /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
            <Route path="/estimate" element={<Suspense fallback={<PageLoader />}><EstimatePage /></Suspense>} />
            <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicyPage /></Suspense>} />
            <Route path="/terms" element={<Suspense fallback={<PageLoader />}><TermsPage /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
