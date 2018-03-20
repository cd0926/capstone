


/*const oracledb = require('oracledb');

oracledb.getConnection(
  {
    user          : "capstone",
    password      : "capstone123",
    connectString : "miraencs.iptime.org:9292/orcl"
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      `SELECT URL
       FROM JJG_TEST
       WHERE NUM = 1`,
       
    //  [103],  // bind value for :id
   /* { fetchInfo :
      {
        "RANK-CODE":      { type : oracledb.STRING },  // return the date as a string
     }
  }, 
    function(err, result) 
      {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
       // console.log(result.rows);
        const url = result.rows;
        doRelease(connection);
        console.log(url);
      });
  });

function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}*/