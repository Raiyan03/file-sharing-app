import React, { useState } from 'react';
import GlobalApi from '../../../../utils/GlobalApi'

const FileForm = ({file, savePassword}) => {
    const shortUrl = file?.shortUrl;
    const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const id = file?.id;

    const handlePasswordChange = (event) => {
        setIsPasswordEnabled(event.target.checked);
    };

    const handleSavePassword = () => {
        console.log('Password saved:', password);
        savePassword(password, id);
    };

    const sendEmail = () => {
        const data = {
            emailToSend:email,
            userName: file?.userName,
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            fileUrl: file.fileUrl,
            shortUrl: file.shortUrl
        }
        GlobalApi.SendEmail(data).then(res => {
            console.log(res);
        });
    }

    return (
        <div className="flex flex-col p-4">
            <label className="text-gray-500 text-sm py-1">
                Short Url
            </label>
            <input className="border rounded-md p-1 text-gray-500 mb-4" type="text" readOnly value={shortUrl} />
            <label className="flex items-center mb-4">
                <input type="checkbox" checked={isPasswordEnabled} onChange={handlePasswordChange} className="size-3 rounded border-gray-300 mr-2"/>
                <span className="font-semibold">
                    Enable password?
                </span>
            </label>
                <div className="flex flex-row mb-4 gap-2">
                    <input 
                        className="border rounded-md p-1 h-full text-gray-500 mb-2"
                        type="password" 
                        value={password}
                        readOnly={!isPasswordEnabled}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                    <button className={` text-white rounded-md h-full p-1  transition ${!isPasswordEnabled ? "bg-gray-500" : "bg-primary"}`} disabled={!isPasswordEnabled} onClick={handleSavePassword}>
                        save
                    </button>
                </div>
            <div className="flex flex-col">
                <label className="text-gray-500 text-sm py-1">
                    Send File to Email
                </label>
                <input 
                    className="border rounded-md p-1 text-gray-500 mb-2" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="example@gmail.com"
                />
                <button className="bg-blue-500 text-white rounded-md p-1" onClick={()=>sendEmail()}>
                    Send Email
                </button>
            </div>
        </div>
    )
}

export default FileForm;
