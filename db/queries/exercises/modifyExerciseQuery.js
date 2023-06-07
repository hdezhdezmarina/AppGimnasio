const getDB = require('../../getDB');

const modifyExerciseQuery = async (exerciseData) => {
  let connection;

  try {
    connection = await getDB();

    const { name, description, typologyId, muscleGroupId, photo, idExercise } =
      exerciseData;

    //actualizamos datos
    await connection.query(
      `
        UPDATE exercises
        SET name = ?, description = ?, photo = ?, typologyId = ?, muscleGroupId = ?
        WHERE id = ?
    `,
      [name, description, photo, typologyId, muscleGroupId, idExercise]
    );
  } finally {
    if (connection) connection.release();
  }
};

module.exports = modifyExerciseQuery;