import React from 'react'
import CustomListDropDown from './component/CustomListDropDown'
import CustomListDropDown2 from './component/CustomListDropDown2'
import 'bootstrap/dist/css/bootstrap.min.css'
import RoundTripSelect from './component/RoundTripSelect';
import AppNavbar from './component/AppNavbar';

export default function App() {
  return (
    <>
      <AppNavbar />
      <CustomListDropDown />
      <CustomListDropDown2 />
      <RoundTripSelect />
    </>
  )
}