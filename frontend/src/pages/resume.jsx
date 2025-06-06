import React,{ useState } from "react";
import axios from 'axios';


const Resume = () => {
    const [message, setMessage] = useState('');
    const [predictedCategory, setPredictedCategory] = useState('');
    const [recommendedJob, setRecommendedJob] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [extractedSkills, setExtractedSkills] = useState([]);
    const [extractedEducation, setExtractedEducation] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await axios.post('https://jobseeker-gkke.onrender.com/pred', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const data = response.data;
            setPredictedCategory(data.predicted_category);
            setRecommendedJob(data.recommended_job);
            setPhone(data.phone);
            setEmail(data.email);
            setExtractedSkills(data.extracted_skills);
            setExtractedEducation(data.extracted_education);
            setName(data.name);
        } catch (error) {
            setMessage(error.response.data.message || 'An error occurred');
        }
    };


  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
            <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-2xl my-4">
                <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">Resume Screening AI-based System</h1>
                <p className="text-center mb-6 text-lg">This system supports TXT and PDF files. Upload your resume and it will perform the following:</p>
                <ul className="list-disc list-inside mb-6 text-lg">
                    <li>Resume Categorization</li>
                    <li>Resume Job Recommendation</li>
                    <li>Resume Parsing (Information Extraction)</li>
                </ul>
            </div>

            <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-2xl my-4">
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Upload Your Resume</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input type="file" name="resume" accept=".pdf, .txt" required className="mb-6 p-3 border border-gray-300 rounded w-full" />
                    <input type="submit" value="Submit" className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300 text-lg" />
                </form>

                {message && <p className="text-center mt-6 text-red-500">{message}</p>}
                {predictedCategory && (
                    <div className="mt-8 p-6 bg-gray-50 shadow-md rounded-lg">
                        <hr className="my-4" />
                        <p className="text-center text-2xl font-bold text-gray-700 mb-4"><strong>Category:</strong> {predictedCategory}</p>
                        <p className="text-center text-2xl font-bold text-gray-700 mb-4"><strong>Recommended Job:</strong> {recommendedJob}</p>
                        <hr className="my-4" />
                        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Extracted Information</h2>
                        <p className="text-center text-xl mb-4"><strong>Name:</strong> {name}</p>
                        <p className="text-center text-xl mb-4"><strong>Phone No:</strong> {phone}</p>
                        <p className="text-center text-xl mb-4"><strong>Email:</strong> {email}</p>
                        {extractedSkills.length > 0 ? (
                            <>
                                <p className="text-center text-xl font-bold mb-4">Skills:</p>
                                <div className="flex flex-wrap justify-center">
                                    {extractedSkills.map((skill, index) => (
                                        <span key={index} className="m-1 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className="text-center text-xl">No skills found.</p>
                        )}
                        {extractedEducation.length > 0 ? (
                            <>
                                <h2 className="text-2xl font-bold text-center mt-6 mb-4">Education:</h2>
                                <ul className="list-none text-center mb-4">
                                    {extractedEducation.map((edu, index) => (
                                        <li key={index} className="text-lg bg-gray-200 py-2 px-4 rounded mb-2">
                                            {edu}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className="text-center text-xl">No education found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


export default Resume;