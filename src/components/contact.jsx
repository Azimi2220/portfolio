function Contact() {
  return (
    <div className="grid grid-cols-2 mx-40 mt-36 gap-3">
      <div>
        <h2 className="font-medium text-3xl">Get in touch</h2>
        <p className="mt-5 text-lg">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sedn quam ex nam ducimus voluptatem suscipit que quis adipisci
          perspiciatis ipsa.
        </p>
        <div className="flex mt-5 space-x-2">
          <img src="/house.svg" alt="" />
          <p>Herat,Afghanistan</p>
        </div>
        <div className="flex space-x-2 mt-4">
          <img src="/phone.svg" alt="" />
          <p>+(93) 777272220</p>
        </div>
        <div className="flex space-x-2 mt-4">
          <img src="/mail.svg" alt="" />
          <p>azizahmadazimi1400@gmail.com</p>
        </div>
      </div>
      <div>
        <div className="flex gap-5">
          <div className="grid">
            <label className="font-medium">First Name</label>
            <input
              type="text"
              className="border border-black rounded-md pl-2"
            />
          </div>
          <div className="grid space-y-2">
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              className="border border-black rounded-md pl-2"
            />
          </div>
        </div>
        <div className="grid space-y-2">
          <label className="font-medium">Email</label>
          <input type="text" className="border border-black rounded-md pl-2" />
          <label className="font-medium">Subject</label>
          <input type="text" className="border border-black rounded-md pl-2" />
          <label className="font-medium">Message</label>
          <textarea
            name="Message"
            rows={4}
            cols={3}
            className="border border-black rounded-md pl-2 "
          ></textarea>
        </div>
        <div className="text-end">
          <button className="bg-lime-400 rounded-md w-36 h-8 mt-5">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
