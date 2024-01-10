'use client'
import React, { useState } from 'react'

import CodeDisplay from "./CodeDisplay";
import CodeVerificationForm from "./CodeVerificationForm";
import Link from 'next/link';

export default function CodeHome() {
 const [verificationMessage, setVerificationMessage] = useState("");

 const handleVerification = (message) => {
   setVerificationMessage(message);
 };

 const handleCodeRefresh = () => {
   setVerificationMessage("");
 };

 return (
   <>
     <Link
       href="/"
       className="flex items-center  justify-center mx-auto  px-8 py-2 w-80 text-xl font-medium rounded-xl bg-red-600 hover:bg-red-500 text-white"
     >
       Section 1 (Frontend)
     </Link>
     <div className="flex items-center justify-center  h-screen">
       <div className="border-2 p-8 rounded-xl flex flex-col items-center justify-center gap-8 ">
         <CodeDisplay onCodeRefresh={handleCodeRefresh} />
         <CodeVerificationForm onVerification={handleVerification} />
         {/* {verificationMessage && <p>{verificationMessage}</p>} */}
       </div>
     </div>
   </>
 );
}
