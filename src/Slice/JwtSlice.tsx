import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialToken = Cookies.get('token') || '';

const jwtSlice = createSlice({
        name : 'jwt',
        // initialState : localStorage.getItem('token')||'',
        initialState : initialToken,
        reducers : {
            setJwt: (state , action)=>{
                const token = action.payload;
                // Set token
                // Cookies.set('token', token, { expires: 1/5, path: '/' });

                // localStorage.setItem('token', token);
                Cookies.set('token',token,{expires:1 , path:'/'})

                // state = action.payload;
                return token;
            },
            removeJwt: (state)=>{
                // localStorage.removeItem('token');
                Cookies.remove('token',{path:'/'});
                state = '';
                return state;
            },
        },
});

export const { setJwt ,removeJwt } = jwtSlice.actions;
export default jwtSlice.reducer;