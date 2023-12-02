import { Card, Loading, NotFound, Star } from "./../components";
import { useGetWeaponQuery } from "../redux/api/apiSlice";
import { useState } from "react";

const Weapon = () => {
  const [star, setStar] = useState(0);
  const { data: weapons, isLoading } = useGetWeaponQuery({ star });

  return (
    <div className="text-center mx-auto max-w-7xl">
      <h1 className="pt-10 mb-4 text-3xl text-font-color uppercase">Weapon</h1>
      <div className="flex justify-center items-center flex-col md:flex-row space-y-4 space-x-4">
        <Star setStar={setStar} />
      </div>
      <div className="grid  md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <Loading />
        ) : weapons?.length === 0 ? (
          <NotFound />
        ) : (
          weapons?.map((weapon) => <Card key={weapon._id} {...weapon} />)
        )}
      </div>
    </div>
  );
};

export default Weapon;
