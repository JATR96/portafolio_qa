import AppRouter
  from '@routes/index';

import ScrollToTop
  from '@components/ScrollToTop/ScrollToTop';

import BackToTop
  from '@components/BackToTop/BackToTop';

const App =
  (): React.JSX.Element => {
    return (
      <>
        <ScrollToTop />

        <AppRouter />

        <BackToTop />
      </>
    );
  };

export default App;