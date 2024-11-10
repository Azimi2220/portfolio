function About() {
  return (
    <div className="flex justify-center gap-56 mt-36">
      <div>
        <img
          src="/profile.png"
          alt="image"
          className="rounded-full h-80 w-80 mt-7"
        />
      </div>
      <div className="max-w-96">
        <h2 className="text-5xl font-medium">About Me</h2>
        <div className="mt-5">
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
        <div className="font-medium space-y-2 mt-3">
          <div className="indent-2 space-y-2">
            <p>
              Name:{" "}
              <span className="text-slate-500 font-normal">Aziz Ahmad</span>
            </p>
            <p>
              Last Name:{" "}
              <span className="text-slate-500 font-normal">Azimi</span>
            </p>
            <p>
              Date of birth:{" "}
              <span className="text-slate-500 font-normal">
                {" "}
                March 21, 2003
              </span>
            </p>
            <p>
              Address:{" "}
              <span className="text-slate-500 font-normal">
                Herat, Afghanistan
              </span>
            </p>
            <p>
              Email:{" "}
              <span className="text-slate-500 font-normal">
                azizahmadazimi1400@gmail.com
              </span>
            </p>
            <p>
              Phone:{" "}
              <span className="text-slate-500 font-normal">
                +(93) 777272220
              </span>
            </p>
          </div>
          <p>
            Completed projects:{" "}
            <span className="text-slate-500 font-normal">+10</span>
          </p>
          <button className="bg-lime-400 rounded-xl  w-44 h-8 font-normal">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
