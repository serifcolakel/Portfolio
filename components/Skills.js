const data = [
  {
    id: "1",
    url: "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
    description: "",
    title: "JavaScript",
  },
  {
    id: "2",
    url: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png",
    description: "",
    title: "TypeScript",
  },
  {
    id: "7",
    url: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    description: "",
    title: "React JS",
  },
  {
    id: "8",
    url: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    description: "",
    title: "React Native",
  },
  {
    id: "88",
    url: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    description: "",
    title: "Next JS",
  },
  {
    id: "22",
    url: "https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png",
    description: "",
    title: "CSS",
  },
  {
    id: "3",
    url: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
    description: "",
    title: "HTML",
  },

  {
    id: "4",
    url: "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
    description: "",
    title: "Bootstrap",
  },

  {
    id: "6",
    url: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    description: "",
    title: "Tailwind CSS",
  },

  {
    id: "13",
    url: "https://seeklogo.com/images/S/sass-logo-E41E7734A8-seeklogo.com.png",
    description: "",
    title: "Sass",
  },
  {
    id: "14",
    url: "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
    description: "",
    title: "Ant Design",
  },
  {
    id: "55",
    url: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png",
    description: "",
    title: "Material UI",
  },
  {
    id: "15",
    url: "https://seeklogo.com/images/H/headless-ui-logo-034B045C5C-seeklogo.com.png",
    description: "",
    title: "Headless UI",
  },
  {
    id: "16",
    url: "https://seeklogo.com/images/P/primereact-logo-24D1113A03-seeklogo.com.png",
    description: "",
    title: "Prime React",
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
          develop myself in the following software languages and tools.
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 ">
        {data.map((x) => (
          <div
            key={x.id}
            className="flex flex-col  items-center justify-center bg-primary-white rounded-xl p-4  "
          >
            <img
              src={x.url}
              className="md:w-[120px] md:h-[120px] object-contain w-[50px] h-[50px] m-4 md:p-2"
            />
            <p className="truncate font-extrabold pb-3">{x.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
