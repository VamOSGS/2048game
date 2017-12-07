import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import '../style/main.less';

render(App);
if (module.hot) {
    module.hot.accept();
    const NewApp = require('./components/App').default;
    render(NewApp);
}

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root'));
}

