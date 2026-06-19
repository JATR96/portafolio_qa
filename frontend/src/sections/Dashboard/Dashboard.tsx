import { useTranslation }
  from 'react-i18next';

import {
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
  
import {
  dashboardMetrics,
} from '@data/dashboard';

import AnimatedCounter
  from '@components/AnimatedCounter/AnimatedCounter';

import QAMetricsChart
  from '@components/QAMetricsChart/QAMetricsChart';  

import styles
  from './Dashboard.module.scss';

const Dashboard =
  (): React.JSX.Element => {
    const { t } =
      useTranslation(
        'dashboard',
      );

    return (
      <section
        id="dashboard"
        className={
          styles.dashboard
        }
      >
        <div
          className={
            styles.container
          }
        >
          <h2
            className={
              styles.title
            }
          >
            {t(
              'section.title',
            )}
          </h2>

          <p
            className={
              styles.description
            }
          >
            {t(
              'section.description',
            )}
          </p>

          <div
            className={
              styles.grid
            }
          >
            {dashboardMetrics.map(
              (
                metric,
              ) => (
                <article
                  key={
                    metric.id
                  }
                  className={
                    styles.card
                  }
                >
                  <span
                    className={styles.value}
                  >
                    <AnimatedCounter
                      end={metric.value}
                      suffix={
                        metric.suffix
                      }
                      decimals={
                        metric.decimals
                      }
                    />
                  </span>

                  <h3
                    className={
                      styles.label
                    }
                  >
                    {t(
                      `metrics.${metric.id}.label`,
                    )}
                  </h3>
                  <div className={styles.analytics}>
                    <span
                      className={
                        metric.trend === 'up'
                          ? styles.positive
                          : styles.negative
                      }
                    >
                      {metric.trend === 'up' ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}

                      {metric.trendValue}
                    </span>

                    <small>
                      {t(
                        `analytics.${metric.id}`,
                      )}
                    </small>
                  </div>
                </article>
              ),
            )}
          </div>
          <div className={styles.chartSection}>
            <h3>
              {t(
                'chart.title',
              )}
            </h3>

            <QAMetricsChart />
          </div>
        </div>
      </section>
    );
  };

export default Dashboard;