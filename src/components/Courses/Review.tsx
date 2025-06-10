import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";





const reviews = [
  {
    name: " Amit Sharma,",
    text: "This course made learning Python super easy. I came in with zero experience and left confidently building my own mini projects. The instructor explained concepts clearly and the pace was just right",
    bgColor: "bg-green-100",
  },
  {
    name: "Sneha Verm",
    text: "The React course is packed with real-world examples and hands-on projects. However, the doubt-solving support could be quicker. Still, I learned a lot and would recommend it!",
    bgColor: "bg-red-50",
  },
  {
    name: "Rahul Mehta",
    text: "hanks to this full-stack course, I cracked an interview and got hired as a junior developer. The resume tips and mock interviews were a huge bonus",
    bgColor: "bg-blue-50",
  },
  {
    name: "Divya Mehta",
    text: "The course covers everything from basics to advanced topics. Quizzes and assignments helped reinforce learning. A few more live sessions would make it perfect",
    bgColor: "bg-green-50",
  },
  // Add more reviews as needed
];

export default function Review() {
  return (
    <section className="py-10 px-4 md:px-20 text-center">
      <p className="text-gray-400 font-medium">Our Students Love Our Courses</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
        What our <span className="text-primary">Students have 🧑🏽</span> to say about us
      </h2>

      <div className="mt-3 flex justify-center">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" className="w-5 h-5" />
          Google reviews ★★★★★
        </button>
      </div>

      <div className="mt-10 max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={`p-6 rounded-2xl ${review.bgColor} text-left h-full`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                    “
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">{review.name}</h3>
                </div>
                <p className="mt-4 text-gray-600">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
