import React, { Suspense } from 'react';
import moment from 'moment';
import PageLoading from './components/PageLoading';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
export default ({ loading }: { loading: boolean }) => {
  // mock data
  const visitData: any[] = [];
  const beginDay = new Date().getTime();

  const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
  for (let i = 0; i < fakeY.length; i += 1) {
    visitData.push({
      x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
        'YYYY-MM-DD',
      ),
      y: fakeY[i],
    });
  }
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <IntroduceRow loading={loading} visitData={visitData} />
      </Suspense>
    </>
  );
};
