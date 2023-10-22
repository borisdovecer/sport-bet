import { BetModalProps } from "./interfaces.ts";
import { ChangeEvent, FC, useState } from "react";

/**
 * BetModal Component
 *
 * The BetModal component is a modal window that appears when the user decides to place a bet on an event.
 * It receives the selected odds and a closeModal function as props. Users can specify the amount they
 * want to bet, see the potential win, and confirm their bet. Upon successful bet placement, a message
 * is displayed, and the modal automatically closes after a short duration.
 *
 * @param {BetModalProps} { selectedOdds, closeModal } - Props received by the BetModal component.
 * @param {number} selectedOdds - The odds selected by the user for the bet.
 * @param {Function} closeModal - A function to close the modal window.
 * @returns {JSX.Element} A modal window where users can place their bets.
 */
const BetModal: FC<BetModalProps> = ({ selectedOdds, closeModal }) => {
  const [message, setMessage] = useState<string>("");
  const [betAmount, setBetAmount] = useState<number>(10);
  const potentialWin: number = betAmount * selectedOdds;

  const handleBetSubmit = (): void => {
    setMessage("Bet placed successfully!");
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl shadow-gray-900 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-200" id="modal-title">
                Place Your Bet
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Selected Odds: {selectedOdds.toFixed(2)}
                </p>
                <input
                  type="number"
                  min={0}
                  className="mt-3 w-full border p-2 rounded-md"
                  value={betAmount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setBetAmount(Number(e.target.value))}
                />
                <p className="mt-3 text-sm text-gray-500">
                  Potential Win: ${(potentialWin).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            {message ?
              <p className="px-4 text-lg text-center text-lime-600">
                {message}
              </p>
              :
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime-600 text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:text-sm"
                onClick={handleBetSubmit}
              >
                Place Bet
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetModal;
