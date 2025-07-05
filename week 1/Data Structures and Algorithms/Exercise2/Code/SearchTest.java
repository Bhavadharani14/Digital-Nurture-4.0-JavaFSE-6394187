public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shampoo", "Personal Care"),
            new Product(150, "Chair", "Furniture"),
            new Product(333, "Smartphone", "Electronics"),
            new Product(120, "Book", "Stationery")
        };
        int key = 150;
        int linearIndex = LinearSearch.search(products, key);
        System.out.println("Linear Search Result: " + (linearIndex != -1 ? products[linearIndex] : "Not Found"));
        int binaryIndex = BinarySearch.search(products, key);
        System.out.println("Binary Search Result: " + (binaryIndex != -1 ? products[binaryIndex] : "Not Found"));
    }
}
