import React from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import { Menu, Home, Sprout, Heart, ShoppingBag, Calendar, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Sprout className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              EcoFarm Sim
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={cn("text-gray-700 hover:text-green-600 transition-colors font-medium", { 'text-green-600': router.state.location.pathname === '/' })}>
              <Home className="inline-block mr-1 h-4 w-4" /> Dashboard
            </Link>
            <Link to="/crops" className={cn("text-gray-700 hover:text-green-600 transition-colors font-medium", { 'text-green-600': router.state.location.pathname === '/crops' })}>
              <Sprout className="inline-block mr-1 h-4 w-4" /> Crops
            </Link>
            <Link to="/animals" className={cn("text-gray-700 hover:text-green-600 transition-colors font-medium", { 'text-green-600': router.state.location.pathname === '/animals' })}>
              <Heart className="inline-block mr-1 h-4 w-4" /> Animals
            </Link>
            <Link to="/market" className={cn("text-gray-700 hover:text-green-600 transition-colors font-medium", { 'text-green-600': router.state.location.pathname === '/market' })}>
              <ShoppingBag className="inline-block mr-1 h-4 w-4" /> Market
            </Link>
            <Link to="/events" className={cn("text-gray-700 hover:text-green-600 transition-colors font-medium", { 'text-green-600': router.state.location.pathname === '/events' })}>
              <Calendar className="inline-block mr-1 h-4 w-4" /> Events
            </Link>
            <Link to="/about" className={cn("text-gray-700 hover:text-green-600 transition-colors font-medium", { 'text-green-600': router.state.location.pathname === '/about' })}>
              <Info className="inline-block mr-1 h-4 w-4" /> About
            </Link>
            <Link to="/contact" className={cn("text-gray-700 hover:text-green-600 transition-colors font-medium", { 'text-green-600': router.state.location.pathname === '/contact' })}>
              <Mail className="inline-block mr-1 h-4 w-4" /> Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  <Home className="inline-block mr-2 h-4 w-4" /> Dashboard
                </Link>
                <Link to="/crops" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  <Sprout className="inline-block mr-2 h-4 w-4" /> Crops
                </Link>
                <Link to="/animals" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  <Heart className="inline-block mr-2 h-4 w-4" /> Animals
                </Link>
                <Link to="/market" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  <ShoppingBag className="inline-block mr-2 h-4 w-4" /> Market
                </Link>
                <Link to="/events" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  <Calendar className="inline-block mr-2 h-4 w-4" /> Events
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  <Info className="inline-block mr-2 h-4 w-4" /> About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  <Mail className="inline-block mr-2 h-4 w-4" /> Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;