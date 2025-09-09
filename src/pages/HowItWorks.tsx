import * as React from "react"
import { Link } from "react-router-dom"
import { 
  UserPlus, 
  Search, 
  MessageSquare, 
  Handshake, 
  BarChart3, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  UserCircle,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function HowItWorks() {
  const processSteps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Inscription",
      description: "Créez votre compte en quelques minutes selon votre profil : influenceur, marque ou client.",
      details: ["Profil personnalisé", "Vérification rapide", "Configuration des préférences"]
    },
    {
      step: 2,
      icon: Search,
      title: "Découverte",
      description: "Trouvez les partenaires parfaits grâce à notre algorithme de matching intelligent.",
      details: ["Filtres avancés", "Recommandations IA", "Analyses de compatibilité"]
    },
    {
      step: 3,
      icon: MessageSquare,
      title: "Négociation",
      description: "Échangez directement et négociez les termes de votre collaboration en toute transparence.",
      details: ["Messagerie sécurisée", "Modèles de contrats", "Négociation guidée"]
    },
    {
      step: 4,
      icon: Handshake,
      title: "Collaboration",
      description: "Lancez votre campagne avec tous les outils nécessaires pour garantir le succès.",
      details: ["Suivi en temps réel", "Livrables trackés", "Communication continue"]
    },
    {
      step: 5,
      icon: BarChart3,
      title: "Résultats",
      description: "Analysez les performances et mesurez l'impact de vos campagnes avec des métriques détaillées.",
      details: ["Analytics avancées", "ROI calculé", "Rapports automatisés"]
    }
  ]

  const userJourneys = [
    {
      type: "influencer",
      icon: UserCircle,
      title: "Pour les Influenceurs",
      color: "bg-blue-500",
      steps: [
        "Créez votre profil et showcasez votre audience",
        "Recevez des propositions de campagnes personnalisées",
        "Négociez vos tarifs et conditions",
        "Créez du contenu authentique et engageant",
        "Recevez vos paiements de manière sécurisée"
      ]
    },
    {
      type: "brand",
      icon: Building,
      title: "Pour les Marques",
      color: "bg-purple-500",
      steps: [
        "Définissez vos objectifs et votre budget",
        "Découvrez des influenceurs alignés avec vos valeurs",
        "Lancez vos campagnes avec des briefs détaillés",
        "Suivez les performances en temps réel",
        "Mesurez votre ROI et optimisez vos stratégies"
      ]
    },
    {
      type: "client",
      icon: Users,
      title: "Pour les Clients",
      color: "bg-green-500",
      steps: [
        "Explorez les recommandations personnalisées",
        "Découvrez de nouveaux produits via vos influenceurs préférés",
        "Profitez d'offres exclusives et de codes promo",
        "Partagez vos avis et expériences",
        "Gagnez des récompenses pour votre engagement"
      ]
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: "Sécurité garantie",
      description: "Paiements sécurisés et contrats protégés"
    },
    {
      icon: Star,
      title: "Qualité premium",
      description: "Influenceurs et marques vérifiés"
    },
    {
      icon: BarChart3,
      title: "Analytics poussées",
      description: "Métriques détaillées et ROI mesurable"
    },
    {
      icon: Users,
      title: "Support dédié",
      description: "Équipe d'experts à votre service"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <Badge variant="secondary" className="mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Comment ça marche
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Votre succès en 
                <span className="hero-gradient-text"> 5 étapes</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Découvrez comment AdsAura révolutionne le marketing d'influence avec une approche simple et efficace.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                const isOdd = index % 2 === 1
                
                return (
                  <div key={step.step} className={`flex items-center gap-12 ${isOdd ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <div className="max-w-lg">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex justify-center">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/20">
                        <Icon className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* User Journeys */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Adapté à votre profil</h2>
              <p className="text-muted-foreground">Chaque utilisateur a son parcours personnalisé sur AdsAura</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {userJourneys.map((journey, index) => {
                const Icon = journey.icon
                return (
                  <Card key={journey.type} className="relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 ${journey.color}`} />
                    
                    <CardHeader className="text-center">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mx-auto mb-4 ${journey.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{journey.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <ol className="space-y-4">
                        {journey.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm flex-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                      
                      <Button 
                        className="w-full mt-6" 
                        variant="outline"
                        asChild
                      >
                        <Link to={`/register?type=${journey.type}`}>
                          Commencer maintenant
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir AdsAura ?</h2>
              <p className="text-muted-foreground">Les avantages qui font la différence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">
                Prêt à commencer votre aventure ?
              </h2>
              <p className="text-xl text-muted-foreground">
                Rejoignez la communauté AdsAura et transformez votre approche du marketing d'influence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/register">
                    Créer mon compte gratuit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Parler à un expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}