"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { Divide, Heading1, User } from 'lucide-react'
import Image from 'next/image'
import React, { use, useState, useEffect } from 'react'
import { getFirestore, getDoc, getDocs, doc, updateDoc, query, collection, where } from 'firebase/firestore';
import FileView from './components/FileView'

import app from '../../../../firebaseConfig'

const Files = () => {
  const db = getFirestore(app);
  const [files, setFileInfo ] = useState();
  const { user } = useUser();
  const Useremail = user?.primaryEmailAddress.emailAddress;
  
  useEffect(() => {
    Useremail ? getFiles(Useremail) : null;
  }, [Useremail]);


  const getFiles = async (email) => {
    const filesRef = collection(db, "uploadedfile"); // Reference to the 'uploadedfile' collection
    const q = query(filesRef, where("userEmail", "==", email)); // Create a query against the collection

    try {
        const querySnapshot = await getDocs(q); // Get the documents based on the query
        const files = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data() // Each document's data
        }));

        setFileInfo(files);
    } catch (error) {
        return []; // Handle the error case by returning an empty array or appropriate error handling
    }
  }
  return (

    files ? 
      <div className=' md:flex md:flex-wrap'>
        {files.map((file) => (
          <FileView key={file.id} file={file.data} />
        ))}
      </div>
    :
      <div className=' flex flex-col h-full justify-center items-center' >
        <Image src='/empty.png' width={300} height={100} alt='file' />
          <div className=' text-center '>
            <h1> No files uploaded yet </h1>
            <p className='text-gray-500'> Upload your first file to get started </p>
          </div>
      </div>
  )
}

export default Files;