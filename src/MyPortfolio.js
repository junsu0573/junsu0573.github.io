function MyPortfolio() {
  return (
    <div className=" flex justify-center items-center my-10">
      <div className=" w-1/2 p-6 border-2 border-solid border-stone-600 rounded-xl min-w-[600px]">
        <h1 className="text-4xl font-black">My Portfolio</h1>
        <div className="text-xl mt-5 font-bold">Hi, I'm Jeon Suhyeon 👋</div>
        <p className=" my-5 text-sm">
          I am an student who wants to be a front-end developer experienced in
          project management, server communication, and hardware operations. As
          a member of CoMit, I excel in task distribution, leadership, and
          fostering effective communication. Currently pursuing a Software
          degree at Sungkyunkwan University, I maintain strong academic
          performance and possess proficiency in C, Python, HTML, Javascript,
          CSS, React and Flutter.
        </p>
        <div className="grid grid-cols-2 gap-10">
          <Card
            title={"Skills"}
            content={
              <div>
                <ul>
                  <li>Python</li>
                  <li>C</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React.JS</li>
                </ul>
              </div>
            }
          />
          <Card
            title={"Education"}
            content={
              <div>
                Sungkyunkwan University, Mar. 2022 - present <br />•
                Undergraduate of Software
                <br /> • Overall GPA: 3.69/4.5, Major GPA: 4.27/4.5
              </div>
            }
          />
          <Card
            title={"Achievements"}
            content={
              <div>
                <div className="text-xl">Deepplant</div>
                <div className=" text-xs">
                  : Deep tech company that improves the quality of meat
                </div>
                <div className="font-bold">As an App Developer</div>
                <div className="text-xs">May. 2023 – present</div>
                <div className="text-sm">
                  • Collaborated with front-end team members to assign tasks and
                  create schedules, ensuring efficient project management and
                  timely delivery of app development projects <br />•
                  Responsible for overseeing the management of server
                  communication data, including the design and implementation of
                  API integrations, data retrieval, and data synchronization to
                  ensure seamless and efficient communication between front-end
                  and back-end systems
                </div>
              </div>
            }
          />

          <Card
            title={"Contact"}
            content={
              <div className=" space-y-5">
                <div>
                  <b>Tel</b>: +82-10-6395-0573
                </div>
                <div>
                  <b>Email</b>: junsu0573@naver.com
                </div>
                <div>
                  <b>Github</b>:{" "}
                  <a
                    className=" hover:font-black"
                    href="https://github.com/junsu0573"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/junsu0573
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className="border border-dashed rounded-xl border-gray-600 p-5">
      <div className="text-xl font-black">{title}</div>
      <hr className=" h-4" />
      {content}
    </div>
  );
}

export default MyPortfolio;
