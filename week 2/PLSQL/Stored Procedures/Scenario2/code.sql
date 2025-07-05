DELIMITER $$

CREATE PROCEDURE UpdateEmployeeBonus(
    IN deptName VARCHAR(50),
    IN bonusPct DECIMAL(5,2)
)
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonusPct / 100)
    WHERE Department = deptName;

    COMMIT;
END$$

DELIMITER ;
