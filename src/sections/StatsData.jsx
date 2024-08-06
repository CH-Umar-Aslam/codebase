
import CountUp from "react-countup"
import { StatsData } from "../data/social.js"
const Stats = () => {
  return (
    <section className=" mb-12 ">

      <div className="border   border-blue-400 shadow-2xl  shadow-sky-300  py-12  text-gray-300 lg:px-3   ">

        <div className="container mx-auto pl-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[500px] ml-[20%] sm:mx-auto sm:max-w-[80vw] mx-auto xl:max-w-none sm:border-l  sm:border-sky-300">
            {StatsData.map((item, index) => {
              return <div key={index} className="flex-1 sm:border-r sm:border-sky-300   flex max-w-[230px]  xl:gap-8 items-center">
                <CountUp end={item.num} duration={5} delay={2} className="min-w-[60px] sm:text-center text-4xl xl:text-6xl font-extrabold" />
                <p className={`leading-widest text-gray-400 font-semibold     xl:w-[100px] text-nowrap sm:text-wrap`}>{item.text}</p>
              </div>
            })}
          </div>
        </div>
      </div >
    </section>
  )
}

export default Stats