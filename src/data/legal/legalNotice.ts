import { ROUTES } from '@/app/routes'
import { HOST, PUBLISHER } from './publisher'
import type { LegalDocumentContent } from './types'

export const LEGAL_NOTICE: LegalDocumentContent = {
  title: 'Mentions légales et Conditions Générales d’Utilisation',
  updatedAt: '19 septembre 2026',
  sections: [
    {
      id: 'mentions-legales',
      title: '1. Mentions légales',
      subsections: [
        {
          id: 'editeur',
          title: '1.1. Éditeur du site',
          blocks: [
            {
              type: 'details',
              items: [
                { label: 'Entreprise', value: PUBLISHER.name },
                { label: 'Adresse', value: PUBLISHER.address },
                { label: 'Téléphone', value: PUBLISHER.phone, href: PUBLISHER.phoneHref },
                { label: 'Email', value: PUBLISHER.email, href: `mailto:${PUBLISHER.email}` },
                { label: 'Directeur de la publication', value: PUBLISHER.director },
              ],
            },
          ],
        },
        {
          id: 'hebergeur',
          title: '1.2. Hébergeur du site',
          blocks: [
            {
              type: 'details',
              items: [
                { label: 'Hébergeur', value: HOST.name },
                { label: 'Adresse', value: HOST.address },
                { label: 'Téléphone', value: HOST.phone },
                { label: 'Site web', value: 'netlify.com', href: HOST.website },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cgu',
      title: '2. Conditions Générales d’Utilisation (CGU)',
      subsections: [
        {
          id: 'objet',
          title: '2.1. Objet',
          blocks: [
            {
              type: 'paragraph',
              text: `Le présent document définit les conditions d’utilisation du site ${PUBLISHER.domain} (ci-après « le Site »).`,
            },
            {
              type: 'paragraph',
              text: 'En accédant au Site, l’utilisateur (ci-après « l’Utilisateur ») accepte sans réserve les présentes CGU.',
            },
          ],
        },
        {
          id: 'acces',
          title: '2.2. Accès au site',
          blocks: [
            {
              type: 'list',
              items: [
                'Le Site est accessible gratuitement à tout utilisateur disposant d’une connexion internet.',
                'L’Éditeur se réserve le droit de modifier, suspendre ou interrompre l’accès au Site à tout moment, sans préavis.',
                'L’Utilisateur est responsable de la configuration matérielle et logicielle nécessaire pour accéder au Site.',
              ],
            },
          ],
        },
        {
          id: 'propriete-intellectuelle',
          title: '2.3. Propriété intellectuelle',
          blocks: [
            {
              type: 'list',
              items: [
                'Tous les contenus présents sur le Site (textes, images, logos, vidéos, etc.) sont la propriété exclusive de l’Éditeur ou de ses partenaires.',
                'Toute reproduction, représentation ou diffusion totale ou partielle du contenu du Site, par quelque moyen que ce soit, est interdite sans autorisation écrite préalable de l’Éditeur.',
              ],
            },
          ],
        },
        {
          id: 'responsabilites',
          title: '2.4. Responsabilités',
          blocks: [
            {
              type: 'list',
              items: [
                'L’Éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l’utilisation du Site ou de l’impossibilité d’y accéder.',
                'L’Utilisateur s’engage à utiliser le Site conformément aux lois et règlements en vigueur et à ne pas porter atteinte aux droits de tiers.',
              ],
            },
          ],
        },
        {
          id: 'donnees-personnelles',
          title: '2.5. Données personnelles',
          blocks: [
            {
              type: 'paragraph',
              text: 'Les données personnelles collectées sur le Site sont traitées conformément à la',
              link: { label: 'politique de confidentialité', to: ROUTES.privacyPolicy },
            },
            {
              type: 'list',
              items: [
                'L’Utilisateur dispose d’un droit d’accès, de rectification et de suppression de ses données, conformément au RGPD.',
              ],
            },
          ],
        },
        {
          id: 'liens',
          title: '2.6. Liens hypertextes',
          blocks: [
            {
              type: 'list',
              items: [
                'Le Site peut contenir des liens vers des sites tiers.',
                'L’Éditeur ne contrôle pas ces sites et décline toute responsabilité quant à leur contenu.',
              ],
            },
          ],
        },
        {
          id: 'modification',
          title: '2.7. Modification des CGU',
          blocks: [
            {
              type: 'list',
              items: [
                'L’Éditeur se réserve le droit de modifier les présentes CGU à tout moment.',
                'Les modifications seront portées à la connaissance des Utilisateurs par une mention sur le Site ou par email.',
                'L’Utilisateur est invité à consulter régulièrement les CGU pour prendre connaissance des éventuelles modifications.',
              ],
            },
          ],
        },
        {
          id: 'loi-applicable',
          title: '2.8. Loi applicable et juridiction compétente',
          blocks: [
            {
              type: 'list',
              items: [
                'Les présentes CGU sont régies par le droit français.',
                'Tout litige relatif à l’interprétation ou à l’exécution des CGU sera soumis à la compétence des tribunaux français.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'contact',
      title: '3. Contact',
      blocks: [
        {
          type: 'paragraph',
          text: 'Pour toute question ou réclamation concernant les présentes Mentions légales et CGU, l’Utilisateur peut contacter l’Éditeur :',
        },
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
