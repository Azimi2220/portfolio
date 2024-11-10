function Footer() {
  return (
    <div className="mx-28 mt-20 ">
      <hr></hr>
      <div className="grid grid-cols-2">
        <div className="flex my-6">
          <img src="/copyright (1).svg" alt="" />
          <p className="font-thin text-slate-400 pl-1">
            {" "}
            2024 Aziz Ahmad, Inc. All rights reserved.
          </p>
        </div>
        <div className="flex h-10 mt-4 ml-96 gap-4">
          <img src="/linkedin.svg" alt="" />
          <img src="/github.svg" alt="" />
          <img src="/twitter.svg" alt="" />
          <img src="/youtube.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
