public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setName("John Doe");
        student.setId("S12345");
        student.setGrade("A");
        StudentView view = new StudentView();
        StudentController controller = new StudentController(student, view);
        controller.updateView();
        controller.setStudentName("Jane Smith");
        controller.setStudentGrade("A+");
        controller.updateView();
    }
}
