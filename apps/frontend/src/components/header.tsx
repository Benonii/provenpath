import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  hash?: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/library', label: 'Library' },
  { path: '/#services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  };

  // Handle animation sequencing
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      // Delay text appearance until sheet is fully open (approx 800ms now due to slower animation)
      timeout = setTimeout(() => {
        setShowContent(true);
      }, 800);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-80 via-gray-80/60 to-transparent pt-4">
      <div className="relative flex items-center justify-between px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img src={logo} alt="ProvenPath Logo" className="h-16 w-auto" />
        </Link>

        {/* Navigation Sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              className="relative z-50 text-white hover:bg-white/20 hover:text-white h-16 w-18 p-0"
            >
              <Menu className="!h-12 !w-18" strokeWidth={1.5} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          
          <SheetContent
            side="right"
            className="w-[80vw] sm:w-[1000px] bg-[#00F2FF] border-l-0 p-0 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => {
                const active = isActive(item.path, item.hash);
                const delay = index * 150; // Slower staggered delay

                return (
                  <div 
                    key={item.hash ? `${item.path}#${item.hash}` : item.path}
                    className={`transition-all duration-700 ease-out transform ${
                      showContent 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-4'
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <SheetClose asChild>
                      <Link
                        to={item.path}
                        hash={item.hash}
                        className="group relative block text-4xl font-bold uppercase text-black hover:text-white transition-colors duration-300"
                      >
                        {item.label}
                        
                        {/* Animated Strikethrough */}
                        {active && (
                          <span 
                            className={`absolute left-0 top-1/2 h-[6px] bg-black block transition-all duration-700 ease-out ${
                              showContent ? 'w-full' : 'w-0'
                            }`}
                            style={{ 
                              transform: 'translateY(-50%)',
                              transitionDelay: `${(navItems.length * 150) + 400}ms` // Start after all text appears
                            }}
                          />
                        )}
                      </Link>
                    </SheetClose>
                  </div>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
