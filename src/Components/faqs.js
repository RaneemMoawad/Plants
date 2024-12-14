import React, { useState } from "react";
import "./faqs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../Components/responsive.css'


const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "My flowers are falling off or dying?",
      answer:
        "Ensure proper sunlight and watering. Overwatering or underwatering can cause flowers to fall.",
    },
    {
      question: "What causes leaves to become pale?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      question: "What causes brown crispy leaves?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },

    {
      question: "How do i choose a plant?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },

    {
      question: "How do i choose a plant?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },

    {
      question: "Why are gnats flying around my plant?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <>
   <div className=" all">
      <div className="faqs-section" id="faqs">
        <p className="faqs-title">
          Some common questions
          <br />
          we're often asked
        </p>
        <div className="questions row container ">
          {/* Left Section */}
          <div className="left col-6 col-md-6 col-sm-12  hawia" data-aos="flip-right">
            {questions
              .slice(0, Math.ceil(questions.length / 2))
              .map((item, index) => (
                <div key={index}>
                  <h6
                  tabindex="0"
                    className={`question-title ${
                      openIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAnswer(index)}
                  >
                    <FontAwesomeIcon icon={faPlus}  className="plus" />

                    {item.question}
                  </h6>
                  {openIndex === index && (
                    <div className="answer">{item.answer}</div>
                  )}
                </div>
              ))}
          </div>
          {/* Right Section */}
          <div className="right col-6 col-md-6 col-sm-12 hawia " data-aos="flip-left">
            {questions
              .slice(Math.ceil(questions.length / 2))
              .map((item, index) => (
                <div key={index + Math.ceil(questions.length / 2)}>
                  <h6
                  tabindex="0"
                    className={`question-title ${
                      openIndex === index + Math.ceil(questions.length / 2)
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      toggleAnswer(index + Math.ceil(questions.length / 2))
                    }
                  >
                    <FontAwesomeIcon icon={faPlus} className="plus" />

                    {item.question}
                  </h6>
                  {openIndex === index + Math.ceil(questions.length / 2) && (
                    <div className="answer">{item.answer}</div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Faqs;
