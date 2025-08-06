package com.example.junitsetup;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAddition() {
        Calculator calc = new Calculator();
        assertEquals(7, calc.add(3, 4));
    }

    @Test
    public void testSubtraction() {
        Calculator calc = new Calculator();
        assertEquals(1, calc.subtract(4, 3));
    }

    @Test
    public void testMultiplication() {
        Calculator calc = new Calculator();
        assertEquals(12, calc.multiply(3, 4));
    }

    @Test
    public void testDivision() {
        Calculator calc = new Calculator();
        assertEquals(2, calc.divide(8, 4));
    }

    @Test(expected = ArithmeticException.class)
    public void testDivisionByZero() {
        Calculator calc = new Calculator();
        calc.divide(10, 0); // should throw ArithmeticException
    }
}
