import type { Trade } from '../../types';

export const TRADES_DATA: Trade[] = [
  {
    id: 'a0000000-0000-0000-0000-000000000001',
    name: 'ICTSM (Information & Communication Technology System Maintenance)',
    slug: 'ictsm',
    code: 'ICTSM-01',
    description: 'Specialized 2-year CTS vocational engineering trade covering PC hardware diagnostics, structured network cabling, Linux/Windows server administration, fiber optic splicing, and cloud virtualization.',
    duration_years: 2,
    icon: 'cpu',
    is_active: true,
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'a0000000-0000-0000-0000-000000000002',
    name: 'Electrician',
    slug: 'electrician',
    code: 'ELEC-02',
    description: 'Comprehensive electrical engineering fundamentals, domestic and industrial power distribution wiring, three-phase motors, transformers, and renewable solar installations.',
    duration_years: 2,
    icon: 'zap',
    is_active: true,
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'a0000000-0000-0000-0000-000000000003',
    name: 'Fitter',
    slug: 'fitter',
    code: 'FIT-03',
    description: 'Mechanical engineering benchwork, precision filing, lathe machinery operations, drilling, milling, pipe fitting, and industrial machinery maintenance.',
    duration_years: 2,
    icon: 'wrench',
    is_active: true,
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'a0000000-0000-0000-0000-000000000004',
    name: 'COPA (Computer Operator & Programming Assistant)',
    slug: 'copa',
    code: 'COPA-04',
    description: '1-year course covering computer fundamentals, office productivity suites, database management with SQL, web authoring (HTML/CSS/JS), Python programming, and cyber security basics.',
    duration_years: 1,
    icon: 'terminal',
    is_active: true,
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
];

export function getAllTrades(): Trade[] {
  return TRADES_DATA;
}

export function getActiveTrades(): Trade[] {
  return TRADES_DATA.filter((trade) => trade.is_active);
}

export function getTradeBySlug(slug: string): Trade | undefined {
  return TRADES_DATA.find((trade) => trade.slug.toLowerCase() === slug.toLowerCase());
}

export function getTradeById(id: string): Trade | undefined {
  return TRADES_DATA.find((trade) => trade.id === id);
}
