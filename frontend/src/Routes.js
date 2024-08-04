import { BrowserRouter as Router,  Route} from 'react-router-dom';
import RestaurantList from './components/restaurantList';
import RestaurantProfile from './components/restaurantProfile';

export const Routes = () => {
<Router>
    <Route path="/" exact> <RestaurantList />
    </Route>
    <Route path="/restaurants/:id" element={<RestaurantProfile />} />
    </Router>
}