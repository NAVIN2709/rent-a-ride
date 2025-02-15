import React, { useState } from "react";
import Navigation from "../components/Navigation";

interface FAQ {
    question: string;
    answer: string;
}

const FaqAccordion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQ[] = [
        { question: "1. How will this app help us?", answer: "This app helps you to connect with people who wish to go to the same place as you by taking a auto or car." },
        { question: "2. How will this app help us?", answer: "This app helps you to connect with people who wish to go to the same place as you by taking a auto or car." },
        { question: "3. How will this app help us?", answer: "This app helps you to connect with people who wish to go to the same place as you by taking a auto or car." },
        { question: "3. How will this app help us?", answer: "This app helps you to connect with people who wish to go to the same place as you by taking a auto or car." },
        { question: "3. How will this app help us?", answer: "This app helps you to connect with people who wish to go to the same place as you by taking a auto or car." },
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="page bg-gradient-to-b from-[#FFFFFF] to-[#C1EDE08C] h-[100vh] w-[100vw] relative [@media(min-height:900px)]:h-[100vh]">
            <header className="header w-screen h-[max] relative top-[10vh] pl-[20px]">
                <div className="heading text-[#008955] text-[10vw] font-Quicksand font-[700]">FAQs</div>
                <div className="stayupdated font-Quicksand font-[450] mt-[-5px]">Clear your doubts instantly</div>
            </header>
            <section className="faq w-screen h-[max] relative top-[10vh] mt-[2.5vh] p-[15px]">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-[#008955] rounded-lg mb-4 overflow-hidden"
                    >
                        <div
                            className="bg-[#FFFFFF] flex justify-between items-center px-6 py-4 cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className="text-[#414141] font-[Quicksand] font-[600] text-[5.2vw]">{faq.question}</h3>
                            <span className="text-xl font-bold">
                                {activeIndex === index ? "-" : "+"}
                            </span>
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-screen py-4 px-6" : "max-h-0"
                                } overflow-hidden bg-white`}
                        >
                            <p className="text-[#414141] font-[Quicksand] text-[4.7vw] font-[550]">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </section>
            <Navigation />
        </div>
    );
};

export default FaqAccordion;
