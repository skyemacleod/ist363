/*const list = [1, 2, 3, 4];
    function App() {
        return (
            <div>
                <h1>Map to Loop Lists</h1>
                <ul>
                    {
                        list.map(function(item) {
                            return <li>{item}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
export default App;

//* #1 */
const students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior',major: 'Innovation, Society and Technology'}];

function App() {
    return (
    <div>
        <h1>Students</h1>
        <ul>
        {
            students.map(function(student) {
            return <li>{student.name}<br/>{student.year}<br/> {student.major}</li>;
            })
        }
        </ul>
    </div>
    );
}
export default App;

//* #2 *//

