import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Manage which question is open

  const faqData = [
    {
      question: "What is Rexas Finance?",
      answer:
        "Rexas Finance is a blockchain platform designed to facilitate the tokenization of real-world assets. Our ecosystem offers tools to tokenize, invest, and manage assets such as real estate, precious metals, and other valuable commodities, leveraging blockchain technology for transparency and efficiency",
    },
    {
      question: "What types of assets can I tokenize with Rexas Finance?",
      answer:
        "Rexas Finance supports the tokenization of a wide variety of assets, including but not limited to real estate, art, gold, and corporate bonds. Our platform provides the flexibility to bring almost any valuable asset onto the blockchain.",
    },
    {
      question: "How can I start investing with Rexas Finance?",
      answer:
        "To begin investing with Rexas Finance, Head over to rexas.com https://rexas.com Click Connect Wallet and connect using your DeFi Web3 wallet, we recommend using MetaMask & Trust Wallet, Make sure you are connected on Ethereum Chain (ERC20) and have enough ETH on ethereum network. Select from ETH, USDT, USDC, Input amount you want to purchase with and click on Buy Now. Complete the transaction in your wallet. For detailed guide on How To Buy Rexas Finance - Click Here. https://rexas.com/how-to-buy/",
    },
    {
      question: "What is RXS Token?",
      answer:
        "RXS is the symbol of Rexas Finance token. RXS token is used for governance of the Rexas Finance and Ecosystem.",
    },
    {
      question: "How will I receive RXS Tokens?",
      answer:
        "Rexas Finance (RXS) tokens are transferred to your wallet in real time, to see the amount of tokens in your wallet please add RXS as custom token in your wallet.",
    },
    {
      question: "How can I contact Rexas Finance team?",
      answer:
        "You can contact us using our contact us form: https://rexas.com/contact-us/ Or by emailing us at: support@rexas.com",
    },
    {
      question: "Where can I sell my RXS tokens?",
      answer:
        "Since we are currently on presale, you cannot sell or transfer your tokens. Once Rexas Finance goes live, users will be able to freely trade it on Uniswap.",
    },
    {
      question: "My wallet is Hacked, what should i do?",
      answer:
        "Unfortunately, there is nothing we can do on our end in this situation. Never Share Your Seed Phrase or Private Key: Under no circumstances should you share your Seed Phrase or Private Key with anyone. These are sensitive and should be kept secure.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };
  return (
    <div>
              <div className=" pr-[360px] pl-[360px] flex flex-col gap-0 items-center justify-start absolute right-0 left-0 top-[6098.7px]">
          <div className="pr-6 pl-6 flex flex-col gap-10 items-start justify-start shrink-0 w-[1200px] max-w-[1200px] relative">
            <div className="pr-[521.35px] pl-[521.35px] flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
              <div
                className="text-[#ffffff] text-center font-['Inter-Bold',_sans-serif] text-[32px] leading-[48px] font-bold relative self-stretch flex items-center justify-center"
                style={{ letterSpacing: "0.3px" }}
              >
                FAQs
              </div>
            </div>
            <div className="pb-20 flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="rounded border-solid border-[#bdbdcb] border-b-[0.8px] pb-[0.8px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative"
                >
                  <div
                    className="pr-4 pl-4 flex flex-row gap-0 items-center justify-between self-stretch shrink-0 min-h-[48px] relative cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <div className="pt-3 pb-3 flex flex-col gap-0 items-start justify-start flex-1 relative">
                      <div className="flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
                        <div className="pt-2 pr-4 pb-2 pl-4 flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                          <div
                            className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-3xl leading-[45px] font-medium relative flex items-center justify-start"
                            style={{ letterSpacing: "0.15px" }}
                          >
                            {faq.question}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                      <div
                        className={`shrink-0 text-2xl font-bold ${
                          openIndex === index ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {openIndex === index ? "-" : "+"}
                      </div>
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="pt-4 pb-4 pl-6 pr-6 text-[#ffffff] text-xl font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  )
}

export default Faq