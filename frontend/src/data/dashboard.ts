import type {
  DashboardMetric,
} from '@shared-types/dashboard';

export const dashboardMetrics:
  DashboardMetric[] = [
    {
      id: 'coverage',
      value: 98,
      suffix: '%',
      trend: 'up',
      trendValue: '+12%',
    },

    {
      id: 'testCases',
      value: 1250,
      suffix: '+',
      trend: 'up',
      trendValue: '+18%',
    },

    {
      id: 'passRate',
      value: 99.2,
      suffix: '%',
      decimals: 1,
      trend: 'up',
      trendValue: '+4.5%',
    },

    {
      id: 'executionTime',
      value: 12,
      suffix: ' min',
      trend: 'down',
      trendValue: '-30%',
    },
  ];