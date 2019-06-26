# CordovaOpenNewActicvity
To Open a new activity from ionic cordova application

Call Below function from ionic ts file 

window['plugins'].newActivityPlugin.new_activity('value',function(res){
      console.log("Response Data : "+res)
    },function(err){
      console.log("Response Data : "+err);
    });
