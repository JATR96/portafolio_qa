import AppRouter
  from '@routes/index';

import SkipLink
  from '@components/SkipLink/SkipLink';

import ScrollToTop
  from '@components/ScrollToTop/ScrollToTop';

import BackToTop
  from '@components/BackToTop/BackToTop';

const App =
  (): React.JSX.Element => {
    return (
      <>
        <SkipLink />

        <ScrollToTop />

        <AppRouter />

        <BackToTop />
      </>
    );
  };

export default App;