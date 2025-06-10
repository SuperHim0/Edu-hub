import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialToken = Cookies.get('token') || '';

const jwtSlice = createSlice({
        name : 'jwt',
        initialState : initialToken,
        reducers : {
            setJwt: (state , action)=>{
                const token = action.payload;
                Cookies.set('token',token,{expires:1 , path:'/'})
                console.log(state);
                
                return token;
            },
            removeJwt: (state)=>{
                Cookies.remove('token',{path:'/'});
                state = '';
                return state;
            },
        },
});

export const { setJwt ,removeJwt } = jwtSlice.actions;
export default jwtSlice.reducer;