import axios from "axios";

const subdomain = "1c10da7e";

export default axios.create({
  baseURL: `http://${subdomain}.ngrok.io/`
  /*

   the json server created by 
   npm packages json-server and ngrok
   
   /// json-server scripts //
   db -> json-server --watch db.json --port 3004
   tunnel -> ngrok http 3004

  */
});
