const Skill: React.FC = () => {
  return (
    <section className=" w-screen xl:h-screen/2 w-screen flex flex-col items-center justify-center">
      <div className="text-4xl py-10 font-bold">Skills</div>
      <div className="flex [&>*]:w-20 [&>*]:h-20 flex-wrap items-center justify-center [&>*]:m-5">
        <img src="assets/html.webp" alt="" />
        <img src="assets/git.png" alt="" />
        <img src="assets/css.webp" alt="" />
        <img src="assets/js.png" alt="" />
        <img src="assets/sass.png" alt="" />
        <img src="assets/react.png" alt="" />
        <img src="assets/ts.png" alt="" />
        <img src="assets/bash.png" alt="" />
        <img src="assets/tailwindcss.png" alt="" />
        <img src="assets/redux.png" alt="" />
        <img src="assets/bootstrap.png" alt="" />
        <img src="assets/less.webp" alt="" />
        <img src="assets/c.png" alt="" />
        <img src="assets/py.png" alt="" />
      </div>
    </section>
  );
};

export default Skill;
