import { ChevronLeft, Trash2, Mail, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { initialNotifications, informationItems } from "../../constants/notificationData";

export default function Details() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Notification");

  const [notifications, setNotifications] = useState(initialNotifications);

  const informations = informationItems;


  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-theme text-white">
    
      <header className="sticky top-0 z-30 h-[49px] bg-background1 flex items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="absolute left-3 w-8 h-8 flex items-center justify-center"
        >
          <ChevronLeft size={28} strokeWidth={2} className="text-white" />
        </button>

        <h1 className="text-[18px] text-text">Notification</h1>
      </header>

      <div className="px-[15px] pt-[14px]">
       
        <div className="h-[38px] rounded-t-[7px] bg-background1 p-[5px] flex overflow-hidden">
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
          ? "bg-active text-white font-semibold "
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
          ? "bg-active text-white font-semibold flex justify-center items-start pt-2"
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
                  className="bg-background1 rounded-[5px] px-[11px] py-[10px]"
                >
             
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[7px]">
                      <div className="w-[18px] h-[16px] rounded-[3px] bg-[#a9acc1] flex items-center justify-center">
                        <Mail
                          size={13}
                          strokeWidth={2}
                          className="text-background1"
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
                className="bg-background1 rounded-[14px] px-[11px] py-[13px]"
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