import { Accordion, Autocomplete, Container, SegmentedControl, Title } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";


const faq = [
  {
    id:1,
    question:"How to join live class?",
    answer:"To access today's classes:\n\n Go to the Study page\n Find the Today's Classes section in the batch list.\n Choose your batch from the list to view the class schedule.\n Happy studying!"
  },
  {
    id: 2,
    question: "How can I purchase a course?",
    answer:
      "To purchase a course:\n\n1. Go to the 'Courses' page.\n2. Browse and select the course you want to enroll in.\n3. Click on 'Buy Now' or 'Enroll'.\n4. Complete the payment using your preferred method.\n\nOnce the payment is successful, the course will be added to your account."
  },
  {
    id: 3,
    question: "What payment methods are accepted?",
    answer:
      "We accept the following payment methods:\n\n- UPI (Google Pay, PhonePe, etc.)\n- Debit/Credit Cards (Visa, MasterCard, Rupay)\n- Net Banking\n- Wallets (Paytm, Amazon Pay)\n\nAll transactions are secured and encrypted for safety."
  },
  {
    id: 4,
    question: "Can I cancel a course after purchasing it?",
    answer:
      "Yes, you can request cancellation within 7 days of purchase **only if you haven't completed more than 10% of the course content**.\n\nTo initiate a cancellation, go to 'My Courses' > Select the course > Click 'Request Cancellation'.\n\nRefunds (if eligible) will be processed within 5-7 business days."
  },
  {
    id: 5,
    question: "How can I join a live class?",
    answer:
      "To access today's live classes:\n\n1. Go to the 'Study' page.\n2. Find the \"Today's Classes\" section.\n3. Choose your batch to view the schedule.\n4. Click on the 'Join Live' button at the scheduled time."
  },
  {
    id: 6,
    question: "Will I get a certificate after completing a course?",
    answer:
      "Yes! Upon successfully completing all modules and assessments in a course, you will receive a certificate of completion.\n\nYou can download it from the 'My Certificates' section in your dashboard."
  }

]

const ContactUs = () => {
const [value, setValue] = useState('Help Center');

  return (
    <div className='flex flex-col gap-12 items-center justify-center ml-90 mr-20 mt-30 mb-5'>
        <div className="flex items-center justify-between rounded-md bg-white border-md w-full h-[80px]"> 
          <SegmentedControl 
            className="ml-4"
            value={value}
            onChange={setValue}
            transitionDuration={500}
            h={60}
            size="lg"
            style={{
              flex:"row",
              justifyContent:"center",
              alignItems:"center",
              background:""
              
            }}
            color="green" data={[
              {label:'Help Center',value:'Help Center'},
              {label:'My Issues',value:'My Issues'},
              {label:'Notice Board',value:'Notice Board'}
            ]} 
          
          />
          <Autocomplete 
          className="mr-4"
            
            
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            data={['what is your number']}
            visibleFrom="xs"
          ></Autocomplete>

        </div>
        { value ==='Help Center' && 

        <div className="flex rounded-md w-full shadow-md bg-white">
            <Container size="sm" className="mt-10 mb-10 flex gap-4 flex-col">
              <Title ta="center" className="">
                Frequently Asked Questions
              </Title>

              {
                faq.map((items,index)=>(
                  
                  <Accordion variant="separated" key={index}>
                <Accordion.Item className="" value="reset-password">
                  <Accordion.Control>{items.question}?</Accordion.Control>
                  <Accordion.Panel>
                    {items.answer.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))  }

                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion> 
                ))
              }
              </Container>
        </div>
          }
          { value === 'My Issues' &&
            <div className="flex rounded-md w-full shadow-md bg-white w-full h-[460px] overflow-hidden  flex-col items-center justify-center">
              <div className="m-8 flex flex-col gap-8">
              <img width={200} src="https://img.icons8.com/external-soft-fill-juicy-fish/60/external-notifications-computer-applications-soft-fill-soft-fill-juicy-fish.png"></img>
              <h1 className="text-xl font-bold text-center">NO DATA FOUND</h1>
              </div>
              
            </div>
          }
          { value === 'Notice Board' &&
            <div className="flex rounded-md w-full shadow-md bg-white w-full h-[460px] overflow-hidden  flex-col items-center justify-center">
              <div className="m-8 flex flex-col gap-8">
              <img width={200} src="https://img.icons8.com/external-soft-fill-juicy-fish/60/external-notifications-computer-applications-soft-fill-soft-fill-juicy-fish.png"></img>
              <h1 className="text-xl font-bold text-center">NO DATA FOUND</h1>
              </div>
              
            </div>

          }
            

    </div>
  )
}

export default ContactUs