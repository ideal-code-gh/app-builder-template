import App from './components/App.jsx'
import { register } from '@adobe/uix-guest'

register({
  id: 'my-awesome-app'
}).then(App)
