import { useEffect, useState } from "react";
import axios from 'axios';
import abc from './page.module.css';

function Allrecords() {
    const [record, setRecord] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        const storedCheckedItems = JSON.parse(localStorage.getItem('checkedItems')) || [];
        setCheckedItems(storedCheckedItems);

        const url = "http://localhost:8081/route/alldata";
        axios.get(url).then((res) => {
            console.log(res.data);
            setRecord(res.data);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
    }, [checkedItems]);

    const handleCheckboxChange = (id) => {
        setCheckedItems((prevCheckedItems) => {
            if (prevCheckedItems.includes(id)) {
                return prevCheckedItems.filter((item) => item !== id);
            } else {
                return [...prevCheckedItems, id];
            }
        });
    };

    const handleDelete = async () => {
        const updatedRecord = record.filter((rec) => !checkedItems.includes(rec._id));
        setRecord(updatedRecord);

        const deleteUrl = "http://localhost:8081/route/deletedata";
        await axios.post(deleteUrl, { ids: checkedItems });
        setCheckedItems([]); 
    };

    return (
        <>
            <table className={abc.mahead}>
              
                <thead className={abc.heads}>
                    <tr>
                        <th className={abc.th1}>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
              
                <tbody>
                    {record &&
                        record.map((rec) => {
                            const isChecked = checkedItems.includes(rec._id);

                            return (
                                <tr className={abc.tbrow} key={rec._id}>
                                    <td className={isChecked ? abc.strike : ''}>{rec.title}</td>
                                    <td className={isChecked ? abc.strike : ''}>{rec.description}</td>
                                    <td className={abc.tbrow}>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => handleCheckboxChange(rec._id)}
                                        />
                                    </td>
                                    <td>
                                        <button className={abc.dbtn} onClick={handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}

export default Allrecords;
