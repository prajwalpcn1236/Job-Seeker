import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Schedule() {
    const [users] = useState(['Ajay', 'Akshay', 'Devanshee','Dhruvi']);
    const [companies] = useState(['Uber', 'PhonePe', 'Google','Microsoft']);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [interviews, setInterviews] = useState([]);
  
    const handleSchedule = () => {
      const newInterview = { userId: selectedUser, companyId: selectedCompany, date: startDate };
      const updatedInterviews = [...interviews, newInterview];
      const optimizedInterviews = optimizeSchedule(updatedInterviews);
      setInterviews(optimizedInterviews);
      setStartDate(getNextAvailableSlot(optimizedInterviews, new Date(startDate)));
    };
  
    const optimizeSchedule = (interviews) => {
      // Sort the interviews by start time
      interviews.sort((a, b) => new Date(a.date) - new Date(b.date));
      return interviews;
    };
  
    const getNextAvailableSlot = (interviews, selectedDate) => {
      const oneHour = 60 * 60 * 1000;
      let nextAvailable = new Date(selectedDate.getTime() + oneHour);
  
      for (const interview of interviews) {
        const interviewEnd = new Date(interview.date).getTime() + oneHour;
        if (nextAvailable.getTime() < interviewEnd) {
          nextAvailable = new Date(interviewEnd);
        }
      }
  
      return nextAvailable;
    };
  
    return (
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen pt-16">
        <h1 className="text-3xl font-bold text-center mb-8">Interview Scheduler</h1>
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl mb-2 text-gray-700">Select User</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Select a user</option>
              {users.map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl mb-2 text-gray-700">Select Company</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              <option value="">Select a company</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedUser && selectedCompany && (
          <div className="text-center mb-8">
            <h3 className="text-xl mb-4 text-gray-700">Schedule Interview</h3>
            <DatePicker
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={handleSchedule}
            >
              Schedule
            </button>
          </div>
        )}
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl mb-4 text-gray-700 text-center">Scheduled Interviews</h3>
          <ul className="divide-y divide-gray-200">
            {interviews.map((interview, index) => (
              <li key={index} className="py-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">{interview.userId} - {interview.companyId}</span>
                  <span className="text-gray-600">{new Date(interview.date).toLocaleString()}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  

export default Schedule;
