public class Main {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();
        Observer mobileApp = new MobileApp("StockMobile");
        Observer webApp = new WebApp("StockWeb");
        market.registerObserver(mobileApp);
        market.registerObserver(webApp);
        market.setStockPrice(123.45);
        market.setStockPrice(128.90);
        market.removeObserver(webApp);
        market.setStockPrice(130.75);
    }
}

