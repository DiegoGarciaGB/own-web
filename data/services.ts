import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'landing-pages',
    icon: 'LayoutTemplate',
    title: 'Landing Pages',
    description:
      'Páginas diseñadas para convertir visitantes en clientes. Rápidas, responsivas y optimizadas para SEO.',
    features: [
      'Diseño mobile-first',
      'SEO técnico básico',
      'Formulario de contacto integrado',
      'Analytics configurado',
      '1 ronda de revisiones',
    ],
    highlight: true,
  },
  {
    id: 'automatizaciones',
    icon: 'Zap',
    title: 'Automatizaciones',
    description:
      'Flujos automáticos que hacen el trabajo repetitivo por ti: emails, notificaciones, sincronización de datos.',
    features: [
      'Diagnóstico de procesos',
      'Integración con tus herramientas actuales',
      'Flows con Make / Zapier / n8n',
      'Documentación incluida',
      'Soporte 30 días',
    ],
  },
  {
    id: 'consultoria',
    icon: 'Lightbulb',
    title: 'Consultoría Digital',
    description:
      'Sesiones enfocadas para definir tu estrategia digital, elegir herramientas y priorizar lo que importa.',
    features: [
      'Sesión de diagnóstico 1:1',
      'Roadmap digitalización',
      'Selección de stack de herramientas',
      'Plan de acción 90 días',
    ],
  },
]
