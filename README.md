# CordovaOpenNewActicvity
To Open a new activity from ionic cordova application

<b>Call Below function from ionic ts file </b> 

window['plugins'].newActivityPlugin.new_activity('value',function(res){ <br>
      console.log("Response Data : "+res) <br>
    },function(err){ <br>
      console.log("Response Data : "+err); <br>
    });
