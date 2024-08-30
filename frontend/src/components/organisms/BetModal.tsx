import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

interface BetModalProps {
  eventName: string;
  onClose: () => void;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 4px;
  width: 300px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const BetModal: React.FC<BetModalProps> = ({ eventName, onClose }) => {
  const [betAmount, setBetAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleBet = useCallback(() => {
    if (betAmount <= 0) {
      setError("Please enter a valid bet amount.");
      return;
    }
    alert("Bet placed successfully!");
    onClose();
  }, [betAmount, onClose]);

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Place Bet on {eventName}</h2>
        <Input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          placeholder="Enter bet amount"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonContainer>
          <Button primary onClick={handleBet}>
            Place Bet
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default BetModal;
