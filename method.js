const student = {
    id: 101,
    name:'RJ Babu Bhai',
    major: 'Mathematics',
    subjects :['english', 'Economics', 'math 1010'],
    bestFriend:{
        name:'Kodo Mia',
        major:'Bioilogy'    
    },

   takeExam: function(){
       console.log(this.name,'taking Exam')
   }


}
student.takeExam();