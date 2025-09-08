import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Users, Building, UserCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="mr-2 h-4 w-4" />
            Plateforme d'influence marketing #1
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-up">
            Connectez{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Influenceurs
            </span>{" "}
            et{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Marques
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up">
            La plateforme qui révolutionne le marketing d'influence. 
            Créez des partenariats authentiques et développez votre impact digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 animate-fade-up">
            <Card className="group relative overflow-hidden border-primary/20 bg-primary/5 p-1 transition-all hover:border-primary/40">
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/register?type=influencer">
                  <UserCircle className="mr-2 h-5 w-5" />
                  Je suis Influenceur
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>

            <Card className="group relative overflow-hidden border-secondary/20 bg-secondary/5 p-1 transition-all hover:border-secondary/40">
              <Button asChild size="lg" variant="secondary" className="w-full">
                <Link to="/register?type=brand">
                  <Building className="mr-2 h-5 w-5" />
                  Je suis une Marque
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>

            <Card className="group relative overflow-hidden border-accent/20 bg-accent/5 p-1 transition-all hover:border-accent/40">
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link to="/register?type=client">
                  <Users className="mr-2 h-5 w-5" />
                  Je suis Client
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-8 border-t border-border pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1K+</div>
              <div className="text-sm text-muted-foreground">Influenceurs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Marques</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">2K+</div>
              <div className="text-sm text-muted-foreground">Campagnes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full hero-gradient opacity-10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full hero-gradient opacity-10 blur-3xl" />
    </section>
  )
}