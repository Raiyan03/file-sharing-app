"use client"
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import React, { useEffect, useState } from 'react'
import FileItem from './components/FileItem';
function FileView({params}) {
    const db = getFirestore(app);

    const [fileInfo, setFileInfo] = useState();
    useEffect(() => {
        console.log(params?.id)
        getFileInfo()
    }, []);

    const getFileInfo= async ()=>{
        const docRef = doc(db, "uploadedfile", params?.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            console.log("document data: ", docSnap.data())
            setFileInfo(docSnap.data())
        } else{
            console.log("No such document found")
        }
    }

    return (
        <div className=' flex min-h-screen justify-center items-center'>
            <FileItem file={fileInfo} />
        </div>
    )
}

export default FileView