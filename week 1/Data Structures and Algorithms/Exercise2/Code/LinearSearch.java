public class LinearSearch {
    public static int search(Product[] products, int key) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == key) {
                return i;
            }
        }
        return -1;
    }
}
