import React, { useEffect, useState } from 'react';
import './classementItems.css';
import ClassementItem from '../classementItem/ClassementItem';

import axios from '../../../api/axios';
/* Use the variable id from localStorage (previsously stored in the login page)
to dynamically get the user's datas */
const USER_ID_URL = `${localStorage.getItem('id')}`;
console.log(USER_ID_URL);

const CLASSEMENTS = '/leaderboard';
// const POINTSUSER = `/leaderboard/${USER_ID_URL}`;

function ClassementItems() {
  const [classement, setClassement] = useState([]);

  const getClassement = async () => {
    try {
      const response = await axios.get(CLASSEMENTS);
      const classementList = response.data.leaderboard;
      setClassement(classementList);
      console.log(response);
    } catch (err) {
      console.log('error when fetching data');
    }
  };
  useEffect(() => getClassement(), []);

  return (
    <>
      {classement.map((item) => (
        <ClassementItem
          key={item.user_id}
          position={item.leaderboard_position}
          pseudo={item.pseudo}
          avatar={item.avatar}
          rank={item.rank}
          km={parseFloat(item.total_distance_run).toFixed(2)}
          points={Math.round(item.total_points)}
        />
      ))}
    </>
  );
}

// ClassementItems.propTypes = {
//   classementData: PropTypes.arrayOf(
//     PropTypes.shape({
//       position: PropTypes.number.isRequired,
//       pseudo: PropTypes.string.isRequired,
//       rank: PropTypes.number.isRequired,
//       km: PropTypes.number.isRequired,
//       challenges: PropTypes.number.isRequired,
//       succes: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default ClassementItems;
