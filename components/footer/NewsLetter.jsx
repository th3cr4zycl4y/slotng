function NewsLetter() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border-b-2 mb-10 p-14  relative">
        <h1 className="md:text-3xl text-2xl py-10 font-normal ">
          Sign Up For Newsletter
        </h1>
        <div className="space-y-2 text-center">
          <p className="text-gray-400">
            {" "}
            Get the latest and greatest offers from us by subscribing to our
            newsletter
          </p>
          <p className=" text-[#ff9300] font-normal">
            Join 1,000,000+ Subscribers
          </p>
        </div>
        <form className="absolute -bottom-7 ">
          <div>
            <input
              className="border rounded-l-full md:w-[20rem] p-3"
              type="email"
              placeholder="Your email address..."
            />
            <input
              className="bg-[#ff9300] py-3 md:px-10 px-4  text-white  rounded-r-full"
              type="submit"
              value="Subscribe !"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
