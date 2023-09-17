import Accordion from "./Accordion";
/* import data to use */
import { accordions } from "./AccordionData";

function FAQ() {
  return (
    <div className="mt-20 mb-[48px] px-3">
      <h1 className="text-center text-4xl font-semibold font-samiq mb-10">
        FAQ
      </h1>
      <div>
        <p className="text-center font-abc text-[16px]">
        Common answers to questions about Wall Street Memes ($WSM) can be found below.
        </p>
      </div>

      {/* main content here */}
      <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-[20px] border-2 border-black" key={id}>
              {/* passing two props to this component */}
              <Accordion question={question} answer={answer}></Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
