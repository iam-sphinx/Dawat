import screenImg from "@/assets/screens.png";
import storeImg from "@/assets/store.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today.
        </h1>

        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={screenImg} alt="not found" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the Dawat app for faster ordering and persionalised
            recommendations.
          </span>
          <div className="flex h-40">
            <img src={storeImg} alt="not found" className="h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
