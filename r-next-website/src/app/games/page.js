import Tictactoe from "@/components/tic-tac-toe/Tictactoe";

export default function Page() {
  return (
    <div className="flex justify-center p-2">
      <div className="w-1/2 border-2 border-cyan-600">
        <Tictactoe></Tictactoe>
      </div>
    </div>
  );
}
