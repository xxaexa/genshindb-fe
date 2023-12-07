import { Card, Loading, NotFound, Star } from "./../components";
import { useGetCharacterQuery } from "../redux/api/apiSlice";
import { useState } from "react";

const Character = () => {
  const [star, setStar] = useState(0);
  const { data: characters, isLoading } = useGetCharacterQuery({ star });

  return (
    <div className="static text-center mx-auto max-w-7xl">
      <h1 className="pt-10 text-3xl mb-4 text-font-color">CHARACTER</h1>
      <div className="flex justify-center items-center flex-col md:flex-row space-y-4 space-x-4">
        <Star setStar={setStar} />
      </div>
      <div className="grid  md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <Loading />
        ) : characters?.length === 0 ? (
          <NotFound />
        ) : (
          characters?.map((character) => (
            <Card key={character._id} {...character} />
          ))
        )}
      </div>
    </div>
  );
};

export default Character;
