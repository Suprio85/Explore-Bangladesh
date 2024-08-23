import React, { useEffect, useState } from 'react';

const url = "https://cdn.pixabay.com/photo/2018/07/15/14/23/bangladesh-3539687_960_720.jpg";
const Login = ({ isActive }) => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    return (
        <div className={` h-screen flex justify-center items-center ${isActive ? '' : 'pointer-events-none'}`}>
            <div className=' w-2/3 min-h-96  absolute flex justify-center bg-white bg-opacity-20 rounded-xl items-center'>
                <form className='w-full'>
                    <div className='px-20 w-full justify-between items-center flex-col group  hover:cursor-pointer'>
                        <div className=' font-ubuntu text-2xl text-white'><lable>EMAIL</lable></div>
                        <div className={`flex-grow relative top-28 border-b-2  text-white bg-black bg-opacity-20 text-2xl font-saira ${emailFocus ? ' -translate-y-28  block' : 'hidden group-hover:animate-glowUp group-hover:block'}  `}>
                            <input className='bg-transparent w-full px-3' onFocus={() => setEmailFocus(true)}></input></div>
                    </div>
                    <div className='px-20 w-full justify-between items-center flex-col group hover:cursor-pointer'>
                        <div className=' font-ubuntu text-2xl text-white'><lable>PASSWORD</lable></div>
                        <div className={`flex-grow relative top-28 border-b-2  text-white bg-black bg-opacity-20 text-2xl font-saira ${passwordFocus ? ' -translate-y-28  block' : 'hidden group-hover:animate-glowUp group-hover:block'}  `}>
                            <input className='bg-transparent w-full px-3' onFocus={() => setPasswordFocus(true)}></input></div>
                    </div>
                    <div className='absolute font-ubuntu text-white bottom-10  flex h-10 text-2xl rounded-sm w-full justify-center'>
                        <button>LOG IN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const Lable = ({ lable, setFunction }) => {
    return (
        <div>
            <div className='px-20 w-full justify-between items-center flex my-1 group  hover:cursor-pointer'>
                <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'><lable>{lable}</lable></div>
                <div className={`flex-grow relative top-0  group-hover:border-b-2   text-white bg-black bg-opacity-20 text-2xl font-saira   `}>
                    <input className='bg-transparent w-full px-3' onChange={(e) => setFunction(e.target.value)}></input></div>
            </div>
        </div>
    )
}
const SignUp = ({ isActive }) => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [isBangladeshi, setIsBangladeshi] = useState(1);

    const [name, SetName] = useState(" ");
    const [email, SetEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [country, setCountry] = useState(" ");

    const handleBangladeshi = (e) => {
        setCountry(e.target.value);
        if (country == 'BANGLADESH') {
            setIsBangladeshi(2);
        }
        if (country == 'OTHERS') {
            setIsBangladeshi(3);
        }

    }
    return (
        <div className={` h-screen flex justify-center items-center ${isActive ? '' : 'pointer-events-none'}`}>
            <div className=' w-2/3 min-h-96 py-20 absolute flex justify-center bg-white bg-opacity-20 rounded-xl items-center'>
                <form className='w-full'>
                    <Lable lable={"NAME"} setFunction={SetName} />
                    <Lable lable={"EMAIL"} setFunction={SetEmail} />
                    <Lable lable={"PASSWORD"} setFunction={setPassword} />
                    <div className='px-20 w-full justify-between items-center flex my-1 group  hover:cursor-pointer'>
                        <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'>
                            <lable>COUNTRY</lable>
                        </div>
                        <div className={`flex-grow relative top-0  group-hover:border-b-2   text-white bg-black bg-opacity-20 text-2xl font-saira   `}>
                            <select className='w-full bg-transparent' onChange={handleBangladeshi}>
                                <option className=' bg-slate-700'>--choose an option</option>
                                <option className=' bg-slate-700'>BANGLADESH</option>
                                <option className=' bg-slate-700'>OTHERS</option>
                            </select>
                        </div>
                    </div>
                    {isBangladeshi ==3  && <Lable lable={"COUNTRY"} setFunction={setCountry} />}
                    {isBangladeshi==2}


                    <div className='absolute font-ubuntu text-white bottom-10  flex h-10 text-2xl rounded-sm w-full justify-center'>
                        <button>REGISTRATION</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const Registration = () => {
    const [variable, setVariable] = useState(false);

    useEffect(() => {

    }, variable);
    return (
        <div className='relative w-full h-screen bg-slate-900'>
            <div className='opacity-30 top-0 '><img src={url} alt="bg" className='w-full h-screen object-cover'></img></div>
            {variable ? (<div>
                <div className='absolute w-2/3  left-0 top-0 animate-_left'>
                    <div className='opacity-30 scale-75 z-0' onClick={() => { setVariable(false) }}><SignUp isActive={false} /></div>
                </div>
                <div className='absolute w-2/3 right-0 top-0 animate-_right '>
                    <div className='z-10'><Login isActive={true} /></div>
                </div>
            </div>)
                : (<div>
                    <div className='absolute w-2/3 right-0 top-0 animate-_left'>
                        <div className='opacity-30 scale-75 z-0' onClick={() => { setVariable(true) }}><Login isActive={false} /></div>
                    </div>
                    <div className='absolute w-2/3 left-0 top-0 animate-_right'>
                        <div className='z-10'><SignUp isActive={true} /></div>
                    </div>
                </div>)
            }
            <div className='absolute bottom-20 font-saira text-white text-xl w-full flex justify-center'>
                <div>Already Have An Account ?
                    <button className=' mx-1 font-ubuntu hover:cursor-pointer' onClick={() => setVariable(true)}>LOG IN</button>
                </div>
            </div>

        </div>
    );
}

export default Registration;