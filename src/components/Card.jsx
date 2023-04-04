import hero from '../assets/illustration-hero.svg';
import music from '../assets/icon-music.svg';
export default function Card() {
  return (
    <article className="flex flex-col bg-white max-w-[400px] rounded-2xl">
      <div>
        <img src={hero} alt="heroSvg" className="rounded-t-2xl" />
      </div>
      <div className="flex flex-col items-center gap-5 p-10">
        <p className="font-black text-2xl">Order Summary</p>
        <p className="text-Desaturatedblue text-sm text-center">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like
        </p>
        <div className="flex items-center justify-between w-full p-4 bg-Verypaleblue rounded-2xl">
          <img src={music} alt="" />
          <div className="flex flex-col pr-14">
            <h1 className="text-sm font-bold">Annual Plan</h1>
            <pre />
            <h1 className="text-Desaturatedblue text-sm">$59.99/year</h1>
          </div>
          <p className="text-Brightblue font-bold underline hover:text-Brightblue/50 hover:no-underline">
            Change
          </p>
        </div>
        <button className="bg-Brightblue hover:bg-Brightblue/50 text-white w-full rounded-2xl shadow-2xl p-3 font-bold">
          Proceed to Payment
        </button>
        <button className="font-bold text-Darkblue/60 hover:text-Darkblue">
          Cancel Order
        </button>
      </div>
    </article>
  );
}
