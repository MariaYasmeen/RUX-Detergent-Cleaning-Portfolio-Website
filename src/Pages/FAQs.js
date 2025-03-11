import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";

const FAQs = () => {
  const faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer standard and express shipping. Delivery times depend on your location.",
    },
    {
      question: "How can I track my order?",
      answer: "You will receive a tracking number via email once your order has been shipped.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds within 30 days of purchase, provided the item is unused and in its original packaging.",
    },
    {
      question: "Can I change my shipping address after placing an order?",
      answer: "Yes, but only if your order has not been shipped yet. Contact our support team as soon as possible.",
    },
    {
        question: "Can  my shipping address after placing an order?",
        answer: "Yes, but only if your order has not been shipped yet. Contact our support team as soon as possible.",
      },
      {
        question: "Can I change my shipping address after placing an order?",
        answer: "Yes, but only if your order has not been shipped yet. Contact our support team as soon as possible.",
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

    // Toggle the open state
    setOpenIndexes((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="faqs-container  d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2 className="mb-4 text-center py-3 fw-bold">Frequently Asked Questions</h2>
      <div className="accordion w-100 container px-3">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item container">
            <div
              className="accordion-header d-flex justify-content-between align-items-center p-2 border-bottom"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">{faq.question}</h5>
              <span className="icon">{openIndexes[index] ? "▲" : "▼"}</span>
            </div>
            <div ref={(el) => (answerRefs.current[index] = el)} className="accordion-body p-1">
              <p className="mb-0">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
