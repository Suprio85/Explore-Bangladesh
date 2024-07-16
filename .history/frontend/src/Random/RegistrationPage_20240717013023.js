import React, { useEffect, useState } from 'react';

const url = "https://cdn.pixabay.com/photo/2018/07/15/14/23/bangladesh-3539687_960_720.jpg";

const Login = ({ isActive, setAuth }) => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [email, setEmail] = useState(""); // Changed: initialized with an empty string instead of a space
    const [password, setPassword] = useState(""); // Changed: initialized with an empty string instead of a space
    
    const onSubmitLogin = async e => {
        e.preventDefault();
        const body = { email, password };
        console.log("MIM" + body.email + body.password); // Changed: updated console log message
        const response = await fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        const parseRes = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', parseRes.token);
            setAuth(true);
            window.location = "/dashboard";
            console.log("log In Suc");
        } else {
            console.log(response);
            console.error("Failed to Login");
        }
    };

    return (
        <div className={`h-screen flex justify-center items-center ${isActive ? '' : 'pointer-events-none'}`}>
            <div className='w-2/3 min-h-96 absolute flex justify-center bg-white bg-opacity-20 rounded-xl items-center'>
                <form className='w-full' onSubmit={onSubmitLogin}>
                    <div className='px-20 w-full justify-between items-center flex-col group hover:cursor-pointer'>
                        <div className='font-ubuntu text-2xl text-white'><label>EMAIL</label></div>
                        <div className={`flex-grow relative top-28 border-b-2 text-white bg-black bg-opacity-20 text-2xl font-saira ${emailFocus ? ' -translate-y-28 block' : 'hidden group-hover:animate-glowUp group-hover:block'}`}>
                            <input
                                type="email" // Changed: added type="email"
                                className='bg-transparent w-full px-3'
                                onFocus={() => setEmailFocus(true)}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='px-20 w-full justify-between items-center flex-col group hover:cursor-pointer'>
                        <div className='font-ubuntu text-2xl text-white'><label>PASSWORD</label></div>
                        <div className={`flex-grow relative top-28 border-b-2 text-white bg-black bg-opacity-20 text-2xl font-saira ${passwordFocus ? ' -translate-y-28 block' : 'hidden group-hover:animate-glowUp group-hover:block'}`}>
                            <input
                                type="password" // Changed: added type="password"
                                className='bg-transparent w-full px-3'
                                onFocus={() => setPasswordFocus(true)}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='absolute font-ubuntu text-white bottom-10 flex h-10 text-2xl rounded-sm w-full justify-center'>
                        <button type="submit">LOG IN</button> {/* Changed: added type="submit" */}
                    </div>
                </form>
            </div>
        </div>
    );
};

const Label = ({ Label, setFunction, type = "text" }) => { // Changed: added type prop with default value "text"
    return (
        <div>
            <div className='px-20 w-full justify-between items-center flex my-1 group hover:cursor-pointer'>
                <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'>
                    <label>{Label}</label></div>
                <div className={`flex-grow relative top-0 group-hover:border-b-2 text-white bg-black bg-opacity-20 text-2xl font-saira`}>
                    <input
                        type={type} // Changed: added dynamic type based on prop
                        className='bg-transparent w-full px-3'
                        onChange={(e) => setFunction(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

const SignUp = ({ isActive, setAuth }) => {
    const [isBangladeshi, setIsBangladeshi] = useState(1);
    const [name, setName] = useState(""); // Changed: initialized with an empty string instead of a space
    const [email, setEmail] = useState(""); // Changed: initialized with an empty string instead of a space
    const [password, setPassword] = useState(""); // Changed: initialized with an empty string instead of a space
    const [confirmPassword, setConfirmPassword] = useState(""); // Changed: renamed variable for better readability
    const [country, setCountry] = useState(""); // Changed: initialized with an empty string instead of a space
    const [division, setDivision] = useState(""); // Changed: initialized with an empty string instead of a space
    const [city, setCity] = useState(""); // Changed: initialized with an empty string instead of a space
    const [street, setStreet] = useState(""); // Changed: initialized with an empty string instead of a space
    const [postalCode, setPostalCode] = useState(""); // Changed: renamed variable for better readability

    const onSubmitRegistrationForm = async e => {
        e.preventDefault();
        const body = { name, email, password, confirmPassword, country, division, city, street, postalCode }; // Changed: updated variable names for better readability
        console.log(body);
        const response = await fetch("http://localhost:5000/api/user", {
            method: "POST",
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        const parseRes = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', parseRes.token);
            setAuth(true);
            console.log("Registration Successful"); // Changed: updated console log message
            window.location = "/";
        } else {
            console.log(response);
            console.error("Failed to Register");
        }
    };

    const handleBangladeshi = (e) => { // Changed: renamed function for better readability
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        setIsBangladeshi(selectedCountry === 'BANGLADESH' ? 2 : 3); // Changed: simplified logic
    };

    return (
        <div className={`h-screen flex justify-center items-center ${isActive ? '' : 'pointer-events-none'}`}>
            <div className='w-2/3 min-h-96 py-20 absolute flex justify-center bg-white bg-opacity-20 rounded-xl items-center'>
                <form className='w-full' onSubmit={onSubmitRegistrationForm}>
                    <Label Label={"NAME"} setFunction={setName} />
                    <Label Label={"EMAIL"} setFunction={setEmail} type="email" /> {/* Changed: added type="email" */}
                    <Label Label={"PASSWORD"} setFunction={setPassword} type="password" /> {/* Changed: added type="password" */}
                    <Label Label={"CONFIRM PASSWORD"} setFunction={setConfirmPassword} type="password" /> {/* Changed: added type="password" */}
                    <div className='px-20 w-full justify-between items-center flex my-1 group hover:cursor-pointer'>
                        <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'>
                            <label>COUNTRY</label>
                        </div>
                        <div className='flex-grow relative top-0 group-hover:border-b-2 text-white bg-black bg-opacity-20 text-2xl font-saira'>
                            <select className='w-full bg-transparent' onChange={handleBangladeshi}> {/* Changed: updated onChange handler */}
                                <option className='bg-slate-700'>--choose an option</option>
                                <option className='bg-slate-700'>BANGLADESH</option>
                                <option className='bg-slate-700'>OTHERS</option>
                            </select>
                        </div>
                    </div>
                    {isBangladeshi === 3 && <Label Label={"COUNTRY"} setFunction={setCountry} />} {/* Changed: corrected comparison operator and dynamic label */}
                    {isBangladeshi === 2 && (
                        <div>
                            <div className='px-20 w-full justify-between items-center flex my-1 group hover:cursor-pointer'>
                                <div className='w-1/3 font-ubuntu text-xl text-white opacity-30 group-hover:opacity-100 mr-1'>
                                    <label>DIVISION</label>
                                </div>
                                <div className='flex-grow relative top-0 group-hover:border-b-2 text-white bg-black bg-opacity-20 text-2xl font-saira'>
                                    <select className='w-full bg-transparent' onChange={(e) => setDivision(e.target.value)}>
                                        <option className='bg-slate-700'>--choose an option</option>
                                        <option className='bg-slate-700'>DHAKA</option>
                                        <option className='bg-slate-700'>RANGPUR</option>
                                        <option className='bg-slate-700'>CHITTAGONG</option>
                                        <option className='bg-slate-700'>SYLHET</option>
                                        <option className='bg-slate-700'>BARISHAL</option>
                                        <option className='bg-slate-700'>KHULNA</option>
                                        <option className='bg-slate-700'>RAJSHAHI</option>
                                        <option className='bg-slate-700'>MYMENSINGH</option>
                                    </select>
                                </div>
                            </div>
                            <Label Label={"CITY"} setFunction={setCity} />
                            <Label Label={"STREET"} setFunction={setStreet} />
                            <Label Label={"POSTAL CODE"} setFunction={setPostalCode} />
                        </div>
                    )}
                    <div className='absolute font-ubuntu text-white bottom-10 flex h-10 text-2xl rounded-sm w-full justify-center'>
                        <button type="submit">REGISTRATION</button> {/* Changed: added type="submit" */}
                    </div>
                </form>
            </div>
        </div>
    );
};

const Registration = ({ isActive, setAuth }) => {
    const [variable, setVariable] = useState(false);

    useEffect(() => {}, [variable]);

    return (
        <div className='relative w-full h-screen bg-slate-900'>
            <div className='opacity-30 top-0'>
                <img src={url} alt="bg" className='w-full h-screen object-cover'></img>
            </div>
            {variable ? (
                <div>
                    <div className='absolute w-2/3 left-0 top-0 animate-_left'>
                        <div className='opacity-30 scale-75 z-0' onClick={() => { setVariable(false) }}>
                            <SignUp isActive={false} />
                        </div>
                    </div>
                    <div className='absolute w-2/3 right-0 top-0 animate-_right'>
                        <div className='z-10'>
                            <Login isActive={true} setAuth={setAuth} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='absolute w-2/3 right-0 top-0 animate-_left'>
                        <div className='opacity-30 scale-75 z-0' onClick={() => { setVariable(true) }}>
                            <Login isActive={false} />
                        </div>
                    </div>
                    <div className='absolute w-2/3 left-0 top-0 animate-_right'>
                        <div className='z-10'>
                            <SignUp isActive={true} setAuth={setAuth} />
                        </div>
                    </div>
                </div>
            )}
            <div className='absolute bottom-20 font-saira text-white text-xl w-full flex justify-center'>
                <div>Already Have An Account ?
                    <button className='mx-1 font-ubuntu hover:cursor-pointer' onClick={() => setVariable(true)}>LOG IN</button>
                </div>
            </div>
        </div>
    );
}

export default Registration;
