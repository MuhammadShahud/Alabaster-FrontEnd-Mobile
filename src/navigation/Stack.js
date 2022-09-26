import React, {useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import BottomTabs from './BottomTab';
import Location from '../screens/Location';
import ChangePassword from '../screens/ChangePassword';
import LocationInfo from '../screens/Location/LocationInfo';
import LocationInstructions from '../screens/Location/LocationInstructions';
import LocationInventory from '../screens/Location/LocationInventory';
import LocationMessages from '../screens/Location/LocationMessages';
import CheckList from '../screens/CheckList/CheckList';
import CheckListReport from '../screens/CheckList/CheckListReport';
import AddCheckList from '../screens/CheckList/AddCheckList';
import WeeklyInspection from '../screens/WeeklyInspection/WeeklyInspection';
import WeeklyInspectionDetail from '../screens/WeeklyInspection/WeeklyInspectionDetail';
import CheckListReportDetail from '../screens/CheckList/CheckListReoprtDetail';
import LocationInstructionsAddItem from '../screens/Location/LocationInstructionsAddItem';
import JobDetails from '../screens/Customers/JobDetails';
import JobDetailsView from '../screens/Customers/JobDetailsView';
import AddJobDetails from '../screens/Customers/AddJobDetails';
import CreateCustomer from '../screens/Customers/CreateCustomer';
import CreateCustomerView from '../screens/Customers/CreateCustomerView';
import AddCustomer from '../screens/Customers/AddCustomer';

const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name='BottomTabs' component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name='Location' component={Location} options={{ headerShown: false }} />
      <Stack.Screen name='LocationInfo' component={LocationInfo} options={{ headerShown: false }} />
      <Stack.Screen name='LocationInstructions' component={LocationInstructions} options={{ headerShown: false }} />
      <Stack.Screen name='LocationInstructionsAddItem' component={LocationInstructionsAddItem} options={{ headerShown: false }} />
      <Stack.Screen name='LocationInventory' component={LocationInventory} options={{ headerShown: false }} />
      <Stack.Screen name='LocationMessages' component={LocationMessages} options={{ headerShown: false }} />
      <Stack.Screen name='CheckList' component={CheckList} options={{ headerShown: false }} />
      <Stack.Screen name='AddCheckList' component={AddCheckList} options={{ headerShown: false }} />
      <Stack.Screen name='CheckListReport' component={CheckListReport} options={{ headerShown: false }} />
      <Stack.Screen name='CheckListReportDetail' component={CheckListReportDetail} options={{ headerShown: false }} />
      <Stack.Screen name='WeeklyInspection' component={WeeklyInspection} options={{ headerShown: false }} />
      <Stack.Screen name='WeeklyInspectionDetail' component={WeeklyInspectionDetail} options={{ headerShown: false }} />
      <Stack.Screen name='JobDetails' component={JobDetails} options={{ headerShown: false }} />
      <Stack.Screen name='JobDetailsView' component={JobDetailsView} options={{ headerShown: false }} />
      <Stack.Screen name='AddJobDetails' component={AddJobDetails} options={{ headerShown: false }} />
      <Stack.Screen name='CreateCustomer' component={CreateCustomer} options={{ headerShown: false }} />
      <Stack.Screen name='CreateCustomerView' component={CreateCustomerView} options={{ headerShown: false }} />
      <Stack.Screen name='AddCustomer' component={AddCustomer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MyStack;