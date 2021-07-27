import React, { CSSProperties } from 'react';

import InfiniteScrollList from './components/InfiniteScrollList';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : '33px',
  },
};

function App() {
  return (
    <div style={styles.container}>
      <InfiniteScrollList />
    </div>
  );
}

export default App;
