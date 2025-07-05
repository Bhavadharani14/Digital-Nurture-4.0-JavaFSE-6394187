public class Main {
    public static void main(String[] args) {
        PaymentProcessor paypalProcessor = new PayPalAdapter(new PayPalGateway());
        PaymentProcessor stripeProcessor = new StripeAdapter(new StripeGateway());
        paypalProcessor.processPayment(150.75);
        stripeProcessor.processPayment(320.50);
    }
}
