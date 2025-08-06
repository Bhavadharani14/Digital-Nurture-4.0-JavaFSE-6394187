public class FinancialForecast {
    public static double predictFutureValue(double currentValue, double rate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return predictFutureValue(currentValue * (1 + rate), rate, years - 1);
    }
    public static double predictIteratively(double currentValue, double rate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + rate);
        }
        return currentValue;
    }
    public static void main(String[] args) {
        double presentValue = 10000.0;
        double annualGrowthRate = 0.08;
        int forecastYears = 5;
        double recursiveResult = predictFutureValue(presentValue, annualGrowthRate, forecastYears);
        double iterativeResult = predictIteratively(presentValue, annualGrowthRate, forecastYears);
        System.out.printf("Future value using recursion after %d years: %.2f%n", forecastYears, recursiveResult);
        System.out.printf("Future value using iteration after %d years: %.2f%n", forecastYears, iterativeResult);
    }
}
