import * as React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, Users, Building, UserCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Fonctionnalités", href: "/#features" },
    { name: "Comment ça marche", href: "/#how-it-works" },
    { name: "Tarifs", href: "/pricing" },
    { name: "Contact", href: "/contact" }
  ]

  const handleUserTypeSelect = (type: 'influencer' | 'brand' | 'client') => {
    navigate(`/register?type=${type}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">AdsAura</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Rejoindre
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-popover/95 backdrop-blur-sm">
              <DropdownMenuLabel>Choisissez votre profil</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleUserTypeSelect('influencer')}>
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Je suis Influenceur</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleUserTypeSelect('brand')}>
                  <Building className="mr-2 h-4 w-4" />
                  <span>Je suis une Marque</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleUserTypeSelect('client')}>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Je suis Client</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild>
            <Link to="/login">Connexion</Link>
          </Button>
          
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-background/80 backdrop-blur-sm"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleUserTypeSelect('influencer')}
              >
                <UserCircle className="mr-2 h-4 w-4" />
                Je suis Influenceur
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleUserTypeSelect('brand')}
              >
                <Building className="mr-2 h-4 w-4" />
                Je suis une Marque
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleUserTypeSelect('client')}
              >
                <Users className="mr-2 h-4 w-4" />
                Je suis Client
              </Button>
              <Button asChild className="w-full">
                <Link to="/login">Connexion</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}