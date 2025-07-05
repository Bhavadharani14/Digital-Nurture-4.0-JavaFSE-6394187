public class Main {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();
        context.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456", "Alice"));
        context.pay(250.00);
        context.setPaymentStrategy(new PayPalPayment("alice@example.com"));
        context.pay(99.99);
    }
}
