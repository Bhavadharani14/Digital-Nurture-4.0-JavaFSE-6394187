BEGIN
    FOR rec IN (
        SELECT loan_id, customer_id, end_date
        FROM loans
        WHERE DATEDIFF(end_date, CURDATE()) BETWEEN 0 AND 30
    )
    LOOP
        SELECT CONCAT('Reminder: Loan ', rec.loan_id, ' for Customer ', rec.customer_id, ' is due on ', rec.end_date) AS message;
    END LOOP;
END;
