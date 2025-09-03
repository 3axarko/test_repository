import React from 'react';

const RemoteButton = React.lazy(() => import('app2/App'));

const App = () => {
  return (
      <div style = {{
        background: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1>Server</h1>
        <h2>App 1</h2>
        <React.Suspense fallback="Loading Button">
          <RemoteButton>
            Показать HAR app2
          </RemoteButton>
        </React.Suspense>
      </div>
  );
}

export default App;
