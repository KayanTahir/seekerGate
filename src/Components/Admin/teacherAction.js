import axios from 'axios';

const handleOpenModal = (teacher_id) => {
    return axios.get('http://127.0.0.1:8000/api/edit/' + teacher_id)
        .then(res => {
            return res.data;  // Return the fetched data
        })
        .catch(err => console.log(err));
};

export default handleOpenModal;


