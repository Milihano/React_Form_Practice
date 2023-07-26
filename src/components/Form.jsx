// import Labels from '../SharedComponents/Label'
// import Inputs from '../SharedComponents/Input'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {useState} from 'react'


function Form( ) {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [age, setAge] = useState('')
   const [gender, setGender] = useState('')
   const [password, setPassword] = useState('')
   const [showPassword,setShowPassword] = useState(false)

   const toogle = ()=>{
    setShowPassword (!showPassword)
   }

   const handleSubmit= (e)=>{
        e.preventDefault('')
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify
            ({
                name: name,
                email: email,
                age: age,
                gender:gender,
                password:password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    console.log(name,email,age,gender)
    
    return (
        <>
            <body className=''>
                <form onSubmit={handleSubmit} action="" className='border rounded-lg mx-[20%] py-[2rem] px-[4rem] bg-[grey] mt-[10rem]'>
                    <div className="flex flex-col">
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} onChange={(e)=>setName (e.target.value)} className='outline-none' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="text" value={email} onChange={(e)=>setEmail (e.target.value)}  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Age</label>
                        <input type="text" value={age} onChange={(e)=>setAge (e.target.value)}  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Gender</label>
                        <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type={showPassword?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button onClick={toogle}>
                            {showPassword ? <AiFillEye/>  : <AiFillEyeInvisible/>}
                        </button>
                    </div>
                    <div className='justify-center flex'>
                        <button type='submit' className="border px-[4rem] mt-5 text-center bg-grey text-green-400 font-bold">Submit</button>
                    </div>
                </form>
            </body>
        </>
    )

}

export default Form