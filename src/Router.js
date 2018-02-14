import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key={'root'} hideNavBar>
        <Scene key={'auth'}>
          <Scene key={'login'} component={LoginForm} title={'please login'} />
        </Scene>

        <Scene key={'main'}>
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key={'employeeList'}
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene key={'employeeCreate'} component={EmployeeCreate} title={'employee create'} />
          <Scene key={'employeeEdit'} component={EmployeeEdit} title={'employee edit'} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
