import appdwndImage from '../assets/appdwnd.png';

export default function AppDwnd() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around text-sm shadow-md rounded-md mt-10 max-w-5xl w-full bg-gray-100">
        
            <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
                <h2 className="md:text-4xl text-2xl font-semibold text-primary">Download GrowNow App</h2>
                <p className="text-gray-700 mt-2 w-3/4"> Order groceries in seconds, track deliveries in real-time, and enjoy fresh essentials right at your doorstep.</p>
        
                <div className="flex items-center gap-4 mt-6">
                    <button onClick={()=>window.open('https://play.google.com/store/apps/')} aria-label="googlePlayBtn" className="active:scale-95 transition-all" type="button">
                        <img className="md:w-44 w-28"
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                            alt="googlePlayBtn" />
                    </button>
                    <button aria-label="appleStoreBtn" className="active:scale-95 transition-all" type="button">
                        <img className="md:w-44 w-28"
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                            alt="appleStoreBtn" />
                    </button>
                </div>
            </div>
        
            <img className="max-w-[375px] pt-10 md:p-0"
                src={appdwndImage}
                alt="excitedDeliveryPartnerImage" />
        </div>
    );
};