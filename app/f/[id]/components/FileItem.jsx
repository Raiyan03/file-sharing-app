import Image from 'next/image';
import React, { useState } from 'react';

const FileItem = ({ file }) => {
    const pass = file?.password ? true : false;
    const [password, setPassword] = useState('');
    const url = file?.fileUrl;

    const onChange = (e) => {
        setPassword(e.target.value);
    };

    const downLoadFile = () => {
        console.log('Downloading file');
        if (pass) {
            if (password === file.password) {
                window.open(url, '_blank'); // Opens the URL in a new tab
            } else {
                alert('Incorrect password');
            }
        } else {
            console.log('No password needed');
            window.open(url, '_blank'); // Opens the URL in a new tab if no password is needed
        }
    };

    return (
        <div className='flex flex-col gap-5'>
            <Image src="/download.png" width={200} height={100} alt="file" />
            <div>
                <h1 className='text-xl'> {file.fileName} </h1>
                <p className='text-lg text-gray-500' >{file?.fileType}</p>
            </div>
            <div className='flex flex-col text-center'>
                {pass && <p className='text-red-500'>Password protected</p>}
                <input
                    type="password"
                    hidden={!pass}
                    placeholder='Password'
                    className="border rounded-md p-1 text-gray-500 mb-4"
                    value={password}
                    onChange={onChange}
                />
                <button
                    className='bg-primary text-white rounded-lg px-2 py-1 transition active:bg-blue-1000 hover:bg-blue-700'
                    onClick={downLoadFile}
                >
                    View
                </button>
            </div>
        </div>
    );
};

export default FileItem;