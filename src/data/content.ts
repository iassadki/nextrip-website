/**
 * All landing-page copy lives here so sections stay purely presentational
 * and the text can be edited (or translated) without touching components.
 */
import { ROUTES } from '@/app/routes'
import type { IconName } from '@/components/icons/Icon'
import tripActivitiesScreen from '@/assets/images/screens/trip-activities.jpg'
import tripOrganizeScreen from '@/assets/images/screens/trip-organize.jpg'
import tripsScreen from '@/assets/images/screens/trips.jpg'

export const SECTION_IDS = {
  presentation: 'presentation',
  objectives: 'objectifs',
  features: 'fonctionnalites',
  download: 'telecharger',
} as const

export const NAV_LINKS = [
  { label: 'Présentation', sectionId: SECTION_IDS.presentation, to: `${ROUTES.home}#${SECTION_IDS.presentation}` },
  { label: 'Objectifs', sectionId: SECTION_IDS.objectives, to: `${ROUTES.home}#${SECTION_IDS.objectives}` },
  { label: 'Fonctionnalités', sectionId: SECTION_IDS.features, to: `${ROUTES.home}#${SECTION_IDS.features}` },
] as const

export const CONTACT = {
  email: 'nextrip.contact@gmail.com',
  handle: 'nextrip_official',
  instagram: 'https://www.instagram.com/nextrip_official',
  tiktok: 'https://www.tiktok.com/@nextrip_official',
} as const

export const HERO = {
  titleStart: 'Toute votre expérience de voyage en',
  titleHighlight: 'une seule et même application',
  tagline: "And you, what's your Nextrip ?",
  primaryCta: { label: 'Voir la présentation', to: `${ROUTES.home}#${SECTION_IDS.presentation}` },
  secondaryCta: { label: "Télécharger l'app", to: `${ROUTES.home}#${SECTION_IDS.download}` },
} as const

export const PRESENTATION = {
  title: 'Présentation',
  intro:
    'Nous sommes trois fondateurs, trois passionnés de voyage avec une même habitude : partir, découvrir de nouveaux endroits et organiser nos propres séjours.',
  observationLead: 'Nextrip est né d’un constat simple :',
  observation: 'Organiser un voyage ne devrait pas être aussi compliqué.',
} as const

export const PROBLEM = {
  title: 'Votre problème ?',
  paragraphs: [
    'Trop d’applications pour un seul voyage.',
    'Sur les réseaux sociaux, nous avons vu des personnes dans les commentaires évoquer ce sujet et parler de cette même frustration.',
  ],
  scatteredApps: [
    'Airbnb',
    'Booking',
    'SNCF',
    'Google Maps',
    'Instagram',
    'TikTok',
    'Notes',
    'Captures',
    'Skyscanner',
    'Agenda',
  ],
} as const

export const SOLUTION = {
  title: 'Notre solution',
  items: [
    'Une application pour chercher un hébergement',
    'Une autre pour les transports',
    'Google Maps pour enregistrer des lieux',
    'Les réseaux sociaux pour trouver des idées',
    'Des notes pour construire notre programme',
    'Des captures d’écran un peu partout…',
  ],
  conclusion: 'Avec Nextrip, tout est réuni au même endroit.',
} as const

export interface Objective {
  icon: IconName
  title: string
  description: string
}

export const OBJECTIVES: { title: string; items: Objective[] } = {
  title: 'Nos objectifs',
  items: [
    {
      icon: 'suitcase',
      title: 'Simplifier l’organisation',
      description:
        'Centraliser toutes les informations et étapes d’un voyage au même endroit, de la préparation au retour.',
    },
    {
      icon: 'group',
      title: 'Faciliter les voyages en groupe',
      description:
        'Permettre aux voyageurs de construire, organiser et partager leur voyage facilement avec leurs proches.',
    },
    {
      icon: 'share',
      title: 'Découvrir et partager des expériences',
      description:
        'S’inspirer des voyages et activités d’autres voyageurs pour découvrir de nouvelles destinations et expériences.',
    },
    {
      icon: 'community',
      title: 'Créer une communauté de voyageurs',
      description:
        'Faire de Nextrip un espace où les voyageurs peuvent partager leurs aventures, échanger, interagir et suivre les expériences de la communauté.',
    },
  ],
}

export interface Feature {
  id: string
  /** App screenshot shown inside the iPhone mockup. */
  image: string
  imageAlt: string
  title: string
  description: string
}

export const FEATURES: { title: string; items: Feature[] } = {
  title: 'Nos fonctionnalités',
  items: [
    {
      id: 'trips',
      image: tripsScreen,
      imageAlt: 'Écran « Mes Voyages » de l’application Nextrip avec un voyage à Paris',
      title: 'Tous vos voyages au même endroit',
      description:
        'Retrouvez facilement vos voyages passés, en cours et à venir depuis un seul espace. Toutes les informations essentielles restent accessibles en quelques secondes.',
    },
    {
      id: 'organize',
      image: tripOrganizeScreen,
      imageAlt: 'Écran d’un voyage en cours avec les sections Notes, Itinéraire et Lieux enregistrés',
      title: 'Organisez votre voyage simplement',
      description:
        'Centralisez vos notes, votre itinéraire et vos lieux enregistrés au sein d’un même voyage. Plus besoin de multiplier les applications pour préparer votre séjour.',
    },
    {
      id: 'activities',
      image: tripActivitiesScreen,
      imageAlt: 'Écran des activités à Paris filtrées par catégorie : musée, jardin, église',
      title: 'Trouvez les activités qui vous correspondent',
      description:
        'Découvrez des lieux et activités selon vos envies et ajoutez-les directement à votre voyage pour construire votre programme.',
    },
  ],
}

export const DOWNLOAD = {
  title: 'Télécharger l’app',
  heading: 'Nextrip arrive bientôt sur votre téléphone',
  description:
    'L’application est en cours de finalisation. Dès sa sortie, scannez le QR code pour la télécharger sur iOS et Android.',
  badge: 'Coming soon',
  platforms: ['iOS', 'Android'],
} as const

export const FOOTER = {
  slogan: ['And you,', 'what’s your Nextrip ?'],
  copyright: `© ${new Date().getFullYear()} Nextrip — Ilias ASSADKI EI. Tous droits réservés.`,
  legalLinks: [
    { label: 'Mentions légales & CGU', to: `${ROUTES.legalNotice}` },
    { label: 'Politique de confidentialité', to: ROUTES.privacyPolicy },
  ],
} as const
