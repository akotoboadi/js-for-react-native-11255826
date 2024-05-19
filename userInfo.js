function createUserProfiles(originalNames,modifiedNames){
    if (!Array.isArray(originalNames) || !Array.isArray(modifiedNames)){
     throw new Error(`Both inputs must be array`);
 
    }
    if (originalNames.length !== modifiedNames.length){
     throw new Error(`Both arrays must have the same length`)
    }
    return originalNames.map((originalName, index) => ({
         id: index + 1,
         originalName,
         modifiedName: modifiedNames[index]
     }));
 
 }
 
 const originalNames = ["Alex", "Bonsu", "Giddy"];
 const modifiedNames = ["Alexa", "Bonsuwa", "Gideon"];
 
 const Profile = createUserProfiles(originalNames,modifiedNames)
 console.log(Profile)