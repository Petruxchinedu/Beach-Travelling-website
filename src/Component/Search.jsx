import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div name="book" className="max-w-[1240px] mx-auto grid md:grid-cols-3 px-4 py-16 gap-4">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h1>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h1>
          <p className='py-4 className="py-2"'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            dolor libero rerum ducimus cupiditate maiores dignissimos porro
            laborum sunt perferendis aperiam distinctio odio eveniet officiis
            labore, accusantium temporibus harum. Pariatur dolores excepturi
            distinctio quia iure quidem fuga? Sunt sint accusantium mollitia
            natus ab asperiores iure fugit vel qui! Delectus temporibus fugiat
            sit hic exercitationem fuga nesciunt ullam officia at, quam iste ab
            commodi, amet minima aspernatur possimus eaque ut esse accusantium
            reiciendis corporis nostrum consequuntur in. Tenetur explicabo animi
            rem dolores suscipit, consequatur totam saepe molestias, repudiandae
            asperiores quam libero dolorem aut quae minima voluptate corporis
            fuga! Quisquam, repellat eius?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center border">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form classNAME="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2" >
              <option>Grade Antique</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label >Check-in</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label >Check-out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-2">Rates & Avalability</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
