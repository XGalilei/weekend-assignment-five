import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Admin() {
    const entryList = useSelector(store => store.entries);

    return <div>
        <p>Feedback Results</p>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {entryList.map( (entry, index) => 
                <tr>
                    <td>{entry.feeling}</td>
                    <td>{entry.understanding}</td>
                    <td>{entry.support}</td>
                    <td>{entry.comments}</td>
                    <td></td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default Admin;