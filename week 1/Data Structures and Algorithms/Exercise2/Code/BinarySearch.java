import java.util.Arrays;
import java.util.Comparator;
public class BinarySearch {
    public static int search(Product[] products, int key) {
        Arrays.sort(products, Comparator.comparingInt((Product p) -> p.productId));
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == key) return mid;
            if (products[mid].productId < key) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}

