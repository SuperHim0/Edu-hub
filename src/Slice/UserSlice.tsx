import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';


interface UserState {
    [key: string]: String;
  }

const getInitialUser = (): UserState => {
//   const token = localStorage.getItem('token');
//   console.log("token userslice ", token);
const token = Cookies.get('token');
  
    try {
      if (token && token.split('.').length === 3) {
        console.log(jwtDecode(token));
        
        return jwtDecode(token);
      }
    } catch (err) {
      console.warn("Invalid token during decode", err);
    }
    return {error : "token is invalid"}; // return empty user if invalid or missing
};



const userSlice = createSlice({
        name : 'user',
        // initialState :localStorage.getItem("token")?jwtDecode(localStorage.getItem('token') || ''):{},
        initialState : getInitialUser(),
        reducers : {
            setUser: (state , action)=>{
                // localStorage.setItem('token',action.payload);
                Cookies.set('token',action.payload,{expires:1 , path:'/'})
                state = action.payload;
                return state;
            },
            removeUser: (state)=>{
                // localStorage.removeItemItem('token',action.payload);
                 Cookies.remove('userData',{path:'/'});
                state = {};
                return state;
            }
        }
})

export const { removeUser ,setUser} = userSlice.actions;
export default userSlice.reducer;