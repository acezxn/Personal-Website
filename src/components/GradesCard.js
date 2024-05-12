import "./css/InfoCard.css"
import profile from "./../data/profile.json";

export const GradesCard = () => {
    return (
        <div style={{height: "20vh"}} className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Grades</h6>
            <label className="field_left monospace"><b>Purdue University:</b></label>
            <br />
            <br />
            <label className="field_left monospace">GPA:</label>
            <label className="field_right monospace">{profile.grades.university.gpa}</label>
            <hr />
            <br />
            {
                profile.grades.university.courses.map((course) => (
                    <>
                        <label className="field_left monospace">{course.name}</label>
                        <label className="field_right monospace">{course.grade}</label>
                        <br />
                        <hr />
                    </>
                ))
            }
            <br />
            <label className="field_left monospace"><b>High School:</b></label>
            <br />
            <br />
            <label className="field_left monospace">GPA:</label>
            <label className="field_right monospace">{profile.grades.high_school.gpa}</label>
            <hr />
            <label className="field_left monospace">SAT:</label>
            <label className="field_right monospace">{profile.grades.high_school.sat}</label>
            <hr />
            <br />
            {
                profile.grades.high_school.courses.map((course) => (
                    <>
                        <label className="field_left monospace">{course.name}</label>
                        <label className="field_right monospace">{course.grade}</label>
                        <br />
                        <hr />
                    </>
                ))
            }
        </div>
    )
}