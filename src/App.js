/* eslint-disable no-sequences */
import React,{useState,useEffect} from 'react';
import './App.css';
import DataList from './components/dataList/index'
import axios from 'axios'

const DATA_URL = 'https://symbl-data-api.herokuapp.com/data'
export const DataContext = React.createContext(null);
function App() {
  const initialState = {
    req_hold : true,
    req_pending : false,
    request_success : false
  }
  const [data,setData] = useState([]);
  const [state,setState] = useState(initialState)
  const fetchData = ()=>{
    setState({req_hold : false, req_pending : true,request_success : false})
    axios.get(DATA_URL)
    .then(res => {
      if(res.status === 200){
        setData(res.data)
        setState({req_hold : false, req_pending : false,request_success : true})
      }
      else{
        setState({req_hold : true,req_pending : false,request_success : false})
        throw Error("request failed")
      }
    })
    .catch(err=>{
      setState({req_hold : true,req_pending : false,request_success : false})
      console.log(err);
    })
  }
  return (
    <div className="App">
      <DataContext.Provider value = {{fetchData,data,setState,state}} >
      <DataList/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
