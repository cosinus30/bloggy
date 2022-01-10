export default function ContactForm() {
  return (
    <section className="shadow-2xl max-w-[700px] mx-auto px-12 py-16 space-y-8 my-8">
      <h1 className="text-4xl">How can I help you?</h1>
      <form className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-zinc-800 focus:bg-zinc-700"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="px-4 py-2 bg-zinc-800 focus:bg-zinc-700" />
          </div>
          <div className="col-span-full flex flex-col space-y-2">
            <label htmlFor="message">Your message</label>
            <textarea
              type="name"
              id="message"
              name="message"
              placeholder="Enter your message..."
              rows={5}
              className="bg-zinc-800 text-zinc-100 p-2 focus:bg-zinc-700"
            >
              {" "}
            </textarea>
          </div>
          <div className="col-span-full p-2 mx-auto">
            <button
              type="submit"
              className="py-2 px-4 bg-zinc-800 rounded-lg mx-auto flex flex-row items-center space-x-4 hover:bg-zinc-700"
            >
              <span>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
