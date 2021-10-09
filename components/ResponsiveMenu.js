const pagesLink = [
  { id: 1, link: "/aboutme", desc: "About Me" },
  { id: 2, link: "/skills", desc: "Skills" },
  { id: 3, link: "/projects", desc: "Projects" },
  { id: 4, link: "/contactme", desc: "Contact Me" },
];

export default function ResponsiveMenu(props) {
  console.log(props);
  return (
    <div className="fixed inset-0 overflow-y-auto bg-brand-color p-8 ">
      <div className=" h-[94vh] gap-y-2 text-primary-white">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-y-4">
            {pagesLink.map((x, i) => (
              <a href={x.link} key={x.id} rel="noreferrer">
                <span className="hover:text-image-color-1 font-bold text-xl">
                  {x.desc}
                </span>
              </a>
            ))}
          </div>

          <div className=" cursor-pointer">
            <a
              href="http://getir-clone-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[89px] h-10 text-primary-white-600"
                alt="noReferer"
                src="/logo.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
