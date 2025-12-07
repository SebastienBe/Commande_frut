import Link from 'next/link'
import { Calendar, CreditCard, Scissors, Paintbrush, UtensilsCrossed, MapPin, CheckCircle2, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Illustration avec icônes */}
          <div className="relative mb-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-6 bg-violet-100 rounded-2xl transform -rotate-6 shadow-lg">
                <Calendar className="w-16 h-16 md:w-20 md:h-20 text-violet-600" />
              </div>
              <div className="p-6 bg-blue-100 rounded-2xl transform rotate-6 shadow-lg">
                <CreditCard className="w-16 h-16 md:w-20 md:h-20 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-5xl leading-tight">
            La plateforme de réservation qui s'adapte à{' '}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              TOUS vos services
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Coiffure, tatouage, restaurant, tourisme... Gérez vos réservations et paiements en un clic
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/signup">
                Démarrer gratuitement
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Secteurs */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Adapté à tous les secteurs
          </h2>
          <p className="text-xl text-gray-600">
            Une solution flexible qui s'adapte à votre métier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Coiffeurs */}
          <Card className="border-2 hover:border-violet-300 hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                <Scissors className="w-8 h-8 text-violet-600" />
              </div>
              <CardTitle className="text-2xl">Coiffeurs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Réduisez les no-shows de 40% grâce à l'empreinte bancaire et aux rappels automatiques
              </CardDescription>
            </CardContent>
          </Card>

          {/* Tatoueurs */}
          <Card className="border-2 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Paintbrush className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Tatoueurs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Gérez vos longues sessions et assurez l'engagement client avec des arrhes sécurisées
              </CardDescription>
            </CardContent>
          </Card>

          {/* Restaurants */}
          <Card className="border-2 hover:border-purple-300 hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">Restaurants</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Optimisez vos tables avec un système de réservation intelligent et anti-désistement
              </CardDescription>
            </CardContent>
          </Card>

          {/* Guides touristiques */}
          <Card className="border-2 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-indigo-600" />
              </div>
              <CardTitle className="text-2xl">Tourisme</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Vendez vos expériences en ligne avec paiements sécurisés et confirmations instantanées
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-gradient-to-br from-violet-50 to-blue-50 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600">
            Des fonctionnalités puissantes pour simplifier votre quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1: Réservation 24/7 */}
          <Card className="border-2 border-violet-200 bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl mb-2">Réservation en ligne 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                Vos clients réservent à toute heure, même quand vous dormez. Interface intuitive et rapide, optimisée pour mobile.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Disponibilité en temps réel</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Confirmations automatiques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Rappels par email/SMS</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 2: Empreinte bancaire */}
          <Card className="border-2 border-blue-200 bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl mb-2">Empreinte bancaire anti-annulation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                Réduisez drastiquement les no-shows avec notre système d'empreinte bancaire sécurisée et conforme PCI-DSS.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">💳</span>
                  <span>Paiement ou empreinte au choix</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💳</span>
                  <span>Facturation automatique si no-show</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💳</span>
                  <span>100% sécurisé et conforme</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 3: Dashboard */}
          <Card className="border-2 border-purple-200 bg-white hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl mb-2">Dashboard temps réel</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                Suivez vos performances, analysez vos revenus et optimisez votre activité grâce à des statistiques détaillées.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Statistiques en temps réel</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Rapports financiers détaillés</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Analyses de performance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
            <Link href="/signup">
              Essayer gratuitement maintenant
            </Link>
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Aucune carte bancaire requise • Installation en 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo placeholder */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">BookingPro</span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              <Link href="/cgu" className="text-gray-600 hover:text-violet-600 transition-colors">
                CGU
              </Link>
              <Link href="/confidentialite" className="text-gray-600 hover:text-violet-600 transition-colors">
                Confidentialité
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-violet-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2025 BookingPro. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
