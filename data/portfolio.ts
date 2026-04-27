import type { PortfolioProject } from '@/types'

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'barberia-norte',
    title: 'Barbería del Norte',
    description:
      'Landing de agenda online para barbería en Monterrey. Integración con Calendly y WhatsApp Business.',
    tags: ['landing'],
    results: '+45% reservas online en el primer mes',
  },
  {
    id: 'ferreteria-automation',
    title: 'Ferretería Los Pinos',
    description:
      'Automatización del proceso de cotizaciones: el cliente llena un form y recibe PDF de cotización en minutos.',
    tags: ['automatización'],
    results: '3h diarias recuperadas en trabajo manual',
  },
  {
    id: 'consultora-rdg',
    title: 'RDG Consultoría',
    description:
      'Sitio de captura de leads para consultora fiscal. Conectado a HubSpot y secuencia de email onboarding.',
    tags: ['landing', 'automatización'],
    results: 'Costo por lead reducido 60%',
  },
]
