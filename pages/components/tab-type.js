import { useState, useEffect } from "react";


export default function TabType() {
    const [data , setData] = useState({
        word: '',
        meanings: [
        ]
    });
    const handelClick = (business=true) => {
        if(business){
            fetch('api/meaning?query=business')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
        }else{
            fetch('api/meaning?query=personal')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        fetch('api/meaning?query=personal')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, [])
  return (
       <div className="grid grid-cols-12 mt-8 mb-4">
            <div className="col-span-4">
                <button className="w-full max-w-md px-4 mt-2 py-2 bg-[#fa8065] text-black font-bold rounded-t-lg shadow-sm focus:outline-none" onClick={() => handelClick(false)}>
                    Personal
                </button>
            </div>
            <div className="col-span-4">
                <button className="ml-2 w-full max-w-md px-4 mt-2 py-2  border-gray-500 bg-gray-100 text-black font-bold rounded-t-lg shadow-sm focus:outline-black" onClick={() => handelClick(true)}>
                    Business
                </button>
            </div>
            <div className="col-span-12">
                <div className="min-h-[300] border-2 border-gray-5 rounded-b-lg overflow-auto">
                    <div>
                        <h5 className="text-sm ml-1">Word: {data.word}</h5>
                        <h6 className="text-sm ml-1 font-bold">These are the meanings</h6>
                        {data.meanings.length?data.meanings.map((meaning, index) => (
                            <p key={index} className="text-sm ml-1">{meaning.definition}</p>
                        )):null}
                    </div>
                        
                </div>
            </div>
        </div>
  );
}