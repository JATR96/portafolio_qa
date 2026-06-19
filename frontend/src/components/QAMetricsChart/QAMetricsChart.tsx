import {
  coverageTrend,
} from '@data/dashboardChart';

import styles
  from './QAMetricsChart.module.scss';

const QAMetricsChart =
  (): React.JSX.Element => {
    const maxValue = 100;

    return (
      <div
        className={styles.chart}
      >
        {coverageTrend.map(
          (point) => (
            <div
              key={point.month}
              className={
                styles.column
              }
            >
              <div
                className={
                  styles.bar
                }
                style={{
                  height: `${
                    (point.coverage /
                      maxValue) *
                    100
                  }%`,
                }}
              />

              <span>
                {point.month}
              </span>
            </div>
          ),
        )}
      </div>
    );
  };

export default QAMetricsChart;