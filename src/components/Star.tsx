import { starData } from "../data";
interface StarProps {
  setStar: React.Dispatch<React.SetStateAction<number>>;
}
const Star = ({ setStar }: StarProps) => {
  return (
    <div className="space-x-3 flex justify-center items-center">
      {starData.map((sD) => {
        return (
          <button type="button" key={sD.id} onClick={() => setStar(sD.id)}>
            {sD.stars}
          </button>
        );
      })}
    </div>
  );
};

export default Star;
