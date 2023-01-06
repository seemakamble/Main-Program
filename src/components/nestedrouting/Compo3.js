import React from 'react'
import {useContext} from 'react';
import {UserContext} from './NestedForm';

function Compo3(){
  const value=useContext(UserContext);
  return(
    <div>
      <h3>{val}</h3>
  <h3>Iam the component three </h3>
    </div>
  );
}
export default Compo3