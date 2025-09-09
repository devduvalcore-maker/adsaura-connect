import * as React from "react"
import { Link } from "react-router-dom"
import { Zap, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    "Plateforme": [
      { name: "Comment ça marche", href: "/how-it-works" },
      { name: "Fonctionnalités", href: "/#features" },
      { name: "Tarifs", href: "/pricing" },
      { name: "Sécurité", href: "/security" }
    ],
    "Pour les Utilisateurs": [
      { name: "Influenceurs", href: "/register?type=INFLUENCER" },
      { name: "Marques", href: "/register?type=BRAND" },
      { name: "Clients", href: "/register?type=CUSTOMER" },
      { name: "Centre d'aide", href: "/help" }
    ],
    "Entreprise": [
      { name: "À propos", href: "/about" },
      { name: "Carrières", href: "/careers" },
      { name: "Presse", href: "/press" },
      { name: "Partenaires", href: "/partners" }
    ],
    "Légal": [
      { name: "Conditions d'utilisation", href: "/terms" },
      { name: "Politique de confidentialité", href: "/privacy" },
      { name: "Mentions légales", href: "/legal" },
      { name: "Cookies", href: "/cookies" }
    ]
  }

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin }
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="container">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">AdsAura</span>
              </Link>
              
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                La plateforme qui connecte les marques et les influenceurs pour des partenariats réussis.
              </p>

              {/* Contact info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>contact@adsaura.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-foreground mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AdsAura. Tous droits réservés.
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            {/* Language/region selector */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>🇫🇷</span>
              <span>France - Français</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}