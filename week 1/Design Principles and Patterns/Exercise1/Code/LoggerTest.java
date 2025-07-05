public class LoggerTest {
    public static void main(String[] args) {
        Logger loggerA = Logger.getInstance();
        Logger loggerB = Logger.getInstance();
        loggerA.log("Application started.");
        loggerB.log("Performing operations...");
        if (loggerA == loggerB) {
            System.out.println("Logger is Singleton: Both references are identical.");
        } else {
            System.out.println("Logger is not Singleton: Different instances found.");
        }
    }
}
