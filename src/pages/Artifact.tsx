import { Card, Loading, NotFound, Star } from "./../components";
import { useGetArtifactQuery } from "../redux/api/apiSlice";
import { useState } from "react";

const Artifact = () => {
  const [star, setStar] = useState(0);

  const { data: artifacts, isLoading } = useGetArtifactQuery({ star });

  return (
    <div className="text-center mx-auto max-w-7xl">
      <h1 className="pt-10 text-3xl mb-4 text-font-color uppercase">
        artifact
      </h1>
      <div className="flex justify-center items-center flex-col md:flex-row space-y-4 space-x-4">
        <Star setStar={setStar} />
      </div>

      <div className="grid  md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <Loading />
        ) : artifacts?.length === 0 ? (
          <NotFound />
        ) : (
          artifacts?.map((artifact) => (
            <Card key={artifact._id} {...artifact} />
          ))
        )}
      </div>
    </div>
  );
};

export default Artifact;
