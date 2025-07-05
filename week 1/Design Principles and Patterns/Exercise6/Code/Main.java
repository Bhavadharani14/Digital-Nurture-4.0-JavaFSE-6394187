public class Main {
    public static void main(String[] args) {
        Image image1 = new ProxyImage("cat_photo.jpg");
        Image image2 = new ProxyImage("dog_photo.jpg");
        image1.display(); 
        image1.display(); 
        System.out.println();
        image2.display(); 
        image2.display(); 
    }
}
