
// initialize all required global variables
let totalstudent = 0
let totalstaff = 0
let schoolAccount = 0
let studentsFeesRevenue = 0
let staffSalaryCost = 0

//  creating school object
let School = {
    name: "King's College",
    address: " Lagos ",
    student: [],
    staff: [],

    // all required methods for dynamic functionali
    registerStudent: function(name, middlename, surname, state, age, gender, sclass, schoolfee){
        for (let i = 0; i < School.student.length; i++){
            //ensure that a student is not registered twice
            for (let i = 0; i < School.student.length; i++){
                if (name === School.student[i].name && middlename === School.student[i].middlename && surname === School.student[i].surname && state === School.student[i].state && age === School.student[i].age){
                    console.log("sorry, this student is already registered in our database and is a student of King's college")
                }
            }
        }
        
        totalstudent++
        let id = `KingStudent${totalstudent}`
        // create a variable and store an object containting the student information in it.
        name = {name, middlename, surname, state, age, gender, sclass, schoolfee, id}
        // push the variable to the student array
        School.student.push(name)  
    },
    
     getAllStudents: function(){
        return School.student
    },

    getStudentbyID: function(id){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                return School.student[i]
            }
        }   
    },

    
    getStudentbyName: function(name){
        for(let i = 0; i < School.student.length; i++){
            if (name === School.student[i].name){
                return School.student[i]
            }
        }
    },


    // sortStudents: function(arg){
    //     School.student.sort(function(arg){
    //         if (arg ===  School.student[i].arg){
    //             return School.student[i]
    //         }
    //     })
    // },
    

    modifyStudent: function(id, key, value){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                School.student[i][key] = value
                return School.student[i] 
            }  
        }  
    },
    
    //use splice
    deleteStudent: function(id){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                School.student.splice(i, 1)
                return School.student 
            }
        }  
    },


    // ---------------------------------------------------------------------------------------------------------

    // set up the staff employment pmethod
    employStaff: function(name, middlename, surname, state, age, gender, subject, yearsOfExperience, qualification, contact, salary){
        for (let i = 0; i < School.staff.length; i++){
            if (name === School.staff[i].name && middlename === School.staff[i].middlename && surname === School.staff[i].surname && state === School.staff[i].state && age === School.staff[i].age){
                console.log("sorry, this staff is already registered in our database and is a staff of King's college")
            }
    }
        totalstaff++
        let id = `kingStaff${totalstaff}`
        name = {name, middlename, surname, state, age, gender, subject, yearsOfExperience, qualification, contact, salary, id}
        School.staff.push(name)  
    },


    getAllStaff: function(){
        return School.staff
    },

    // the methods below itirates over the array and accesses the object properties using an id to carry an operation when a condition is met.

    getStaffbyId: function(id){
        for(let i = 0; i < School.staff.length; i++){
            if (id === School.staff[i].id){
                return School.staff[i]
            }
        }
    },

    
    getStaffbyName: function(name){
        for(let i = 0; i < School.staff.length; i++){
            if (name === School.staff[i].name){
                return School.staff[i]
            }
        }
    },

    
    modifyStaff: function(id, key, value){
        for(let i = 0; i < School.staff.length; i++){
            if (id === School.staff[i].id){
                School.staff[i][key] = value
                return School.staff[i] 
            }
        }   
    },

    // use splice
    deleteStaff: function(id){
        for(let i = 0; i < School.staff.length; i++){
            if (id === School.staff[i].id){
                School.staff.splice(i, 1)
                return School.staff 
            }
        }   
    },

    // This method gets school accounts by adding all the school fees, and all staff salaries separately. then subtracting both from each other.

    getSchoolAccount: function(){
        for (let i = 0; i < School.student.length; i++){
            // console.log(School.student[i].schoolfee)
            studentsFeesRevenue += parseInt(School.student[i].schoolfee)    
            // console.log(studentsFeesRevenue)
            staffSalaryCost += parseInt(School.staff[i].salary)
            schoolAccount = studentsFeesRevenue - staffSalaryCost
         }   return schoolAccount
    },


    // this method gets all necessaryinformation about the school
    getSchoolInfo: function(){
        return {"name": this.name, "address": this.address, "students": this.getAllStudents(), "staff": this.getAllStaff(), "account": this.getSchoolAccount()}
    },
}


// ---------------------------------------------------------------------------------------------------------

School.registerStudent('Mike', 'ama','john', 'Edo', 15, 'male', 'JS 1', '30500', 'blue')
School.registerStudent('Usman',  'adama','Usman', 'Katsina', 18, 'male', 'SS 1', '22000', 'yellow')
School.registerStudent('morenike', 'okon ','simon', 'Edo', 17, 'female', 'JS 2', '50000', 'green')
School.registerStudent('Anna', 'moza','Ibrahim', 'Kano', 17, 'female', 'JS 2', '50000', 'blue')
School.registerStudent('Uche', 'chi chi','obi', 'Anambra', 20, 'male', 'SS 2', '50000', 'red')
School.registerStudent('Nike', 'eno','john', 'Delta', 17, 'female', 'JS 2', '50000', 'yellow')
School.registerStudent('ike', 'ama','ken', 'Abuja', 13, 'male', 'JS 3', '40000', 'red')


School.employStaff('Mike', 'ama','john', 'Edo', 20, 'male', 'maths', '4', 'Bsc', '0837455929', "50000")
School.employStaff('John', 'eno','john', 'Delta', 35, 'male', 'science', '5', 'Bsc', '0837455929', '50000' )
School.employStaff('Bilikisu', 'adama','Usman', 'Katsina', 26, 'female', 'PHE', '6', 'Bsc', '0837455929', '50000' )
School.employStaff('Ciara', 'Nkechi','Eze', 'Imo', 32, 'female', 'Biology', '5', 'Bsc', '0837455929', '50000' )
School.employStaff('Diana', 'ama','ken', 'Abuja', 28, 'female', 'History', '4', 'Bsc', '0837455929', '50000' )
School.employStaff('Elisha', 'okon ','simon', 'Edo', 23, 'male', 'Agric', '2', 'Bsc', '0837455929', '50000' )
School.employStaff('Farouk', 'moza','Ibrahim', 'Kano', 20, 'male', 'Psychology', '1', 'Bsc', '0837455929', '50000' )
School.employStaff('Glory', 'chi chi','obi', 'Anambra', 25, 'female', 'maths', '4', 'Bsc', '0837455929', '50000' )



// console.log(School.getSchoolAccount())
// console.log(School.getSchoolInfo())
// console.log(School.getAllStudents())
// console.log(School.getStudentbyID())
// console.log(School.getStudentbyName())
// console.log(School.getStudentbyName('Mike'))
// console.log(School.deleteStudent('KingStudent4'))
// console.log(School.modifyStudent('KingStudent4', 'age', 20))

// console.log(School.getStaffbyID())
//console.log(School.getAllStaff())
// console.log(School.getStaffbyName(name))
// console.log(School.deleteStaff(id))
// console.log(School.modifyStaff('KingStudent4', 'age', 20))


// finished all.