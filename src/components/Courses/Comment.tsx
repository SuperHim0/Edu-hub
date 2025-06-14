
import { Avatar, Text } from "@mantine/core";
import commentPng from "../../assets/spotlightImg/comment.png";
import { IconBook } from "@tabler/icons-react";

export const Comment = () => {
    const latestComment = [
        {
            id:1,
            name:"himanshu",
            time:"1 hr ago",
            description:"this is awsome course never seen",
            course:"test krolo dosto",
        },
        {
            id:2,
            name:"himanshu",
            time:"1 hr ago",
            description:"this is awsome course never seen",
            course:"test krolo dosto",
        },
        
        
        {
            id:3,
            name:"himanshu",
            time:"1 hr ago",
            description:"In the Edo period, there was a shrdono. Jinta, a young man who acts as the shrine maiden's guardian despite being a stranger, encounters a mysterious demon who speaks of the far future in the forest wher. ",
            course:"test krolo dosto",
        },
        {
            id:3,
            name:"himanshu",
            time:"1 hr ago",
            description:"In the Edo period, there was a shrdono. Jinta, a young man who acts as the shrine maiden's guardian despite being a stranger, encounters a mysterious demon who speaks of the far future in the forest wher. ",
            course:"test krolo dosto",
        },
    ]

  return (
    <section className='text-white w-full  bg-[var(--color-comment)]'
    >
        <div className=" flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold mt-4 uppercase md:mt-0">Top Comments</h1>
            <div className="mt-7 flex flex-row items-start">
                {/* //image */}
                <div className="overflow-hidden hidden 2xl:block">
                    <img src={commentPng} width={340}  className="object-cover  rounded-lg"/>
                </div>
                {/* //commnet  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-5  md:mt-8">
                    {latestComment.map((comment, index) => (
                            <div
                              key={index}
                              className="shadow-xl  mt-4  md:mt-10  flex md:w-[240px] flex-col gap-4 rounded-lg p-4 bg-white/5 backdrop-blur-md text-white"
                            >
                              {/* Avatar */}
                              <div className="flex justify-center md:justify-start items-center gap-4">
                                <Avatar radius="xl" size="md" />
                                <Text className="font-semibold text-lg">{comment.name}</Text>
                              </div>

                              {/* Comment Content */}
                              <div className="flex flex-col gap-2 text-center md:text-left">
                                <span className="text-sm text-gray-200">{comment.description}</span>
                                <span className="text-sm text-green-400 flex items-center justify-center md:justify-start gap-1">
                                  <IconBook size={16} /> {comment.course}
                                </span>
                              </div>
                            </div>
                        ))}


                </div>
            </div>        
        </div>
        
    </section>
  )
}
