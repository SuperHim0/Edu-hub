
import { useSelector } from "react-redux";
import PaymetService from "../../Services/PaymetService";
import { useLocation } from "react-router-dom";
const OrderSummary = () => {

  const location = useLocation();
  const course = location.state?.course;  

  console.log(course);
  
        const token = useSelector((state : any) => state.jwt);
        const user = useSelector((state : any) => state.user);

  const handlePayment = async () => {
    try {
      const order = await PaymetService(parseInt(course.price)); // Call your service

      const options = {
        key: "rzp_test_4zFqVvM3Ho9nEw",
        amount: order.amount,
        currency: order.currency,
        name: "EduHub",
        description: course.title || "Course Purchase",
        order_id: order.id,

        handler: async function (response: any) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);

          await fetch(`https://videowatcher-dockerapp-latest.onrender.com/subscription/subscribe?userId=${user.userId}&courseId=${course.courseId}`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            if (res.ok) {
              alert("Subscription successful!");
              localStorage.removeItem('courseId');
              window.location.href = '/student';
            } else {
              alert("Subscription failed!");
            }
          });
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Error during payment:", err);
      alert("Payment initiation failed.");
    }
  };

  return (
    <div >
        <div className="ml-90 mr-20 mt-30 mb-5 flex flex-col gap-4 overflow-hidden">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="shadow-xl  bg-gray-100">
              <div className="m-4 flex flex-col gap-8">
                <h1 className="text-xl font-semibold">Item In Cart</h1>
                <div className="flex ">
                  <div>
                  <img width={200} src={course.imagePath} alt="course Image" />
                  </div>
                  <div className="ml-40">
                  <h1 className="text-xl">{course.title}</h1>
                  <p className="text-md text-gray-400">{course.description}</p>
                   <span className="text-xl font-semibold text-green-400">Only ₹{course.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button  onClick={handlePayment} className="px-4 py-2 bg-black text-white rounded-md cursor-pointer">
            Pay Now
          </button>
        </div>
    </div>
  );
};

export default OrderSummary;
