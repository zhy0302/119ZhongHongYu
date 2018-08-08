import { schema } from 'normalizr';

const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teacher',{},{
  idAttribute:'id'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})

const studentList = new schema.Entity('studentList',{},{
  idAttribute:'mid'
})
const basicInfo = new schema.Entity('basicInfo',{},{
  idAttribute:'time'
})
const classInfo = new schema.Entity('classInfo',{
  classInfo:classes,
  teacherInfo:teacher
},{
  idAttribute:'id'
})
const comments1 = new schema.Entity('comments1',{
},{
  idAttribute:'id'
})
const comments=[comments1]
const homeworkList = new schema.Entity('homeworkList',{
  classInfo:classes,
  teacherInfo:teacher,
  comments:comments
},{
  idAttribute:'id'
})


export const SATISFILEDLIST = [ satisfiled ];
export const STUDENTLIST =[studentList ];
export const CLASSINFO =[classInfo];
export const BASICINFO = [ basicInfo ];
export const HOMEWORKLIST=[homeworkList];
