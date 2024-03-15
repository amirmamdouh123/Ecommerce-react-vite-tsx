import ReactDOM from 'react-dom/client'
import { RouterProvider  } from 'react-router-dom';
import route from '@routes/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  store from '@store/Store'


ReactDOM.createRoot(document.getElementById('root')!)
.render(
<Provider store={store}>
<RouterProvider router={route} />
</Provider>,
)
