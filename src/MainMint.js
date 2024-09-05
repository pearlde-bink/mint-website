import { useState } from "react";
import { ethers } from "ethers";
import roboPunkNFT from "./RoboPunkNFT.json";

const roboPunkNFTAddress = "0xBA7d0E7d36b733ff8113980a263cde09E3129Be3";

// const bigInt = typeof BigInt !== "undefined" ? BigInt : Number;

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1); //determine number of nft to mint
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        roboPunkNFTAddress,
        roboPunkNFT.abi,
        signer
      );

      try {
        // should be in BigInt
        const response = await contract.mint(mintAmount, {
          //TypeError: invalid BigNumberish string: Cannot convert 0.02 to a BigInt
          value: ethers.formatEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (e) {
        console.log("error: ", e);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div className="w-full h-2/4 flex justify-center items-center pb-15">
      <div className="w-1/2 flex flex-col items-center">
        <p className="text-4xl shadow-lg mt-5">RoboPunks</p>
        <p className="text-3xl font-text space-x-2 ">
          It's 2077. Can you mint your very own roboPunk. We have set a cap of
          3.
        </p>

        {isConnected ? (
          <div>
            <div className="flex justify-center items-center">
              <button
                className="relative w-14 h-14 text-center text-2xl rounded-lg bg-blue-600 text-white cursor-pointer p-5 m-5 shadow-lg"
                onClick={handleDecrement}
              >
                <p>-</p>
              </button>
              <input
                className="text-center text-2xl rounded-md text-violet-900 font-text w-24 h-10 rounded-10"
                type="number"
                value={mintAmount}
                onChange={(e) => setMintAmount(Number(e.target.value))}
              />
              <button
                className="relative w-14 h-14 text-center text-2xl rounded-lg bg-blue-600 text-white cursor-pointer p-5 m-5 shadow-lg"
                onClick={handleIncrement}
              >
                <p>+</p>
              </button>
            </div>
            <button
              className="relative w-28 h-auto text-center text-2xl rounded-lg bg-blue-600 text-white cursor-pointer p-5 m-2 shadow-lg"
              onClick={handleMint}
            >
              <p className="text-base"> Mint now</p>
            </button>
          </div>
        ) : (
          <p className="text-xl text-pink-500 mt-10">
            Connect your wallet to mint
          </p>
        )}
      </div>
    </div>
  );
};

export default MainMint;
