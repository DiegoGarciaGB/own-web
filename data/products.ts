import { LayoutTemplate, Zap } from 'lucide-react'

export const sitesFeatures = [
  'Diseño personalizado',
  'Optimización SEO básica',
  'Dominio y hosting incluido',
  'Soporte técnico',
]

export const automationsFeatures = [
  'Auditoría de procesos',
  'Integración de herramientas',
  'Workflows a medida',
  'Mantenimiento mensual',
]

export const productsList = [
  {
    id: 'sites',
    name: 'Launch Sites',
    tagline: 'Tu negocio local, en línea en 7 días.',
    description: 'Landing pages diseñadas para convertir visitas en clientes reales. No solo que se vean bien — que trabajen por ti.',
    icon: LayoutTemplate,
    color: 'amber',
    features: sitesFeatures,
    ctaText: 'Ver planes de Sites',
  },
  {
    id: 'automations',
    name: 'Launch Automations',
    tagline: 'Agenda citas mientras duermes.',
    description: 'Un asistente inteligente que responde, agenda y confirma citas por WhatsApp — sin apps nuevas, sin esfuerzo manual.',
    icon: Zap,
    color: 'green',
    features: automationsFeatures,
    ctaText: 'Ver planes de Automations',
  },
]
