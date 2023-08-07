import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 mx-10 my-auto">
      <h2 className="text-center text-5xl font-extrabold">Games</h2>
      <div class="relative bg-tic-tac-toe w-full h-56 bg-bottom bg-fixed mx-20 my-0">
        <div class="absolute bottom-0 w-full h-2/5 bg-black bg-opacity-80"></div>
        <div class="absolute bottom-5 pl-40 text-white text-center p-2">
          <h3 className="font-bold text-xl m-2">We love TicTacToe!</h3>
          <p>
            Love is a game of tic-tac-toe, constantly waiting for the next x or
            o.
          </p>
        </div>
      </div>
    </main>
  );
}
