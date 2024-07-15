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
                        <div className=' font-ubuntu text-2xl text-white'><Label>EMAIL</Label></div>
                        <div className={`flex-grow relative top-28 border-b-2  text-white bg-black bg-opacity-20 text-2xl font-saira ${emailFocus ? ' -translate-y-28  block' : 'hidden group-hover:animate-glowUp group-hover:block'}  `}>
                            <input className='bg-transparent w-full px-3' onFocus={() => setEmailFocus(true)}></input></div>
                    </div>
                    <div className='px-20 w-full justify-between items-center flex-col group hover:cursor-pointer'>
                        <div className=' font-ubuntu text-2xl text-white'><Label>PASSWORD</Label></div>
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

const Label = ({ Label, setFunction }) => {
    return (
        <div>
            <div className='px-20 w-full justify-between items-center flex my-1 group  hover:cursor-pointer'>
                <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'>
                <label>{Label}</label></div>
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
    const [confirm_password, setConfirm_Password] = useState(" ");
    const [country, setCountry] = useState(" ");
    const [division, setDivision] = useState(" ");
    const [city, setCity] = useState(" ");
    const [street, setStreet] = useState(" ");
    const [postal_code, setPostal_code] = useState(" ");

    const onSubmitRegistraionForm=async e=>{
        e.preventDefault();
        const body ={name,email,password,confirm_password,country,division,city,street,postal_code};
        console.log(body);
        const response = await fetch("http://localhost:5000/api/user/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        });
        const parseRes =await response.json();

        if(response.ok){
            localStorage.setItem('token',parseRes.token);
            setAuth(true);
            window.location="/";
        }
        else{
            console.error("Failed to Registration")
        }
    
    }

    const handleBangladeshi = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        if (selectedCountry === 'BANGLADESH') {
            setIsBangladeshi(2);
        }
        else if (selectedCountry === 'OTHERS') {
            setIsBangladeshi(3);
        }

    }
    return (
        <div className={` h-screen flex justify-center items-center ${isActive ? '' : 'pointer-events-none'}`}>
            <div className=' w-2/3 min-h-96 py-20 absolute flex justify-center bg-white bg-opacity-20 rounded-xl items-center'>
                <form className='w-full' onSubmit={onSubmitRegistraionForm}>
                    <Label Label={"NAME"} setFunction={SetName} />
                    <Label Label={"EMAIL"} setFunction={SetEmail} />
                    <Label Label={"PASSWORD"} setFunction={setPassword} />
                    <Label Label={"CONFIRM PASSWORD"} setFunction={setConfirm_Password} />
                    <div className='px-20 w-full justify-between items-center flex my-1 group  hover:cursor-pointer'>
                        <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'>
                            <label>COUNTRY</label>
                        </div>
                        <div className={`flex-grow relative top-0  group-hover:border-b-2   text-white bg-black bg-opacity-20 text-2xl font-saira   `}>
                            <select className='w-full bg-transparent' onChange={handleBangladeshi}>
                                <option className=' bg-slate-700'>--choose an option</option>
                                <option className=' bg-slate-700'>BANGLADESH</option>
                                <option className=' bg-slate-700'>OTHERS</option>
                            </select>
                        </div>
                    </div>
                    {isBangladeshi ==3  && <Label Label={"COUNTRY"} setFunction={setCountry} />}
                    {isBangladeshi==2 && (<div><div className='px-20 w-full justify-between items-center flex my-1 group  hover:cursor-pointer'>
                        <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'>
                            <label>DIVISION</label>
                        </div>
                        <div className={`flex-grow relative top-0  group-hover:border-b-2   text-white bg-black bg-opacity-20 text-2xl font-saira   `}>
                            <select className='w-full bg-transparent' onChange={(e)=>setDivision(e.target.value)}>
                                <option className=' bg-slate-700'>--choose an option</option>
                                <option className=' bg-slate-700'>DHAKA</option>
                                <option className=' bg-slate-700'>RANGPUR</option>
                                <option className=' bg-slate-700'>CHITTAGONG</option>
                                <option className=' bg-slate-700'>SYLHET</option>
                                <option className=' bg-slate-700'>BARISHAL</option>
                                <option className=' bg-slate-700'>KHULNA</option>
                                <option className=' bg-slate-700'>RAJSHAHI</option>
                                <option className=' bg-slate-700'>MYMENSINGH</option>
                            </select>
                        </div>
                    </div>
                    <Label Label={"CITY"} setFunction={setCity} />
                    <Label Label={"STREET"} setFunction={setStreet} />
                    <Label Label={"POSTAL CODE"} setFunction={setPostal_code} />
                    </div>
                )}
                    <div className='absolute font-ubuntu text-white bottom-10  flex h-10 text-2xl rounded-sm w-full justify-center'>
                        <button type='submit'>REGISTRATION</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const Registration = ({setAuth}) => {
    const [variable, setVariable] = useState(false);

    useEffect(() => {

    }, [variable]);
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