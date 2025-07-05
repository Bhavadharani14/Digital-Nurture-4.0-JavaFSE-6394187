DELIMITER $$

CREATE PROCEDURE TransferFunds(
    IN fromAcc INT,
    IN toAcc INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE fromBalance DECIMAL(10,2);

    SELECT Balance INTO fromBalance
    FROM Accounts
    WHERE AccountID = fromAcc
    FOR UPDATE;

    IF fromBalance >= amount THEN
        UPDATE Accounts
        SET Balance = Balance - amount,
            LastModified = CURDATE()
        WHERE AccountID = fromAcc;

        UPDATE Accounts
        SET Balance = Balance + amount,
            LastModified = CURDATE()
        WHERE AccountID = toAcc;

        INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
        VALUES
            (NULL, fromAcc, CURDATE(), amount, 'Withdrawal'),
            (NULL, toAcc, CURDATE(), amount, 'Deposit');

        SELECT 'Transfer successful' AS Status;
    ELSE
        SELECT 'Transfer failed: Insufficient balance' AS Status;
    END IF;
END$$

DELIMITER ;
