import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FarmProvider } from '@/context/FarmContext';
import Header from '@/components/Header';
import Index from "./pages/Index";
import Crops from "./pages/Crops";
import Animals from "./pages/Animals";
import Market from "./pages/Market";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create root route with providers and header
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FarmProvider>
          <Header />
          <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <Outlet />
          </main>
          <Toaster />
          <Sonner />
        </FarmProvider>
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create routes
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const cropsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/crops',
  component: Crops,
})

const animalsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/animals',
  component: Animals,
})

const marketRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/market',
  component: Market,
})

const eventsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/events',
  component: Events,
})

const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const notFoundRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
})

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, cropsRoute, animalsRoute, marketRoute, eventsRoute, aboutRoute, contactRoute, notFoundRoute])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;