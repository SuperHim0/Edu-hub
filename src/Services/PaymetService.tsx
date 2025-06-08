
import axoisIntstance from '../Interceptor/AxoisInterceptor'


//
const PaymetService = async (amount:any)=> {
  console.log(amount);
  
  return axoisIntstance.post(`/api/payment/create-order?amount=${amount}&currency=INR`)
  .then((response:any)=>{
    console.log("paymet response",response);
    return response.data
    
  }).catch((err:any)=>{throw err})
}



export default PaymetService