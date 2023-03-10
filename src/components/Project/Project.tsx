import { Repo } from "../../interface/interface";

const Project: React.FC = () => {
  const dummyData: Repo[] = [
    {
      id: 1,
      name: "Ji Oh Cloning",
      full_name: "tan-developer/ji-oh-clone",
      description:
        "Cloning famous e-conmerce website using React and Typescript functionally",
      html_url: "https://github.com/tan-developer/ji-oh-clone",
      languages: [
        { name: "Typescript", percent: 59.4 },
        { name: "SASS", percent: 31.6 },
        { name: "HTML", percent: 4.5 },
      ],
    },
    {
      id: 2,
      name: "Na tour",
      full_name: "tan-developer/na-tour",
      description:
        "Amazing grid and flex design template and light width only CSS HTML for best traffic",
      html_url: "https://github.com/tan-developer/na-tour",
      languages: [
        { name: "SASS", percent: 80.1 },
        { name: "HTML", percent: 19.9 },
      ],
    },
    {
      id: 1,
      name: "Portfolio",
      full_name: "tan-developer/portfolio",
      description: "Repo of this website using Typescript",
      html_url: "https://github.com/tan-developer/portfolio",
      languages: [
        { name: "Typescript", percent: 69.4 },
        { name: "SASS", percent: 21.1 },
        { name: "HTML", percent: 5.5 },
      ],
    },
  ];

  return (
    <section className="xl:h-screen/2 text-center overflow-hidden">
      <div className="text-3xl my-5">Recent Project</div>
      <div className="text-xl grid xl:grid-cols-5 h-full w-screen [&>*:nth-child(odd)]:bg-dark-grey [&>*:nth-child(odd)]:text-white [&>*]:p-10 [&>*:nth-child(even)]:bg-gray-100 text-center xl:text-left">
        <div className="hidden xl:block"></div>
        {dummyData.map((repo, index) => {
          return (
            <div className="">
              <ul className="xl:list-disc">
                <li className="mb-3">{repo.name}</li>
                <li className="mb-7 underline">
                  <a href={repo.html_url} target="_blank">
                    {repo.full_name}
                  </a>
                </li>
                <li className="mb-9">{repo.description}</li>
                <li className="">{repo.languages.map(element => {
                  return <span className="inline-block text-base ml-4 mb-2 p-0.5 border border-gray-700">
                    {element.name} : {element.percent}%
                  </span >
                })}</li>
              </ul>
            </div>
          );
        })}

        <div className="hidden xl:block"></div>
      </div>
    </section>
  );
};

export default Project;
