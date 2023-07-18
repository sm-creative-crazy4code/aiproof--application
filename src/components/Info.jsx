import React,{useEffect, useState} from 'react'
import { useLazyGetTextVerdictQuery } from '../sevices/text'

const Info = () => {

    const[getTextVerdict,{error,isFetching}] = useLazyGetTextVerdictQuery()

    const[allInputs,setAllInputs]= useState([])

    const [inputText,setInputText] = useState({
        text:"",
        real_probability:0,
        fake_probability:0,


   }) 

   

   useEffect(()=>{

    const inputsFromLocalStorage = JSON.parse(localStorage.getItem('inputs'))
    if(inputsFromLocalStorage){
        setAllInputs(inputsFromLocalStorage)
        console.log(allInputs)

    }

   },[])




const handelSubmit =async (e)=>{
     


    e.preventDefault();

    try {
        const {data} = await getTextVerdict({text:inputText.text});
        setInputText({...inputText,real_probability: (data?.real_probability)*100,fake_probability: (data?.fake_probability)*100});
        if(data?.fake_probability || data?.real_probability){
            const newText= {...inputText,real_probability: (data?.real_probability)*100,fake_probability: (data?.fake_probability)*100}
            const updatedAllText=[newText,...allInputs]
            setInputText(newText)
            setAllInputs( updatedAllText) //
            localStorage.setItem('inputs',JSON.stringify(updatedAllText))


        }

        //console.log(data);
        
    } catch (error) {
        console.log(error);
    }
    
    // setInputText({...inputText,text:""})
}

  return (
<div className='h-full w-full  flex flex-col justify-center items-center'>
        <form className='w-[80%]' onSubmit={handelSubmit}>
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your text</label>
<textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste your text here..." value={inputText.text} onChange={(e)=>setInputText({...inputText,text:e.target.value})}></textarea>

 <button type="submit" className='h-[50px] w-[20%] p-3 bg-blue-900 text-white text-sm text-center mt-5 rounded-md'>
    Submit
 </button>

</form>

<div className='w-[80%] mt-6 flex justify-start items-center'>
   <p className='text-lg text-black font-bold'> Real Probablity: <span className='text-md text-green-600 font-bold'>{isFetching?"Loading..":inputText.real_probability} </span> </p>
   <p className='text-lg text-black font-bold ml-5'> Fake Probablity: <span className='text-md text-red-600 font-bold'>{isFetching?"Loading..":inputText.fake_probability} </span> </p>
</div>



<div className='w-[80%] mt-6 flex justify-start items-center'>
   <p className='text-lg text-black font-bold'> Your recent searches : </p>
   
</div>

      <div className='flex flex-col gap-1 w-full justify-center items-center '>

      
  {allInputs?.map((inp)=>(<div className='w-[80%] h-[50px] p-3 bg-slate-100 text-black truncate mt-2 gap-2' onClick={()=>setInputText(inp)}>
    {inp.text}
    
    </div>))



  }

</div>
    </div>
  )
}

export default Info
