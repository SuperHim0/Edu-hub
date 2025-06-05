import { NavLink } from "react-router-dom"


const MyCourses = () => {
    const quickLinks = [
        {
            images:"https://img.icons8.com/bubbles/50/book.png",
            name:"My Courses",
            url:"mycourse",
            description:"View List of Course you Purchased"
        },
        {
            images:"https://img.icons8.com/color/48/order-history.png",
            name:"My History",
            url:"myhistory",
            description:"View Your recent learning here"
        },
        {
            images:"https://img.icons8.com/color/48/why-quest.png",
            name:"My Doubts",
            url:"mydoubts",
            description:"View the list of questions you ask to the lectures"
        },
        {
            images:"https://img.icons8.com/ios/50/control-panel--v2.png",
            name:"My Dahsboard",
            url:"mydashboard",
            description:"Track Your Progress"
        },
        {
            images:"https://img.icons8.com/fluency/48/bookmark.png",
            name:"Bookmarks",
            url:"mybookmarks",
            description:"View List of Your saved Courses"
        },
    ]
  return (
    <div className="mt-10 ml-20 mr-20 flex flex-col">
        <div className="shadow-md w-full ">
            <div className="m-6 flex flex-col gap-3 overflow-hidden">
                <h1 className="text-2xl font-semibold">Quick Access</h1>
                <div className="grid grid-cols-3 gap-8">
                    {
                        quickLinks.map((quick)=>{
                            return <NavLink key={quick.url} to={quick.url} className="
                            border border-gray-200 rounded-lg flex flex-col m-2">
                                <div className="m-4 flex flex-col gap-2">
                                <img src={quick.images} width={40} height={40}/>
                                <span className="text-lg font-semibold" >{quick.name}</span>
                                <span className="text-gray-400">{quick.description}</span>
                                </div>
                            </NavLink>
                        })
                    }
                </div>
            </div>
            

        </div>
        <div className="mt-10">
            <h1 className="text-4xl font-semibold text-gray-500">Padhlo chahe kahi se Manzil milegi yahi se!</h1>

        </div>
    </div>
  )
}

export default MyCourses