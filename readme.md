1. Login -> done
desc - it is use to make a user login
URL -> https://webinar.dashback.in/api/login
METHOD  -> POST
params:{
    * email,
    * passsword
}


2. Register -> done
desc -> use to register user
URL -> https://webinar.dashback.in/api/register
METHOD  -> POST
params:{
    *name,
    * email,
    *number
    * passsword
}

3. Next call -> done
use to get next user data
URL -> https://webinar.dashback.in/api/nextcall
METHOD  -> POST
headers :{
    *Authorization token
}


4. makecall -> keys ni aae
URL -> https://webinar.dashback.in/api/makecall
METHOD  -> POST
headers :{
    *Authorization token
}
params:{
    *agentnumber,
    *custnumber
}

5. Update false -> done
Desc -> update and set all calls as false
URL -> https://webinar.dashback.in/api/updatetofalse
METHOD  -> POST
headers :{
    *Authorization token
}

6. get all numbers -> done
Desc -> get all numbers and data
URL -> https://webinar.dashback.in/api/allnumber
METHOD  -> get
headers :{
    *Authorization token
}


7. updatemetadata -> done
desc -> 
URL -> https://webinar.dashback.in/api/updatemetadata
headers :{
    *Authorization token
}
METHOD  -> patch
params:{
    *number,
    *data  Type object 
}

8. update register number 
URL -> https://webinar.dashback.in/api/isregisterupdate
METHOD  -> patch
headers :{
    *Authorization token
}
params:{
    *number,
    callstatus,
    isregister,
    isregisterdate
}

9. todaycounts  -> left

URL -> https://webinar.dashback.in/api/todaycounts
METHOD  -> get
headers :{
    *Authorization token
}

10. dekete number by number  -> done

URL -> https://webinar.dashback.in/api/deletenumber/:8561651
METHOD  -> delete
headers :{
    *Authorization token
}

