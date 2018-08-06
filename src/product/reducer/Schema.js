import { schema } from 'normalizr';
const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})
const lessonSchema = new schema.Entity('lesson', {}, { idAttribute: 'id' });
 const lessonListSchema = new schema.Array(lessonSchema);

 export default {
   lessonListSchema
 };
export const SATISFILEDLIST = [ satisfiled ];

// import { schema } from 'normalizr';
// const {normalize,Schema}=require('normalizr');
//  const lessonSchema = new schema.Entity('lesson', {}, {
//     idAttribute: 'id' 
//   });
//  const lessonListSchema = new schema.Array(lessonSchema);

//  export default {
//    lessonListSchema
//  };