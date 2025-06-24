
import { Viewer, Worker } from '@react-pdf-viewer/core';
import pdf from '../../assets/resume_himanshu.pdf';
import { useState } from "react";

const Library = () => {
  const books = [
    {
      name:"book",
      description:"this is description",
      url:"",
      aurthor:"Dr. rohan Singh",
      publishDate:"21-04-2021",
      totalPages:"200",
    },
  ]
  const [pdfViewer,setPdfViewer] = useState(false);

  return (
    <div className='flex mt-30 ml-4 md:ml-70 mr-4 md:mr-20 mb-5 flex-col gap-4'>
      <div className='flex flex-col gap-2 '>
        <h1 className='text-2xl font-bold'>Library</h1>
        <span className='text-md text-gray-400'>Clik to View Pdf</span>
      </div>
        <div className=" w-full">
            { !pdfViewer &&
              <div className="m-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 ">
                {
                  books && books.map((items)=>(
                    <div className="m-2 bg-gray-100 rounded-xl shadow-md pointer-cursor overflow-hidden" onClick={()=> setPdfViewer(true)}>
                       <div className="m-4 flex flex-col">
                          <h1 className='capatlize'>title : {items.name}</h1>
                          <p className='text-md text-gray-400'>{items.description.substring(0,20)+"..."}</p>
                          <div className='flex flex-col gap-2 '>
                          <span className='text-sm '>Author : {items.aurthor}</span>
                          <span className='text-sm '>publish : {items.publishDate}</span>
                          <span>Toatl Page : {items.totalPages}</span>
                          </div>
                          <></>
                       </div>
                    </div>
                  ))  
                }
            </div>
                }
        </div>
                { pdfViewer &&
                  <div className="flex flex-col">
                    <div className="flex justify-end">
                      <button className="px-8 py-2 rounded bg-black text-white" onClick={()=>setPdfViewer(false)}>X</button>
                    </div>
                    <div className="flex items-center justify-center w-full ">
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div className="w-[680px] h-[90vh] border border-gray-300 overflow-auto ">
                          <Viewer fileUrl={pdf} />
                        </div>
                      </Worker>
                    </div>
                  </div>
                }
    </div>
  )
}

export default Library