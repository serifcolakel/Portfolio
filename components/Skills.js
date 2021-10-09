const data = [
  {
    url: "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
    description: "",
    title: "JavaScript",
  },
  {
    url: "https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png",
    description: "",
    title: "CSS",
  },
  {
    url: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
    description: "",
    title: "HTML",
  },

  {
    url: "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
    description: "",
    title: "Bootstrap",
  },
  {
    url: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png",
    description: "",
    title: "Material UI",
  },
  {
    url: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    description: "",
    title: "Tailwind CSS",
  },
  {
    url: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    description: "",
    title: "React JS",
  },
  {
    url: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    description: "",
    title: "Next JS",
  },

  {
    url: "https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png",
    description: "",
    title: "GitHub",
  },
  {
    url: "https://seeklogo.com/images/M/matlab-logo-AE6C96A5DD-seeklogo.com.png",
    description: "",
    title: "MatLab",
  },
  {
    url: "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
    description: "",
    title: "Pyton",
  },
  {
    url: "https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png",
    description: "",
    title: "C++",
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-8 gap-y-8 bg-bgskills">
      <div className="flex flex-col justify-center items-center gap-y-8">
        <h1
          id="skills"
          className="text-3xl font-extrabold text-image-color-1 shadow-sm"
        >
          MY SKILLS
        </h1>
        <p className="font-medium text-center">
          I am{" "}
          <strong className="text-image-color-1">
            researching, learning and trying{" "}
          </strong>{" "}
          to apply with all my strength to
          <br />
          develop myself in the following software languages.
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 ">
        {data.map((x, i) => (
          <div
            key={i}
            className="flex flex-col  items-center justify-center bg-primary-white rounded-xl p-4  "
          >
            <img
              src={x.url}
              className="md:w-[120px] md:h-[120px] w-[50px] h-[50px] m-4 md:p-2"
            />
            <p className="truncate font-extrabold pb-3">{x.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
