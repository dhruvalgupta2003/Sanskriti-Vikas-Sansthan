import { useState } from "react";
import emailjs from "emailjs-com";

const RequestCallback = () => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You need to replace these values with your own emailJS template parameters
    const templateParams = {
      fullName,
      company,
      phoneNo,
      description,
    };

    // You need to replace these values with your own emailJS service, template, and user ID
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        // You can add your own success message or redirect here
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // You can add your own error handling here
      });
  };

  return (
    <>
      <div className="mx-auto mt-[70px] flex flex-col items-center h-full">
        <h1 className="font-bold text-center text-[72px] float-left">Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[800px] mx-auto my-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full max-w-[400px] h-[80px] mt-4 p-2 rounded-[35px] focus:outline-none focus:border-blue-500 shadow-custom"
              />
              <input
                type="text"
                placeholder="Interested Category"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full max-w-[400px] h-[80px] mt-4 p-2 rounded-[35px] focus:outline-none focus:border-blue-500 shadow-custom"
              />
            </div>
            <div className="flex flex-col items-center">
              <input
                type="tel"
                placeholder="Phone No"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="w-full max-w-[400px] h-[80px] mt-4 p-2 rounded-[35px] focus:outline-none focus:border-blue-500 shadow-custom"
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full max-w-[400px] h-[80px] mt-4 p-2 rounded-[35px] focus:outline-none focus:border-blue-500 shadow-custom"
              />
            </div>
          </div>
          <button
            type="submit"
            className="block w-[207px] h-[58px] mt-6 mx-auto px-4 py-2 bg-brown text-white text-lg rounded-[30px] hover:bg-blue-600 focus:outline-none focus:bg-tertiary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RequestCallback;
