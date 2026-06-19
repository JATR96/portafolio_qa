import type {
  DashboardMetric,
} from '@shared-types/dashboard';

export const dashboardMetrics:
  DashboardMetric[] = [
    {
      id: 'coverage',
      value: 98,
      suffix: '%',
    },

    {
      id: 'testCases',
      value: 1250,
      suffix: '+',
    },

    {
      id: 'passRate',
      value: 99.2,
      suffix: '%',
      decimals: 1,
    },

    {
      id: 'executionTime',
      value: 12,
      suffix: ' min',
    },
  ];