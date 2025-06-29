BEGIN
    FOR rec IN (
        SELECT c.customer_id, l.loan_id
        FROM customers c
        JOIN loans l ON c.customer_id = l.customer_id
        WHERE TIMESTAMPDIFF(YEAR, c.dob, CURDATE()) > 60
    )
    LOOP
        UPDATE loans
        SET interest_rate = interest_rate * 0.99
        WHERE loan_id = rec.loan_id;
    END LOOP;
    COMMIT;
END;
