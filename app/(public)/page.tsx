import Link from "next/link"
import { 
  Calendar, 
  CreditCard, 
  Scissors, 
  Paintbrush, 
  UtensilsCrossed, 
  MapPin,
  CheckCircle2,
  BarChart3
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">BookingPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#secteurs" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Secteurs
            </Link>
            <Link href="#fonctionnalites" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link 
              href="/login"
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              Connexion
            </Link>
            <Link 
              href="/signup"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              Démarrer gratuitement
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 md:px-8 py-20 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                La plateforme de réservation qui s'adapte à TOUS vos services
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                Coiffure, tatouage, restaurant, tourisme... Gérez vos réservations et paiements en un clic
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Démarrer gratuitement
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="#fonctionnalites"
                className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:border-primary hover:text-primary transition-all"
              >
                Découvrir les fonctionnalités
              </Link>
            </div>

            {/* Illustration avec icônes */}
            <div className="pt-12 flex justify-center">
              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
                    <Calendar className="h-16 w-16 text-primary" />
                    <span className="text-sm font-medium text-slate-600">Réservation</span>
                  </div>
                  <div className="hidden md:block text-3xl text-primary">+</div>
                  <div className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-primary/10 border border-blue-500/20">
                    <CreditCard className="h-16 w-16 text-blue-600" />
                    <span className="text-sm font-medium text-slate-600">Paiement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Secteurs */}
      <section id="secteurs" className="container px-4 md:px-8 py-20 bg-slate-50/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Pour tous les secteurs d'activité
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Notre plateforme s'adapte parfaitement à votre métier, quelle que soit votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Coiffeurs */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Coiffeurs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Réduisez les no-shows de 40% grâce aux empreintes bancaires et confirmations automatiques
                </CardDescription>
              </CardContent>
            </Card>

            {/* Tatoueurs */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                  <Paintbrush className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Tatoueurs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Sécurisez vos longues sessions avec des acomptes et gérez votre planning facilement
                </CardDescription>
              </CardContent>
            </Card>

            {/* Restaurants */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10">
                  <UtensilsCrossed className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Restaurants</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Optimisez vos services et réduisez les tables vides avec des réservations intelligentes
                </CardDescription>
              </CardContent>
            </Card>

            {/* Guides touristiques */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Guides</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Acceptez des réservations 24/7 et gérez vos groupes avec des paiements sécurisés
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section id="fonctionnalites" className="container px-4 md:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Une plateforme complète pour gérer vos réservations, paiements et votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Réservation en ligne */}
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span>✅</span> Réservation en ligne 24/7
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  Vos clients réservent quand ils veulent, sans vous déranger. Agenda synchronisé en temps réel avec notifications instantanées.
                </CardDescription>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Interface de réservation personnalisable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Confirmations automatiques par email/SMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rappels avant le rendez-vous</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Empreinte bancaire */}
            <Card className="border-2 border-primary/50 hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-primary">
                  <CreditCard className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span>💳</span> Empreinte bancaire anti-annulation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  Sécurisez vos rendez-vous avec une empreinte bancaire. Pas de charge, juste une garantie contre les no-shows et annulations tardives.
                </CardDescription>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Réduction des no-shows jusqu'à 80%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Politique d'annulation personnalisable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Paiements sécurisés Stripe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dashboard */}
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-900">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span>📊</span> Dashboard temps réel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  Suivez votre activité en direct : réservations, revenus, taux de remplissage. Toutes vos données au même endroit.
                </CardDescription>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Statistiques détaillées et graphiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Exports pour votre comptabilité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vue mobile optimisée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-8 py-20 bg-gradient-to-br from-primary to-blue-600">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Prêt à transformer votre activité ?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Rejoignez des centaines de professionnels qui ont déjà optimisé leur gestion de réservations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link 
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-slate-50 transition-all hover:scale-105 shadow-xl"
            >
              Créer mon compte gratuitement
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <p className="text-sm text-white/75">
            Sans engagement • Sans carte bancaire • Configuration en 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-slate-50">
        <div className="container px-4 md:px-8 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Logo et description */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-primary">BookingPro</span>
                </div>
                <p className="text-sm text-slate-600">
                  La plateforme de réservation adaptée à tous les services professionnels.
                </p>
              </div>

              {/* Produit */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Produit</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#fonctionnalites" className="text-slate-600 hover:text-primary transition-colors">Fonctionnalités</Link></li>
                  <li><Link href="#secteurs" className="text-slate-600 hover:text-primary transition-colors">Secteurs</Link></li>
                  <li><Link href="/pricing" className="text-slate-600 hover:text-primary transition-colors">Tarifs</Link></li>
                  <li><Link href="/demo" className="text-slate-600 hover:text-primary transition-colors">Démo</Link></li>
                </ul>
              </div>

              {/* Entreprise */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Entreprise</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-slate-600 hover:text-primary transition-colors">À propos</Link></li>
                  <li><Link href="/blog" className="text-slate-600 hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="text-slate-600 hover:text-primary transition-colors">Carrières</Link></li>
                  <li><Link href="/contact" className="text-slate-600 hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Légal */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Légal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/cgu" className="text-slate-600 hover:text-primary transition-colors">CGU</Link></li>
                  <li><Link href="/confidentialite" className="text-slate-600 hover:text-primary transition-colors">Confidentialité</Link></li>
                  <li><Link href="/mentions-legales" className="text-slate-600 hover:text-primary transition-colors">Mentions légales</Link></li>
                  <li><Link href="/cookies" className="text-slate-600 hover:text-primary transition-colors">Cookies</Link></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-600">
                © 2025 BookingPro. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <Link href="https://twitter.com" className="text-slate-600 hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com" className="text-slate-600 hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="text-slate-600 hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
