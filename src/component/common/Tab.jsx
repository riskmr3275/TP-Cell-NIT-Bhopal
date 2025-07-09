export default function Tab({ tabData, field, setField }) {
    return (
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 1.8)",
        }}
        className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-md max-w-max border-b-2 border-blue-900"
      >
        {tabData.map((tab) => (
          <button  
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-blue-900 text-white"
                : "bg-transparent text-black"
            } py-2 px-5 rounded-md transition-all duration-200`}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
    );
  }