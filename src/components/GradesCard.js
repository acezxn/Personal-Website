import "./css/InfoCard.css"
import profile from "./../data/profile.json";

export const GradesCard = () => {
    return (
        <div className="info_card" style={{ height: 200 }}>
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
            <table className="monospace">
                <tr>
                    <th>Name</th>
                    <th>Semester</th>
                    <th>Grade</th>
                </tr>
                {
                    profile.grades.university.courses.map((course) => (
                        <tr>

                            <td>{course.name}</td>
                            <td>{course.semester}</td>
                            <td>{course.grade}</td>
                        </tr>
                    ))
                }
            </table>
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
            <table className="monospace">
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
                {
                    profile.grades.high_school.courses.map((course) => (
                        <tr>

                            <td>{course.name}</td>
                            <td>{course.grade}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}