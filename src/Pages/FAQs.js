import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";

const FAQs = () => {
  const faqs = [
    {
      question: "How do you ensure product quality?",
      answer: "RUX detergents are formulated with high-quality cleaning agents, ensuring effective results while maintaining safety and environmental standards.",
    },
    {
      question: "How can I become a distributor for RUX?",
      answer: "Interested distributors can apply through the Become a Distributor form on our website, providing details such as business name, location, and estimated sales volume.",
    },
    {
      question: "Are RUX products safe for the environment?",
      answer: "Yes, RUX focuses on eco-friendly formulations that minimize harmful chemicals while maintaining cleaning efficiency. Our products are biodegradable and safe for daily use.",
    },
    {
      question: " Can I use RUX products for industrial cleaning?",
      answer: "Yes, RUX cleaning solutions are designed for both household and industrial use, making them effective for restaurants, hotels, offices, and large facilities.",
    },
    {
      question: "Where is RUX available?",
      answer: "RUX operates in multiple regions and works with distributors to ensure product availability in supermarkets, retail stores, and online platforms.",
    },
    {
      question: "How can I contact RUX for business inquiries?",
      answer: "You can reach out to us via the Contact Us form on the website or email us directly for bulk orders and partnership opportunities.",
    },
    {
      question: "How can I contact RUX for business inquiries?",
      answer: "You can reach out to us via the Contact Us form on the website or email us directly for bulk orders and partnership opportunities.",
    },
  ];

  const answerRefs = useRef([]);
  const [openIndexes, setOpenIndexes] = useState(Array(faqs.length).fill(false));

  useEffect(() => {
    answerRefs.current.forEach((el) => {
      gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });
    });
  }, []);

  const toggleAnswer = (index) => {
    const target = answerRefs.current[index];
    const isOpen = openIndexes[index];

    if (!isOpen) {
      gsap.to(target, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(target, { height: 0, opacity: 0, duration: 0.5, ease: "power2.in" });
    }

     setOpenIndexes((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="faqs-container  d-flex flex-column justify-content-center align-items-center min-vh-100" style={{backgroundColor:"rgb(11, 115, 214)"}}>
      <h2 className="mb-4 text-center py-3 fw-bold text-white">Frequently Asked Questions</h2>
      <div className="accordion w-100 container px-3 ">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item faqs-ctr container">
            <div
              className="accordion-header d-flex justify-content-between align-items-center p-2 border-bottom"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0 text-white">{faq.question}</h5>
              <span className="icon text-white  ">{openIndexes[index] ? "▲" : "▼"}</span>
            </div>
            <div ref={(el) => (answerRefs.current[index] = el)} className="accordion-body p-1">
              <p className="mb-0 text-white">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
