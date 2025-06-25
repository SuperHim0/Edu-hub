
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdArrowForwardIos } from 'react-icons/md';

const steps = [
  {
    title: "Step 1",
    instruction: "Go to the Course section and click on 'Create Course'."
  },
  {
    title: "Step 2",
    instruction: "Fill in the Course Title and Description, then click Submit."
  },
  {
    title: "Step 3",
    instruction: "Go to the Video section from the dashboard menu."
  },
  {
    title: "Step 4",
    instruction: "Upload the video file along with its title and description."
  },
  {
    title: "Step 5",
    instruction: "Go to 'Connect Video to Course', select the course and video, then click Connect."
  },
];

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto mt-30 mb-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📘 Admin Onboarding Instructions</h1>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex items-start gap-4"
          >
            <div className="text-blue-600 text-xl mt-1">
              <FaRegCircleCheck />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{step.title}</h2>
              <p className="text-gray-700">{step.instruction}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-sm text-gray-500 flex items-center gap-2">
        <MdArrowForwardIos className="text-blue-500" />
        Follow these steps to ensure a smooth setup of your learning content.
      </div>
    </div>
  );
};

export default Dashboard;
