import * as enrollmentsDao from "./dao.js"

export default function EnrollmentRoutes(app) {
    app.post("/api/users/current/courses/:courseId/enrollments", (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
        res.json(newEnrollment);
    });
    
    app.delete("/api/users/current/courses/:courseId/enrollments", (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        enrollmentsDao.unenrollUserFromCourse(currentUser._id, courseId);
        res.send(newEnrollment);
    });

    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.send(enrollments);
      });
}
