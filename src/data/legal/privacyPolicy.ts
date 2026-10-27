import { HOST, PUBLISHER } from './publisher'
import type { LegalDocumentContent } from './types'

export const PRIVACY_POLICY: LegalDocumentContent = {
  title: 'Politique de confidentialité',
  sections: [
    {
      id: 'editeur',
      title: '1. Éditeur du site web',
      blocks: [
        {
          type: 'details',
          items: [
            { label: 'Entreprise', value: PUBLISHER.name },
            { label: 'Adresse', value: PUBLISHER.address },
            { label: 'Téléphone', value: PUBLISHER.phone, href: PUBLISHER.phoneHref },
            { label: 'SIRET', value: PUBLISHER.siret },
            { label: 'SIREN', value: PUBLISHER.siren },
            { label: 'Directeur de publication', value: PUBLISHER.director },
          ],
        },
      ],
    },
    {
      id: 'hebergeur',
      title: '2. Hébergeur du site web',
      blocks: [
        {
          type: 'details',
          items: [
            { label: 'Hébergeur', value: HOST.name },
            { label: 'Adresse', value: 'San Francisco, Californie, États-Unis' },
            { label: 'Site web', value: 'netlify.com', href: HOST.website },
          ],
        },
      ],
    },
    {
      id: 'nom-de-domaine',
      title: '3. Nom de domaine',
      blocks: [
        {
          type: 'paragraph',
          text: `Le nom de domaine ${PUBLISHER.domain} est fourni par OVHcloud (2 rue Kellermann, 59100 Roubaix, France — 09 72 10 10 07 — www.ovhcloud.com).`,
        },
      ],
    },
    {
      id: 'donnees-personnelles',
      title: '4. Données personnelles',
      blocks: [
        {
          type: 'paragraph',
          text: `Le site ${PUBLISHER.domain} respecte la vie privée de ses utilisateurs et se conforme à la réglementation européenne en vigueur (Règlement Général sur la Protection des Données).`,
        },
      ],
    },
    {
      id: 'utilisation-conservation',
      title: '5. Utilisation et conservation des données',
      blocks: [
        {
          type: 'paragraph',
          text: 'Le site web requiert la transmission des données de navigation de l’utilisateur (appareil utilisé, date d’accès au site) à des fins purement statistiques. Conformément à l’article 6.1.a du RGPD, le consentement sera demandé de façon explicite et sera révocable à tout moment. Ces données seront conservées durant 13 mois au maximum.',
        },
        {
          type: 'paragraph',
          text: 'Les données collectées (nom, prénom, adresse mail) dans le cadre du formulaire peuvent être conservées durant les 3 années suivant le dernier contact avec l’utilisateur. Au-delà, ces données seront effacées.',
        },
      ],
    },
    {
      id: 'droits',
      title: '6. Droits des utilisateurs',
      blocks: [
        {
          type: 'paragraph',
          text: `Les utilisateurs peuvent demander une copie de leurs données à l’adresse ${PUBLISHER.email}. Ils peuvent demander la rectification des données erronées ou leur suppression. Ils peuvent également manifester leur opposition, révoquer leur consentement à tout moment et récupérer leurs données dans un format structuré.`,
        },
      ],
    },
    {
      id: 'cookies',
      title: '7. Cookies et technologies analogues',
      blocks: [
        {
          type: 'paragraph',
          text: 'Les cookies et technologies similaires sont utilisés afin d’identifier le type d’appareil utilisé et la date de visite, à des fins statistiques. L’utilisateur peut accepter ou refuser l’utilisation de ces technologies. Ces cookies ont une durée de vie de 13 mois.',
        },
      ],
    },
    {
      id: 'evolution',
      title: '8. Évolution de la présente politique',
      blocks: [
        {
          type: 'paragraph',
          text: 'La politique de confidentialité peut être modifiée à tout moment. L’utilisateur en sera notifié.',
        },
      ],
    },
    {
      id: 'contact',
      title: '9. Contact',
      blocks: [
        {
          type: 'details',
          items: [
            { label: 'Email', value: PUBLISHER.email, href: `mailto:${PUBLISHER.email}` },
            { label: 'Adresse postale', value: PUBLISHER.address },
          ],
        },
      ],
    },
  ],
}
