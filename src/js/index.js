import 'style';

import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';


import reducer from 'reducers/reducers';
import App from 'components/app';

let store = false;

const appElem = document.getElementById('App');


// Enable dev tools in development mode
// this will be discarded by uglify in prod build
let devToolsComponent = false;
if(__DEV__) {
    // Use requires here because imports need to be at top level
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    const { devTools, persistState } = require('redux-devtools');

    store = compose(
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)(reducer);

    devToolsComponent = (
        <DebugPanel top right bottom key="debugPanel">
          <DevTools store={store} monitor={LogMonitor}/>
        </DebugPanel>
    );
} else {
    store = createStore(reducer);
}

React.render(
    <div>
        <Provider store={store}>
            {() => <App/>}
        </Provider>
        {devToolsComponent}
    </div>,
    appElem
);


