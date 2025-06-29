DELIMITER $$

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE acc_id INT;
    DECLARE bal DECIMAL(10,2);

    DECLARE cur CURSOR FOR
        SELECT AccountID, Balance
        FROM Accounts
        WHERE UPPER(AccountType) = 'SAVINGS';

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO acc_id, bal;
        IF done THEN
            LEAVE read_loop;
        END IF;

        UPDATE Accounts
        SET Balance = bal + (bal * 0.01),
            LastModified = CURDATE()
        WHERE AccountID = acc_id;
    END LOOP;

    CLOSE cur;
    COMMIT;
END$$

DELIMITER ;
