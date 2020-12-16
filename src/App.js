import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/Layout'
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/order/Orders';
import Transactions from './pages/transaction/Transactions';
import Users from './pages/user/Users';
import OrderAdd from './pages/order/OrderAdd';

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/orders/add" component={OrderAdd} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
