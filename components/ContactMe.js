import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [result, setResult] = React.useState(null);
  const form = useRef();

  const Result = ({ value }) => {
    return (
      <p className={value ? "text-primary-green" : "text-image-color-1"}>
        {value
          ? " Your Message has been succesfully sent."
          : "Your message didn't sent."}
      </p>
    );
  };
  console.log("process.env", process.env.NEXT_PUBLIC_SERVICE_KEY);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        e.target,
        process.env.NEXT_PUBLIC_USER_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setResult(true);
        },
        (error) => {
          console.log(error.text);
          setResult(false);
        }
      );
    e.target.reset();
    setTimeout(() => setResult(null), 3000);
  };

  return (
    <div className="bg-bgcontact p-12">
      <div className="flex flex-col justify-center items-center">
        <div className="text-primary-white  items-center flex flex-col gap-y-4 pb-8">
          <h2
            id="contactme"
            className="md:text-4xl text-2xl font-bold text-image-color-1"
          >
            CONTACT ME
          </h2>
          <p className="font-medium text-center">
            Contact me{" "}
            <strong className="text-image-color-1">
              immediately by sending
            </strong>{" "}
            an <br />
            e-mail, you can be sure that I will get back to you as soon as
            possible.
          </p>
        </div>
        <form
          className="flex flex-col md:w-[500px] w-full justify-center items-center p-4 md:gap-y-8  gap-y-2 rounded-xl bg-primary-white"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Full Name</label>
          <input
            required
            type="text"
            name="fullName"
            className="md:w-[300px] w-full border border-background-aboutme rounded-lg p-2"
          />
          <label>Phone Number</label>
          <input
            required
            type="tel"
            name="phone"
            className="md:w-[300px] w-full border border-background-aboutme rounded-lg p-2"
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="user_email"
            className="md:w-[300px] w-full border border-background-aboutme rounded-lg p-2"
          />
          <label>Message</label>
          <textarea
            name="message"
            required
            className="md:w-[300px] w-full border border-back w-fullground-aboutme rounded-lg p-2"
          />
          <input
            className="md:w-[300px] w-full h-[40px] rounded-2xl hover:bg-image-color-1 text-primary-white bg-brand-color cursor-pointer"
            type="submit"
            value="Send"
          />
          {result !== null && <Result value={result} />}
        </form>
      </div>
    </div>
  );
}
