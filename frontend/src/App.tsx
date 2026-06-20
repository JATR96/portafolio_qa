import AppRouter
  from '@routes/index';

import ScrollToTop
  from '@components/ScrollToTop/ScrollToTop';

const App =
  (): React.JSX.Element => {
    return (
      <>
        <ScrollToTop />

        <AppRouter />
      </>
    );
  };

export default App;