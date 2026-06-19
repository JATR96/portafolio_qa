export interface DashboardMetric {
  id: string;
  value: number;
  suffix?: string;
  decimals?: number;
  trend: 'up' | 'down';
  trendValue: string;
}