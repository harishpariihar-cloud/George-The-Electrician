import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ServicePage from "@/pages/ServicePage";
import ServiceAreasPage from "@/pages/ServiceAreasPage";
import LocationPage from "@/pages/LocationPage";
import ElectricalServicesLocationPage from "@/pages/ElectricalServicesLocationPage";
import ReviewsPage from "@/pages/ReviewsPage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/service-areas", element: <ServiceAreasPage /> },
      { path: "/reviews", element: <ReviewsPage /> },
      { path: "/faq", element: <FAQPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/electrical-services-glendale-ca", element: <ElectricalServicesLocationPage /> },
      // 10 service pages
      { path: "/residential-electrician-glendale-ca", element: <ServicePage /> },
      { path: "/commercial-electrician-glendale-ca", element: <ServicePage /> },
      { path: "/electrical-repair-glendale-ca", element: <ServicePage /> },
      { path: "/emergency-electrician-glendale-ca", element: <ServicePage /> },
      { path: "/electrical-panel-upgrade-glendale-ca", element: <ServicePage /> },
      { path: "/ev-charger-installation-glendale-ca", element: <ServicePage /> },
      { path: "/lighting-installation-glendale-ca", element: <ServicePage /> },
      { path: "/outlet-switch-repair-glendale-ca", element: <ServicePage /> },
      { path: "/ceiling-fan-installation-glendale-ca", element: <ServicePage /> },
      { path: "/electrical-inspection-glendale-ca", element: <ServicePage /> },
      // Electrician location pages
      { path: "/electrician-glendale-ca", element: <LocationPage /> },
      { path: "/electrician-pasadena-ca", element: <LocationPage /> },
      { path: "/electrician-burbank-ca", element: <LocationPage /> },
      { path: "/electrician-los-angeles-ca", element: <LocationPage /> },
      { path: "/electrician-la-canada-flintridge-ca", element: <LocationPage /> },
      // Electrical services location pages
      { path: "/electrical-services-pasadena-ca", element: <LocationPage /> },
      { path: "/electrical-services-burbank-ca", element: <LocationPage /> },
      { path: "/electrical-services-los-angeles-ca", element: <LocationPage /> },
      { path: "/electrical-services-la-canada-flintridge-ca", element: <LocationPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
