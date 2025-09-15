import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation"

export function FAQSection() {
  const faqs = [
    {
      question: "Comment fonctionne AdsAura ?",
      answer: "AdsAura connecte les influenceurs, les marques et les clients sur une plateforme unique. Les marques publient des campagnes, les influenceurs postulent et collaborent, tandis que les clients découvrent des produits recommandés par leurs influenceurs préférés."
    },
    {
      question: "Comment sont vérifiés les influenceurs ?",
      answer: "Nous vérifions chaque profil d'influenceur en analysant leurs métriques d'engagement, l'authenticité de leur audience et la qualité de leur contenu. Seuls les influenceurs répondant à nos critères de qualité sont acceptés sur la plateforme."
    },
    {
      question: "Quels sont les frais de la plateforme ?",
      answer: "AdsAura prélève une commission transparente sur chaque collaboration réussie. Les influenceurs peuvent s'inscrire gratuitement, et les marques ont accès à différents plans selon leurs besoins. Aucun frais caché !"
    },
    {
      question: "Comment les paiements sont-ils sécurisés ?",
      answer: "Nous utilisons des systèmes de paiement cryptés et sécurisés. Les fonds sont bloqués en séquestre jusqu'à la validation de la campagne, garantissant ainsi la sécurité pour toutes les parties impliquées."
    },
    {
      question: "Puis-je gérer plusieurs campagnes simultanément ?",
      answer: "Absolument ! Notre tableau de bord permet de gérer plusieurs campagnes en parallèle, de suivre leurs performances en temps réel et de communiquer avec tous vos partenaires depuis une interface unique."
    }
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <ScrollAnimationWrapper animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Questions{" "}
              <span className="hero-gradient bg-clip-text text-transparent">
                Fréquentes
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur AdsAura pour commencer
            </p>
          </ScrollAnimationWrapper>

          {/* FAQ Accordion */}
          <ScrollAnimationWrapper animation="fade-up" delay={200}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-base font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimationWrapper>

          {/* Contact CTA */}
          <ScrollAnimationWrapper animation="fade-up" delay={400} className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Une autre question ? Notre équipe est là pour vous aider.
            </p>
            <a 
              href="/contact" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Contactez-nous →
            </a>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}