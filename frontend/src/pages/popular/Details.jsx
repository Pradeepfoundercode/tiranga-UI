import { ChevronLeft, Trash2, Mail, Megaphone } from "lucide-react";
import { useState } from "react";

export default function Details({ onBack }) {
  const [activeTab, setActiveTab] = useState("Notification");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Member",
      date: "2026-09-03 11:09:25",
      message:
        "Thank you for becoming a beloved member of this platform. We provide many industry leading games. This is the world's leading gaming platform. Try the lottery game developed by us. While enjoying the best gaming experience, you can also join unlimited agents and stay at home to earn money.",
    },
  ]);

  const informations = [
    {
      id: 1,
      title: "Welcome To Tiranga Games!",
      date: "2024-04-08 23:45:44",
      message:
        "Welcome to the Tiranga Games! Greetings, Gamers and Enthusiasts! The Tiranga Games is more than just a platform for gaming. We invite you to join us, you'll find a variety of games, promo, bonus, luxury gold awards, Register now and win.",
    },
    {
      id: 2,
      title: "Avoid Scammer And Phising Link",
      date: "2024-05-25 17:16:52",
      message:
        "Please be sure to always use our official website for playing the games with the following link, https://tirangacasino.win. Please always check our official link to access our website and avoid scammers and phishing links.",
    },
    {
      id: 3,
      title: "Beware Of Fraud And Scammer",
      date: "2024-04-08 23:45:27",
      message:
        "If your deposit not receive, please send it directly to Tiranga Games Self-Service Center (https://www.tirangaservice.com) wait till already get process, do not send to another person and trust anyone claiming to represent Tiranga Games. Always verify our website authenticity through the official community channels. Your safety and trust is our priority.",
    },
  ];

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#262b5e] text-white">
    
      <header className="sticky top-0 z-30 h-[49px] bg-[#30387c] flex items-center justify-center">
        <button
          onClick={onBack}
          className="absolute left-3 w-8 h-8 flex items-center justify-center"
        >
          <ChevronLeft size={28} strokeWidth={2} className="text-white" />
        </button>

        <h1 className="text-[18px] text-[#f0f1f5]">Notification</h1>
      </header>

      <div className="px-[15px] pt-[14px]">
       
        <div className="h-[38px] rounded-t-[7px] bg-[#303675] p-[5px] flex overflow-hidden">
  <button
    onClick={() => setActiveTab("Notification")}
    className={`
      flex-1
      mt-0.5
      h-[40px]
      rounded-[5px]
      text-[15px]
      justify-center 
      items-start
      
      transition
      ${
        activeTab === "Notification"
          ? "bg-[#5ca5f3] text-white font-semibold "
          : "text-[#aeb2c9]"
      }
    `}
  >
    Notification
  </button>

  <button
    onClick={() => setActiveTab("Information")}
    className={`
      flex-1
     mt-0.5
      h-[40px]
      rounded-[5px]
      text-[15px]
      transition
      ${
        activeTab === "Information"
          ? "bg-[#5ca5f3] text-white font-semibold flex justify-center items-start pt-2"
          : "text-[#aeb2c9]"
      }
    `}
  >
    Information
  </button>
</div>

        {activeTab === "Notification" && (
          <div className="mt-[14px]">
            {notifications.length > 0 ? (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#303a7d] rounded-[5px] px-[11px] py-[10px]"
                >
             
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[7px]">
                      <div className="w-[18px] h-[16px] rounded-[3px] bg-[#a9acc1] flex items-center justify-center">
                        <Mail
                          size={13}
                          strokeWidth={2}
                          className="text-[#303675]"
                        />
                      </div>

                      <span className="text-[16px] font-semibold">
                        {item.title}
                      </span>
                    </div>

                    <button
                      onClick={() => deleteNotification(item.id)}
                      className="w-7 h-7 flex items-center justify-center"
                    >
                      <Trash2
                        size={21}
                        strokeWidth={1.8}
                        className="text-[#61aaff]"
                      />
                    </button>
                  </div>

                  <p className="text-[13px] text-[#8292cb] ">
                    {item.date}
                  </p>

                
                  <p className="text-[13px] leading-[14px] text-[#b8c1e3] mt-[12px]">
                    {item.message}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-[#8f97c9] text-[14px] mt-3">
                No notification
              </p>
            )}
          </div>
        )}

      
        {activeTab === "Information" && (
          <div className="mt-[14px] flex flex-col gap-[14px]">
            {informations.map((item) => (
              <div
                key={item.id}
                className="bg-[#303a7d] rounded-[14px] px-[11px] py-[13px]"
              >
             
                <div className="flex items-center gap-[6px]">
                  <Megaphone
                    size={27}
                    strokeWidth={2}
                    className="text-[#65a9ff] shrink-0"
                  />

                  <h2 className="text-[15px] font-medium">{item.title}</h2>
                </div>

             
                <p className="text-[12px] leading-[14px] text-[#b9c2e5] mt-[12px]">
                  {item.message}
                </p>

          
                <p className="text-[13px] text-[#8292cb] mt-[13px]">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-[7px] pb-5">
          <span className="text-[16px] text-[#b4b8d0]">No more</span>
        </div>
      </div>
    </div>
  );
}
