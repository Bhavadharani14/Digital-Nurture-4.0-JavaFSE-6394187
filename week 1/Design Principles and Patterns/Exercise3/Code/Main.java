public class Main {
    public static void main(String[] args) {
        Computer basicComputer = new Computer.Builder("Intel i3", "8GB").build();
        basicComputer.displayConfiguration();
        System.out.println();
        Computer gamingComputer = new Computer.Builder("Intel i9", "32GB")
                .setStorage("1TB SSD")
                .setGraphicsCard("NVIDIA RTX 4080")
                .setWiFi(true)
                .setBluetooth(true)
                .build();
        gamingComputer.displayConfiguration();
        System.out.println();
        Computer officeComputer = new Computer.Builder("AMD Ryzen 5", "16GB")
                .setStorage("512GB SSD")
                .setWiFi(true)
                .build();
        officeComputer.displayConfiguration();
    }
}
