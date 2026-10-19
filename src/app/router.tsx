import { createBrowserRouter, Navigate } from 'react-router'
import { LandingPage } from '@/features/landing/LandingPage'
import { RootLayout } from './RootLayout'
import { ROUTES } from './routes'

/** Legal pages are rarely visited, so they are split out of the main bundle. */
export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: ROUTES.legalNotice,
        lazy: async () => ({ Component: (await import('@/features/legal/LegalNoticePage')).LegalNoticePage }),
      },
      {
        path: ROUTES.privacyPolicy,
        lazy: async () => ({ Component: (await import('@/features/legal/PrivacyPolicyPage')).PrivacyPolicyPage }),
      },
      { path: '*', element: <Navigate to={ROUTES.home} replace /> },
    ],
  },
])
