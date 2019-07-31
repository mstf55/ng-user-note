# UserNotesDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.




## rules defined 


```


rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
      match /users/{userId} {
      	allow read,write;
        match /notes/{note} {    
        	allow  read,write : if request.auth != null
    				}
      	} 
        
        match /changes/{changeId} {
      		allow read,write;

      	}
 	 }
  
}
```

