import HeroIcon from "@/assets/hero.png";
const Hero = () => {
  return (
    <div className="w-full max-h-[600px] bg-gradient-to-br from-orange-500 from-50% to-50% to-[#dedede] flex justify-center items-center ">
        <img src={HeroIcon} alt="not found" className="size-96 object-cover"/>
    </div>
  )
}

export default Hero