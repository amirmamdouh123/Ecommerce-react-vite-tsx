import ReactDOM from 'react-dom/client'
import { RouterProvider  } from 'react-router-dom';
import route from '@routes/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {store,persistedStore} from '@store/Store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistedStore} >
            <RouterProvider router={route} />
        </PersistGate>
    </Provider>
)
